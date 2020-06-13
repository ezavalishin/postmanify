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

    <component
      :is="item.item ? 'folder' : 'one'"
      :item="item"
      :key="key"
      v-for="(item, key) in items"
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
    }
  },

  computed: {
    variables() {
      return this.$store.state.variables.values
    },
  },

  async created() {
    this.dumpLink = document
      .getElementById('postmanify')
      .getAttribute('data-collection')
    const { data } = await axios.get(this.dumpLink)

    this.items = data.item
    this.$store.commit('variables/set', data.variable)
  },

  methods: {
    openVariables() {
      this.$refs.variables.open()
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
