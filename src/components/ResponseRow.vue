<template>
  <div class="bg-white">
    <div
      @click="toggle"
      class="flex items-center justify-between p-5 cursor-pointer"
      :class="{ 'bg-green-200': isSuccess, 'bg-red-200': isError }"
    >
      <div class="flex items-center">
        <div>{{ code }}</div>
        <div class="ml-2">{{ status }}</div>
      </div>
      <div>
        {{ name }}
      </div>
    </div>

    <div v-if="isOpened" class="p-5">
      <code-highlight>{{ body }}</code-highlight>
    </div>
  </div>
</template>

<script>
import CodeHighlight from './CodeHighlight'
export default {
  name: 'ResponseRow',
  components: {
    CodeHighlight,
  },

  props: {
    response: {
      type: Object,
      required: true,
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

  computed: {
    code() {
      return this.response.code
    },
    status() {
      return this.response.status
    },
    name() {
      return this.response.name
    },
    body() {
      return this.response.body
    },
    isSuccess() {
      return this.code < 300
    },
    isError() {
      return this.code >= 400
    },
  },
}
</script>
