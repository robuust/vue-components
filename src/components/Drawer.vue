<template>
  <TransitionRoot as="template">
    <Dialog
      as="div"
      class="relative z-[500] print:hidden"
      @close="$emit('drawer:close')"
    >
      <TransitionChild
        as="template"
        enter="ease-in-out duration-500"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in-out duration-500"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @before-enter="emit('drawer:open')"
      >
        <div class="fixed inset-0 bg-stone-900 bg-opacity-50 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
              @before-enter="loading = false"
            >
              <DialogPanel class="pointer-events-auto w-screen max-w-lg">
                <form
                  class="flex h-full flex-col shadow-xl"
                  @submit.prevent="loading = true, emit('drawer:save', $event)"
                >
                  <div class="px-4 sm:px-6 pt-4 sm:pt-6 bg-white [.flex-col-reverse_&]:order-last">
                    <div class="flex items-start justify-between">
                      <DialogTitle class="text-xl md:text-2xl font-bold font-heading text-stone-700">
                        {{ title }}
                      </DialogTitle>
                      <div
                        v-if="showClose"
                        class="ml-3 flex h-7 items-center"
                      >
                        <button
                          type="button"
                          class="relative text-stone-700 hover:text-stone-300"
                          aria-label="Sluiten"
                          @click="emit('drawer:close')"
                        >
                          <XMarkIcon
                            class="size-6"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="relative flex-1 py-4 sm:py-6 px-4 sm:px-6 bg-white">
                    <slot />
                  </div>
                  <div class="flex shrink-0 px-4 py-4 sm:py-6 bg-stone-100 border-t border-stone-200 gap-3 justify-between">
                    <slot
                      name="buttons"
                      :loading="loading"
                    >
                      <div />
                      <ButtonBase
                        type="button"
                        label="Sluiten"
                        @click="emit('drawer:close')"
                      />
                    </slot>
                  </div>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { ButtonBase } from '@robuust-digital/vue-components';

const emit = defineEmits(['drawer:open', 'drawer:close', 'drawer:save']);

defineProps({
  title: {
    type: String,
    required: true,
  },
  showClose: {
    type: Boolean,
  },
});

const loading = ref(false);
</script>
