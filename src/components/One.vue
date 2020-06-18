<template>
  <div
    :id="slug"
    class="bg-blue-100"
    :class="{ 'shadow-xl my-3 bg-blue-200': isOpened }"
  >
    <div
      class="flex items-center justify-between border-b-2 border-gray-100 py-4 px-4 cursor-pointer"
      @click="toggle"
    >
      <div class="flex items-center">
        <div class="mr-2">
          <method :method="method" />
        </div>
        <div class="text-black">{{ pathLink }}</div>
      </div>
      <div class="flex items-center">
        <div>{{ item.name }}</div>
        <div class="ml-2" @click.stop="copyLink">
          <check-icon v-if="linkCopied" class="w-5 h-5 fill-current" />
          <link-icon v-else class="w-5 h-5 fill-current" />
        </div>
      </div>
    </div>

    <div v-if="isOpened" class="py-5 px-5 text-gray-600">
      <div>
        <vue-simple-markdown :source="description"></vue-simple-markdown>
      </div>

      <div v-if="query" class="mt-10">
        <request-query :query="query" />
      </div>

      <div v-if="body" class="mt-10">
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
import RequestQuery from './RequestQuery'
import Method from './Method'
import openable from '../mixins/openable'

import LinkIcon from '../assets/link.svg'
import CheckIcon from '../assets/check.svg'

export default {
  name: 'One',
  components: {
    Method,
    RequestQuery,
    Responses,
    RequestBody,
    LinkIcon,
    CheckIcon,
  },

  mixins: [openable],

  data() {
    return {
      linkCopied: false,
    }
  },

  props: {
    item: {
      required: true,
      type: Object,
    },
  },

  computed: {
    request() {
      return this.item.request
    },

    method() {
      return this.request.method
    },

    slug() {
      const [folder] = this.$vnode.key.split('::')
      return folder + '::' + slugify(this.method + '_' + this.path)
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

    query() {
      return this.request.url.query
    },
  },

  methods: {
    copyLink() {
      this.$copyText(
        location.protocol +
          '//' +
          location.host +
          location.pathname +
          '#request=' +
          this.slug
      ).then(() => {
        this.linkCopied = true

        setTimeout(() => {
          this.linkCopied = false
        }, 1000)
      })
    },
  },
}
</script>
