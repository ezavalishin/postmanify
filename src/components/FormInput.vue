<template>
  <div class="mb-4 relative">
    <input
      class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
      :class="{ 'pt-5': label, 'pb-2': label, filled: filled }"
      :id="name"
      type="text"
      :value="this.value"
      :required="required"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
    <label
      v-if="label"
      :for="name"
      class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text"
      >{{ label }}</label
    >
  </div>
</template>

<script>
export default {
  name: 'FormInput',

  model: {
    prop: 'value',
    event: 'input'
  },

  computed: {
    filled() {
      return !!this.value
    }
  },

  props: {
    label: {
      type: String,
      required: false,
      default: null
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>
<style>
.input {
  transition: border 0.2s ease-in-out;
  min-width: 280px;
}

.input:focus + .label,
.input:active + .label,
.input.filled + .label {
  font-size: 0.75rem;
  transition: all 0.2s ease-out;
  top: -0.1rem;
  color: #667eea;
}

.label {
  transition: all 0.2s ease-out;
  top: 0.4rem;
  left: 0;
}
</style>
