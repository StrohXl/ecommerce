<script setup lang="ts">
const stepper = ref(0);
const stepperFormSignUp = ref(useStepperStore().stepperFormSignUp);
watch(
  () => useStepperStore().stepperFormSignUp.value,
  (newValue: number) => (stepper.value = newValue)
);
</script>
<template>
  <v-stepper color="primary" v-model="stepper" show-actions class="!border-0  !shadow-none">
    <v-stepper-header class="!hidden">
      <v-stepper-item
        title="Paso 1"
        value="1"
        :complete="stepperFormSignUp.complete.stepper1"
      >
      </v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        title="Paso 2"
        value="2"
        :complete="stepperFormSignUp.complete.stepper2"
      ></v-stepper-item>

      <v-divider></v-divider>

      <v-stepper-item
        title="Paso 3"
        value="3"
        :complete="stepperFormSignUp.complete.stepper3"
      ></v-stepper-item>
    </v-stepper-header>
    <v-stepper-window  class="!mx-0 epale" >
      <v-stepper-window-item value="1">
        <FormSignUpStepper1 class="mt-2" />
      </v-stepper-window-item>
      <v-stepper-window-item value="2">
        <FormSignUpStepper2 class="mt-2" />
      </v-stepper-window-item>
      <v-stepper-window-item value="3">
        <h5 class="text-center font-semibold mt-5">Corfirmar codigo</h5>
        <FormSignUpStepper3 />
        <div class="flex justify-center">
          <span class="text-primary font-semibold cursor-pointer mb-5">Reenviar Codigo</span>
        </div>
      </v-stepper-window-item>
    </v-stepper-window>
    <v-stepper-actions
      @click:next="useStepperStore().increaseValueStepperFormSignUp()"
      @click:prev="useStepperStore().decreaseValueStepperFormSignUp()"
      :disabled="
        stepperFormSignUp.disabled == 'true' ? true : stepperFormSignUp.disabled
      "
      :next-text="stepperFormSignUp.textNext"
      prev-text="regresar"
    >
      <v-btn color="success">epale</v-btn>
    </v-stepper-actions>
  </v-stepper>
</template>
