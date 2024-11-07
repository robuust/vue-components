<template>
  <div class="py-12">
    <div class="container px-3 mx-auto flex flex-wrap gap-3 items-center">
      <ButtonBase
        label="Primary"
        size="lg"
        :icon="BeakerIcon"
      />
      <ButtonBase
        label="Secondary"
        color="secondary"
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
        label="Danger"
        color="danger"
      />
      <ButtonBase
        label="Warning"
        color="warning"
      />
      <ButtonBase
        label="Success"
        color="success"
      />
      <ButtonBase
        label="Clear"
        color="clear"
      />
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon } from '@heroicons/vue/24/solid';
import ButtonBase from '@/components/ButtonBase.vue';
</script>
