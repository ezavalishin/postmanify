<template>
  <div class="shadow-lg bg-white my-3">
    <div
      class="flex justify-between border-b border-gray-100 px-5 py-4 cursor-pointer"
      @click="toggle"
    >
      <span class="font-bold text-gray-700 text-lg">{{ item.name }}</span>
    </div>

    <div v-if="isOpened" class="px-10 py-5 text-gray-600">
      <component
        :is="innerItem.item ? 'folder' : 'one'"
        v-for="(innerItem, key) in item.item"
        :key="key"
        :item="innerItem"
      >
      </component>
    </div>
  </div>
</template>

<script>
import slugify from 'slugify'
import One from './One'
import openable from '../mixins/openable'
export default {
  name: 'Folder',

  components: {
    One,
  },

  props: {
    item: {
      required: true,
      type: Object,
    },
  },

  mixins: [openable],

  computed: {
    slug() {
      return slugify(`f_${this.$vnode.key}_${this.item.name}`)
    },
  },
}
</script>
