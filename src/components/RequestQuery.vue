<template>
  <div v-if="query">
    <div class="mb-5">Query</div>

    <params-table :params="query" />
  </div>
</template>

<script>
import ParamsTable from './ParamsTable'
export default {
  name: 'RequestQuery',
  components: { ParamsTable },
  props: {
    query: {
      default: null,
      type: Array,
    },
  },
}
</script>
