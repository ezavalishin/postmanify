<template>
  <div v-if="body">
    <div class="mb-5">Body</div>

    <div v-if="isUrlEncoded">
      <div class="shadow overflow-hidden rounded border-b border-gray-200">
        <table class="min-w-full bg-white">
          <thead class="bg-gray-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Key
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Description
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Example
              </th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            <tr v-for="(param, key) in urlencoded" :key="key">
              <td class="text-left py-3 px-4">{{ param.key }}</td>
              <td class="text-left py-3 px-4">
                {{ param.description }}
              </td>
              <td class="text-left py-3 px-4">
                {{ param.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestBody',
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
