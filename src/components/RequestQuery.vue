<template>
  <div v-if="query">
    <div class="mb-5">Query</div>

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
          <tr v-for="(param, key) in query" :key="key">
            <td class="text-left py-3 px-4">{{ param.key }}</td>
            <td class="text-left py-3 px-4">
              {{ param.description }}
            </td>
            <td class="text-left py-3 px-4">
              {{ param.value }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequestQuery',
  props: {
    query: {
      default: null,
      type: Array,
    },
  },
}
</script>
