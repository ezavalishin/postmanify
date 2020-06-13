<template>
  <tr>
    <td class="text-left py-3 px-4">
      <div class="text-black">
        {{ param.key }}
        <span v-if="isRequired" class="text-red-500">
          *
        </span>
      </div>
    </td>
    <td class="text-left py-3 px-4">
      {{ description }}
    </td>
    <td class="text-left py-3 px-4 italic text-gray-500">
      {{ param.value }}
    </td>
  </tr>
</template>

<script>
const REQUIRED_REGEX = /(req(uired)?)(\.)?(\s)?/iu

export default {
  name: 'ParamRow',

  props: {
    param: {
      required: true,
      type: Object,
    },
  },

  computed: {
    isRequired() {
      return REQUIRED_REGEX.test(this.param.description)
    },

    description() {
      return this.param.description.replace(REQUIRED_REGEX, '')
    },
  },
}
</script>
