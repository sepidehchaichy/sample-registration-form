
<template>
  <div class="flex flex-col justify-between w-full h-full">
    <div class="w-full">
      <div class="text-2xl md:text-4xl brand-bold text-brand-marine-blue mb-2">
        Personal Information
      </div>
      <div class="text-body brand-regular text-brand-cool-gray mb-6">
        Please provide your Username 
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Username:
          </div>
        </div>
        <input type="text" v-model="userName" placeholder="e.g. sepide248"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          v-bind:class="!userName && validationErrorsMsg && 'border-brand-strawberry-red'" />
          <div v-if="!userName && validationErrorsMsg" class="text-xs brand-bold text-brand-strawberry-red">
            The userName field is required
          </div>
      </div>
  
    </div>
    <div class="flex justify-end items-center w-full absolute bottom-[-136px] right-0 md:static">
      <button id="btn-next" class="bg-sky-600 h-10 md:h-12 px-4 md:px-6 capitalize brand-regular text-sm md:text-body text-brand-alabaster rounded md:rounded-lg"
        @click="checkValidation">
        Next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userInfoStore } from '@/stores/userInfoStore';
import { Ref, ref } from 'vue'

const userName: Ref<string> = ref('');
const validationErrorsMsg: Ref<boolean> = ref(false);
const emit = defineEmits(['next-step'])
const setUsernameValue = () => {
  userInfoStore().setUsername(userName.value)
}

const checkValidation = () => {
 if(activeTab.value === 1){
  
 }
}

const validateStepOne = () => {
  userName.value = typeof userName.value === 'string' && userName.value.trim().length > 0 ? userName.value : ''
  if (userName.value) {
    emit('next-step', 2);
    setUsernameValue()
  } else {
    validationErrorsMsg.value = true;
  }
}
</script>
