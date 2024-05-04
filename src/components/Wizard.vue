<template>
  <div class="w-full h-screen bg-brand-magnolia">
    <div class="flex justify-center items-center h-full w-full">
      <div
        class="w-full max-w-[940px] h-2/3 bg-white rounded-2xl drop-shadow-sm"
      >
        <div class="w-full h-full flex p-3">
          <div
            class="w-[280px] flex-[0.3] h-full rounded-xl relative overflow-hidden"
          >
            <div class="flex flex-col gap-8 w-full h-full px-8 py-10">
              <div v-for="step in steps" :key="step.id">
                <div class="flex items-center gap-4">
                  <div
                    :class="`w-8 h-8 rounded-full border border-brand-white ${
                      activeStep === step.id && 'bg-brand-light-blue'
                    } overflow-hidden`"
                  >
                    <div
                      :class="`w-full h-full flex justify-center items-center text-sm ${
                        activeStep === step.id
                          ? 'text-brand-marine-blue brand-bold'
                          : 'text-brand-alabaster brand-medium'
                      }`"
                    >
                      {{ step.id }}
                    </div>
                  </div>
                  <div>
                    <div
                      class="text-xs brand-regular text-brand-light-gray uppercase mb-0.5"
                    >
                      step {{ step.id }}
                    </div>
                    <div class="text-sm brand-bold text-brand-white uppercase">
                      {{ step.title }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full h-full bg-brand-purplish-blue absolute top-0 -z-20"
            ></div>
          </div>
          <div class="flex-[0.7] h-full">
            <div
              class="flex flex-col justify-between w-full h-full px-24 pt-10 pb-5"
            >
              <StepOneComponent
                v-show="activeStep === 1"
                @change-step="changeStep"
              />
              <StepTwoComponent
                v-show="activeStep === 2"
                @change-step="changeStep"
              />
              <StepThreeComponent
                v-show="activeStep === 3"
                @change-step="changeStep"
              />
              <ConfirmComponent v-show="activeStep === 0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import StepOneComponent from './StepOneComponent.vue'
import StepTwoComponent from './StepTwoComponent.vue'
import StepThreeComponent from './StepThreeComponent.vue'
import ConfirmComponent from './ConfirmComponent.vue'

const activeStep = ref(1)

const steps = [
  {
    id: 1,
    title: 'your info',
  },
  {
    id: 2,
    title: 'select plan',
  },
  {
    id: 3,
    title: 'add-ons',
  },
  {
    id: 4,
    title: 'summary',
  },
]

const changeStep = (step: number) => {
  activeStep.value = step
}
</script>