import storagable from './storagable'

export default {
  mixins: [storagable],

  data() {
    return {
      isOpened: false,
    }
  },

  watch: {
    isOpened(value) {
      this.setValue(this.slug, value)
    },
  },

  created() {
    if (this.getBoolean(this.slug)) {
      this.isOpened = true
    }
  },

  methods: {
    toggle() {
      this.isOpened = !this.isOpened
    },
  },
}
