<template>
  <div class="container mx-auto">
    <header class="mb-16 flex justify-between flex-wrap items-center">
      <div>
        <div class="text-5xl">postmanify</div>
        <a href="https://github.com/ezavalishin/postmanify" target="_blank"
          >github.com/ezavalishin/postmanify</a
        >
      </div>
      <div class="flex">
        <button
          class="flex justify-center flex-col items-center mr-4 shadow p-2"
          @click="openVariables"
        >
          <eye class="w-5 fill-current" />
          Variables
        </button>

        <a
          class="flex justify-center flex-col items-center shadow p-2"
          :href="dumpLink"
          target="_blank"
        >
          <download class="w-5 fill-current" />
          Dump
        </a>
      </div>
    </header>

    <div>
      <form-input name="search" v-model="search" label="Search" />
    </div>

    <component
      :is="item.item ? 'folder' : 'one'"
      :item="item"
      :key="key"
      v-for="(item, key) in filteredItems"
    >
    </component>

    <sweet-modal name="variables" ref="variables" title="Variables">
      <div>
        <form-input
          :name="variable.key"
          :key="key"
          :label="variable.key"
          v-for="(variable, key) in variables"
          v-model="variable.value"
        />
      </div>
    </sweet-modal>
  </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import axios from 'axios'
import Folder from '../components/Folder'
import One from '../components/One'
import FormInput from '../components/FormInput'
import Eye from '../assets/eye.svg'
import Download from '../assets/download.svg'
import storagable from '../mixins/storagable'
import getUrlParams from '../utils/getUrlParams'

export default {
  components: {
    FormInput,
    Folder,
    One,
    SweetModal,
    Eye,
    Download,
  },
  data() {
    return {
      items: [],
      dumpLink: null,
      search: null,
    }
  },

  mixins: [storagable],

  computed: {
    variables() {
      return this.$store.state.variables.values
    },

    filteredItems() {
      return this.items.filter(this.filterItems)
    },
  },

  watch: {
    search(value) {
      this.setValue('search', value)
    },
  },

  async created() {
    this.dumpLink = document
      .getElementById('postmanify')
      .getAttribute('data-collection')
    const { data } = await axios.get(this.dumpLink)

    this.items = data.item
    this.$store.commit('variables/set', data.variable)

    const hash = getUrlParams(location.hash)

    if (hash.request) {
      const value = hash.request

      const [folder] = value.split('::')

      this.setValue(folder, true)
      this.setValue(value, true)

      location.hash = ''

      this.$nextTick(() => {
        const el = document.getElementById(value)
        if (el) {
          window.scrollTo({
            top: el.offsetTop,
          })
        }
      })
    } else {
      if (this.getValue('search')) {
        this.search = this.getValue('search')
      }
    }
  },

  methods: {
    openVariables() {
      this.$refs.variables.open()
    },

    filterItems(rootItem) {
      const item = { ...rootItem }

      if (!this.search) {
        return true
      }

      const term = this.search.toLocaleLowerCase()

      if (
        (item.name && item.name.toLowerCase().includes(term)) ||
        (item.request &&
          item.request.url &&
          item.request.url.raw.toLowerCase().includes(term))
      ) {
        return true
      }

      if (item.item) {
        item.item = item.item.filter(this.filterItems)

        if (item.item.length > 0) {
          return true
        }
      }

      return false
    },
  },
}
</script>

<style>
.sweet-modal .sweet-box-actions .sweet-action-close {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
