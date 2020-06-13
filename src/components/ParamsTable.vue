<template>
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
    <table class="min-w-full bg-white">
      <thead class="bg-gray-800 text-white">
        <tr>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
            Key
          </th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
            Description
          </th>
          <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
            Example
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <param-row v-for="(param, key) in params" :key="key" :param="param" />
      </tbody>
    </table>
  </div>
</template>

<script>
import ParamRow from './ParamRow'
export default {
  name: 'ParamsTable',
  components: { ParamRow },
  props: {
    params: {
      type: Array,
      required: true,
    },
  },
}
</script>
