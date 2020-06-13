const PREFIX = 'pmfy:'

export default {
  methods: {
    getValue(key) {
      return localStorage[PREFIX + key]
    },
    getBoolean(key) {
      return (
        localStorage[PREFIX + key] && JSON.parse(localStorage[PREFIX + key])
      )
    },
    setValue(key, value) {
      localStorage[PREFIX + key] = value
    },
  },
}
