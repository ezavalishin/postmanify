<template>
  <div class="container mx-auto">
    <header class="mb-16 flex justify-between flex-wrap items-center">
      <div>
        <div class="text-5xl">postmanify</div>
        <a href="https://github.com/ezavalishin/postmanify" target="_blank"
          >github.com/ezavalishin/postmanify</a
        >
      </div>
      <div>
        <button @click="openVariables">variables</button>
      </div>
      <!--            <a :href="dumpLink" target="_blank">Download dump</a>-->
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
          :name="key"
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

export default {
  components: {
    FormInput,
    Folder,
    One,
    SweetModal,
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
