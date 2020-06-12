<template>
  <div class="bg-blue-100" :class="{ 'shadow-xl my-3 bg-blue-200': isOpened }">
    <div
      class="flex items-center justify-between border-b-2 border-gray-100 py-4 px-4 cursor-pointer"
      @click="toggle"
    >
      <div class="flex items-center">
        <div class="mr-2">{{ method }}</div>
        <div>{{ pathLink }}</div>
      </div>
      <div>{{ item.name }}</div>
    </div>

    <div v-if="isOpened" class="py-5 px-5 text-gray-600">
      <div>
        {{ description }}
      </div>

      <div class="mt-10">
        <request-body :body="body" />
      </div>

      <div class="mt-10">
        <responses :responses="response" />
      </div>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import RequestBody from './RequestBody'
import Responses from './Responses'

export default {
  name: 'One',
  components: { Responses, RequestBody },
  props: {
    item: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      isOpened: false,
    }
  },

  computed: {
    request() {
      return this.item.request
    },

    method() {
      return this.request.method
    },

    slug() {
      return slugify(`f_${this.$vnode.key}_${this.item.name}`)
    },

    description() {
      return this.request.description
    },

    path() {
      return this.request.url.path
    },

    pathLink() {
      return '/' + this.path.join('/')
    },
    body() {
      return this.request.body
    },

    response() {
      return this.item.response
    },
  },

  watch: {
    isOpened(value) {
      localStorage[this.slug] = value
    },
  },

  created() {
    if (localStorage[this.slug] && JSON.parse(localStorage[this.slug])) {
      this.isOpened = true
    }
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened
    },
  },
}
</script>
