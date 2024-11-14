<template>
  <Component
    :is="as"
    :class="['button', `button-${color}`, `button-${size}`, { 'button-reverse': iconLeft }]"
  >
    {{ label }}
    <slot name="icon">
      <Component
        :is="icon"
        v-if="icon && !spinning"
        class="button-icon"
      />
    </slot>
    <slot name="spinner">
      <SpinnerIcon
        v-if="spinning"
        class="button-icon button-icon-loading"
      />
    </slot>
  </Component>
</template>

<script setup>
import SpinnerIcon from '@/assets/img/svg/icon-spinner.svg';

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
  spinning: {
    type: Boolean,
  },
  color: {
    type: String,
    default: 'primary',
    validator: (value) => /^(primary|secondary|tertiary|light|dark|danger|warning|success)(-soft)?$/.test(value) || value.startsWith('custom-') || 'clear',
  },
});
</script>
