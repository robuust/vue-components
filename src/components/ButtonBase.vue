<template>
  <Component
    :is="as"
    :class="['button', `button-${color}`, `button-${size}`, { 'flex-row-reverse': iconLeft }]"
  >
    {{ label }}
    <Component
      :is="icon"
      v-if="icon"
      class="button-icon"
    />
  </Component>
</template>

<script setup>
defineProps({
  as: {
    type: [String, Object, Function],
    default: 'button',
  },
  label: {
    type: String,
    default: '',
  },
  icon: {
    type: [Object, Function],
    default: null,
  },
  iconLeft: {
    type: Boolean,
  },
  size: {
    type: String,
    default: 'base',
    validator: (value) => ['xs', 'sm', 'base', 'lg'].includes(value),
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => /^(primary|secondary|tertiary|light|dark|danger|warning|success)(-soft)?$/.test(value) || value.startsWith('custom-') || 'clear',
  },
});
</script>
