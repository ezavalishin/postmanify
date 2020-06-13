<template>
  <div
    class="w-16 text-center font-bold"
    :class="{
      'text-green-500': isGet,
      'text-orange-500': isPost,
      'text-blue-500': isPut,
      'text-red-500': isDelete,
    }"
  >
    {{ method }}
  </div>
</template>

<script>
export default {
  name: 'Method',

  props: {
    method: {
      type: String,
      required: true,
    },
  },

  computed: {
    isGet() {
      return this.method === 'GET'
    },
    isPost() {
      return this.method === 'POST'
    },
    isPut() {
      return this.method === 'PUT'
    },
    isDelete() {
      return this.method === 'DELETE'
    },
  },
}
</script>
