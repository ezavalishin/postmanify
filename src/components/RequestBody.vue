<template>
  <div v-if="body">
    <div class="mb-5">Body</div>

    <div v-if="isUrlEncoded">
      <params-table :params="urlencoded" />
    </div>
  </div>
</template>

<script>
import ParamsTable from './ParamsTable'
export default {
  name: 'RequestBody',
  components: { ParamsTable },
  props: {
    body: {
      default: null,
      type: Object,
    },
  },

  computed: {
    mode() {
      return this.body.mode
    },

    isUrlEncoded() {
      return this.body.mode === 'urlencoded'
    },

    isRaw() {
      return this.body.mode === 'raw'
    },

    isJsonRaw() {
      let isJson = false

      try {
        JSON.parse(this.raw)
        isJson = true
      } catch (e) {
        isJson = false
      }

      return this.isRaw && isJson
    },

    urlencoded() {
      return this.body.urlencoded
    },

    raw() {
      return this.body.raw
    },

    json() {
      return JSON.parse(this.raw)
    },
  },
}
</script>
