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
