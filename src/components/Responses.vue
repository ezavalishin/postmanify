<template>
  <div>
    <div class="mb-5">Responses</div>
    <div :key="key" class="bg-white" v-for="(response, key) in responses">
      <div
        @click="toggle"
        class="flex items-center justify-between p-5 cursor-pointer"
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
        <code-highlight>{{ response.body }}</code-highlight>
      </div>
    </div>
  </div>
</template>

<script>
import CodeHighlight from './CodeHighlight'
export default {
  name: 'Responses',
  components: { CodeHighlight },
  props: {
    responses: {
      default: null,
      type: Array,
    },
  },

  data() {
    return {
      isOpened: false,
    }
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened
    },
  },
}
</script>
