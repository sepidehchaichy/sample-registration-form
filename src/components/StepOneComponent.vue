<script setup >
import { useSubscriptionStore } from '@/stores/subscription'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const phone = ref('')
const showValidationErrors = ref(false)
const invalidEmail = ref(false)

const emit = defineEmits(['change-step'])

const updateName = () => {
  useSubscriptionStore().setName(name.value)
}

const updateEmail = () => {
  useSubscriptionStore().setEmail(email.value)
}

const updatePhone = () => {
  useSubscriptionStore().setPhone(phone.value)
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
    showValidationErrors.value = true
  }
}
</script>

<template>
  <div class="flex flex-col justify-between w-full h-full">
    <div class="w-full">
      <div class="text-2xl md:text-4xl brand-bold text-brand-marine-blue mb-2">
        Personal info
      </div>
      <div class="text-body brand-regular text-brand-cool-gray mb-6">
        Please provide your name, email address, and phone number.
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue"
          >
            name
          </div>
          <div
            v-if="!name && showValidationErrors"
            class="text-xs brand-bold text-brand-strawberry-red"
          >
            The name field is required
          </div>
        </div>
        <input
          v-model="name"
          type="text"
          placeholder="e.g. Stephen King"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          v-bind:class="
            !name && showValidationErrors && 'border-brand-strawberry-red'
          "
          @change="updateName"
        />
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue"
          >
            email address
          </div>
          <div
            v-if="!email && showValidationErrors"
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
        <input
          v-model="email"
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          v-bind:class="
            !email && showValidationErrors && 'border-brand-strawberry-red'
          "
          @change="updateEmail"
        />
      </div>
      <div class="mb-0">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue"
          >
            phone number
          </div>
          <div
            v-if="!phone && showValidationErrors"
            class="text-xs brand-bold text-brand-strawberry-red"
          >
            The phone field is required
          </div>
        </div>
        <input
          v-model="phone"
          type="tel"
          placeholder="e.g. +1 234 567 890"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          v-bind:class="
            !phone && showValidationErrors && 'border-brand-strawberry-red'
          "
          @change="updatePhone"
        />
      </div>
    </div>
    <div
      class="flex justify-end items-center w-full absolute bottom-[-136px] right-0 md:static"
    >
      <button
        class="h-10 md:h-12 px-4 md:px-6 capitalize brand-regular text-sm md:text-body text-brand-alabaster bg-brand-marine-blue rounded md:rounded-lg"
        @click="validateStepOne"
      >
        next step
      </button>
    </div>
  </div>
</template>
