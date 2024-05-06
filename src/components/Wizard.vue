<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="step in steps" :key="step.id">
      <div>
        <div
          :class="`w-8 h-8 rounded-full border border-brand-white ${activeTab === step.id && 'bg-brand-light-blue'} overflow-hidden`">
          <div :class="`w-full h-full flex justify-center items-center text-sm ${activeTab === step.id
            ? 'text-brand-marine-blue brand-bold'
            : 'text-brand-alabaster brand-medium'}`">
            {{ step.id }}
          </div>
        </div>
        <div>
          <div class="text-xs brand-regular text-brand-light-gray uppercase mb-0.5">
            Step {{ step.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-[0.7] h-full" >
    <div class="flex flex-col justify-between w-full h-full px-24 pt-10 pb-5">
      <div class="flex flex-col justify-between w-full h-full">
    <div class="w-full">
      <div class="text-2xl md:text-4xl brand-bold text-brand-marine-blue mb-2">
        Personal Information
      </div>
      <div class="text-body brand-regular text-brand-cool-gray mb-6">
        Please provide your Information
      </div>
      <div class="mb-6" v-show="activeTab === 1">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Username:
          </div>
        </div>
        <input id="username" name="username" type="text" v-model="userName" placeholder="e.g. sepide248"
          class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          :class="!userName && validationErrorsUsername && 'border-brand-strawberry-red'" />
          <div v-if="validationErrorsUsername" class="text-xs brand-bold text-brand-strawberry-red">
            Invalid Username.
          </div>
      </div>
      <div class="mb-6" v-show="activeTab === 2" >
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Email:
          </div>
        </div>
        <input id="email" name="email" v-model="email" type="text" placeholder="e.g. sepideh@gmail.com" class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue"
          :class="!email && validationErrorsEmail && 'border-brand-strawberry-red'"/>
        <div v-if="validationErrorsEmail" class="text-xs brand-bold text-brand-strawberry-red">
          Invalid email address.     
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  <div class="flex-[0.7] h-full" v-show="activeTab === 3" >
    <div class="flex flex-col justify-between w-full h-full px-24 pt-10 pb-5">
      <div class="text-body brand-regular text-brand-cool-gray mb-6">
        Step: review
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Username:
          </div>
        </div>
        <span class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue">
          {{ userName }}
        </span>
      </div>
      <div class="mb-6">
        <div class="flex justify-between items-center mb-0.5 md:mb-2">
          <div
            class="text-xs md:text-sm brand-regular capitalize text-brand-marine-blue">
            Email:
          </div>
        </div>
        <span class="text-body brand-medium placeholder-brand-cool-gray h-10 md:h-12 px-4 border border-brand-light-gray rounded md:rounded-lg w-full outline-none hover:border-brand-purplish-blue focus:border-brand-purplish-blue">
          {{ email }}
        </span>        
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center w-full absolute bottom-[-146px] right-0 pb-4 md:static" >
      <button id="btn-prev" :disabled="activeTab === 1" :class="{'bg-sky-100':activeTab === 1}" class="h-10 md:h-12 px-4 md:px-6 capitalize brand-regular text-sm md:text-body text-brand-alabaster bg-brand-marine-blue rounded md:rounded-lg"
        @click="PrevStep(activeTab)"> Prev
      </button>
      <button :disabled="activeTab === 3" id="btn-next" :class="{'bg-sky-100':activeTab === 3}"  class="h-10 md:h-12 px-4 md:px-6 capitalize brand-regular text-sm md:text-body text-brand-alabaster bg-brand-marine-blue rounded md:rounded-lg"
        @click="checkValidation">
        Next 
      </button>
    </div>
</template>
<script setup lang="ts">
import { ref, type Ref } from "vue";
const activeTab: Ref<number> = ref(1);
const userName: Ref<string> = ref('');
const email: Ref<string> = ref('');
const validationErrorsUsername: Ref<boolean> = ref(false);
const validationErrorsEmail: Ref<boolean> = ref(false);
const steps = [
  {
    id: 1,
    title: 'UserName',
  },
  {
    id: 2,
    title: 'Email',
  },
  {
    id: 3,
    title: 'Review',
  }
]

const checkValidation = () => {
 if(activeTab.value === 1){
  validateStepOne()
 } 
 else if(activeTab.value === 2) {
  validateStepTwo()
 }
}
const validateStepOne = () => {
  userName.value = typeof userName.value === 'string' && userName.value.trim().length > 0 ? userName.value : '';
  var pattern = /^[a-zA-Z]\S*$/;
  if (!!userName.value && pattern.test(userName.value) && userName.value.length > 3 && userName.value.length <= 15) {
    activeTab.value = 2;
    validationErrorsUsername.value = false;
  } else {
    validationErrorsUsername.value = true;
  }
}

const validateStepTwo = () => {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  if (!!email.value && pattern.test(email.value) ) {
    activeTab.value = 3;
    validationErrorsEmail.value = false;
  } else {
    validationErrorsEmail.value = true;
  }
}
const PrevStep = (step: number) => {
  activeTab.value = step-1;
}
</script>
<style scoped>
.p-stepper {
  flex-basis: 40rem;
}
</style>