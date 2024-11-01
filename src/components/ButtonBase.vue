<template>
  <Component
    :is="as"
    :class="['button', `button-${color}`]"
  >
    {{ label }}
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
  color: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'tertiary', 'light', 'dark', 'danger', 'warning', 'success'].includes(value),
  },
});
</script>
