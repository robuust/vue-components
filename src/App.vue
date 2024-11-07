<template>
  <div class="py-12">
    <div class="container px-3 mx-auto flex flex-wrap gap-3 items-center">
      <ButtonBase
        label="Primary"
        size="lg"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Primary soft"
        size="lg"
        :icon="BeakerIcon"
        color="primary-soft"
      />
      <ButtonBase
        label="Secondary"
        color="secondary"
        size="base"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Secondary soft"
        color="secondary-soft"
        size="base"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Tertiary"
        color="tertiary"
        size="sm"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Tertiary soft"
        color="tertiary-soft"
        size="sm"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Danger"
        color="danger"
      />
      <ButtonBase
        label="Danger soft"
        color="danger-soft"
      />
      <ButtonBase
        label="Warning"
        color="warning"
      />
      <ButtonBase
        label="Warning soft"
        color="warning-soft"
      />
      <ButtonBase
        label="Success"
        color="success"
      />
      <ButtonBase
        label="Success soft"
        color="success-soft"
      />
      <ButtonBase
        label="Light"
        color="light"
        size="xs"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Dark"
        color="dark"
      />
      <ButtonBase
        label="Clear"
        color="clear"
      />
      <ButtonBase
        label="Custom color foo"
        color="custom-foo"
      />
      <ButtonBase
        label="Custom color bar"
        color="custom-bar"
      />
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon } from '@heroicons/vue/24/solid';
import ButtonBase from '@/components/ButtonBase.vue';
</script>
