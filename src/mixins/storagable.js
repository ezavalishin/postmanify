export default {
  methods: {
    getValue(key) {
      return localStorage[key]
    },
    getBoolean(key) {
      return localStorage[key] && JSON.parse(localStorage[key])
    },
    setValue(key, value) {
      localStorage[key] = value
    },
  },
}
