<template>
    <div class="flex-[0.7] h-full" >
    <div class="flex flex-col justify-between w-full h-full px-24 pt-10 pb-5">
      <div class="flex flex-col justify-between w-full h-full">
    <div class="w-full">
      <div class="text-2xl md:text-4xl brand-bold text-brand-marine-blue mb-2">
         Description
      </div>
      <div class="mb-6" >
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Username:
          </div>
        </div>
        <input id="description" name="description" type="text" v-model="description" placeholder="e.g. Hi How are you doing today?"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          :class="!description && validationErrorsMsg && 'border-brand-strawberry-red'" />
          <div v-if="validationErrorsMsg" class="text-xs brand-bold text-brand-strawberry-red">
            Invalid Description
          </div>
      </div>

    </div>
  </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
const description: Ref<string> = ref('');
const validationErrorsMsg: Ref<boolean> = ref(false);

</script>