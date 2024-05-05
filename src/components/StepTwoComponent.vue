

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <div class="w-full">
      <div class="text-body brand-regular text-brand-cool-gray mb-6">
        Please provide email address
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            email address
          </div>
          <div
            v-if="!email && showValidationErrorsMsg"
            class="text-xs brand-bold text-brand-strawberry-red"
          >
            The email field is required
          </div>
          <div
            v-if="invalidEmail"
            class="text-xs brand-bold text-brand-strawberry-red"
          >
            The email field is invalid
          </div>
        </div>
        <input v-model="email" type="email" placeholder="e.g. sepideh@gmail.com" class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          v-bind:class="!email && showValidationErrors && 'border-brand-strawberry-red'"
          @change="updateEmail"
        />
      </div>
    </div>
    <div id="btn-prev" class="flex justify-between items-center w-full absolute bottom-[-146px] right-0 pb-4 md:static" >
      <button class="text-sm md:text-body capitalize brand-medium text-brand-cool-gray"
        @click="$emit('next-step', 1)"> Prev
      </button>
      <button id="btn-next" class="h-10 md:h-12 px-4 md:px-6 capitalize brand-regular text-sm md:text-body text-brand-alabaster bg-brand-marine-blue rounded md:rounded-lg"
        @click="$emit('next-step', 3)">
        Next
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { userInfoStore } from '@/stores/userInfoStore'
import { ref } from 'vue';

const invalidEmail = ref(false);
const email = ref('');
const showValidationErrorsMsg = ref(false);
defineEmits(['next-step'])
const updateEmail = () => {
  userInfoStore().setEmail(email.value)
}
const validateEmail = (email: string) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const regex = new RegExp(pattern)
  return regex.test(email)
}

const validateStepOne = () => {
  name.value =
    typeof name.value === 'string' && name.value.trim().length > 0
      ? name.value
      : ''
  email.value =
    typeof email.value === 'string' && email.value.trim().length > 0
      ? email.value
      : ''
  phone.value =
    typeof phone.value === 'string' && phone.value.trim().length >= 10
      ? phone.value
      : ''

  if (name.value && email.value && phone.value) {
    if (validateEmail(email.value)) {
      invalidEmail.value = false
      emit('change-step', 2)
    } else {
      invalidEmail.value = true
    }
  } else {
    showValidationErrorsMsg.value = true;
  }
}

</script>
