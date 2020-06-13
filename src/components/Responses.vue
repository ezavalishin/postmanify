<template>
  <div>
    <div class="mb-5">Responses</div>
    <response-row
      v-for="(response, key) in responses"
      :key="key"
      :response="response"
    />
  </div>
</template>

<script>
import ResponseRow from './ResponseRow'
export default {
  name: 'Responses',
  components: { ResponseRow },
  props: {
    responses: {
      default: null,
      type: Array,
    },
  },
}
</script>
