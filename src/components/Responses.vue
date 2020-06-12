<template>
  <div>
    <div class="mb-5">Responses</div>
    <div v-for="(response, key) in responses" :key="key" class="bg-white">
      <div
        class="flex items-center justify-between p-5 cursor-pointer"
        @click="toggle"
      >
        <div class="flex items-center">
          <div>{{ response.code }}</div>
          <div class="ml-2">{{ response.status }}</div>
        </div>
        <div>
          {{ response.name }}
        </div>
      </div>

      <div v-if="isOpened" class="p-5">
        <highlight-code lang="json">
          {{ response.body }}
        </highlight-code>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Responses',

  props: {
    responses: {
      default: null,
      type: Array
    }
  },

  data() {
    return {
      isOpened: false
    }
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened
    }
  }
}
</script>
