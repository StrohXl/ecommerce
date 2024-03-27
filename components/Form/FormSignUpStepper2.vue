<script setup lang="ts">
const itemsForm = ref(useStepperStore().stepperFormSignUp.form);
const visible = ref(false);
const form = ref();

const passwordRules = [
  (v: string) => !!v || "Contraseña requerida",
  (v: string) =>
    v.length >= 8 || "La contraseña debe de tener minimo 8 caracteres",
  (v: string) =>
    /^(?=.*[A-Z]).+$/g.test(v) ||
    "La contraseña debe de tener al menos una letra en Mayuscula",
  (v: string) =>
    /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/i.test(v) ||
    "La contraseña debe de tener al menos un caracter especial",
];
const verifyPasswordRules = [
  (v: string) => !!v || "Confirmar contraseña requerida",
  (v: string) => v == itemsForm.value.password || "La contraseña no coincide",
];

const validate = async () => {
  if (itemsForm.value.password != "" && itemsForm.value.verifyPassword != "") {
    const { valid } = await form.value.validate();
    if (valid) {
      useStepperStore().changeCompleteStepperFormSignUp(2, true);
    } else {
      useStepperStore().changeCompleteStepperFormSignUp(2, false);
    }
  }
};
</script>
<template>
  <v-sheet max-width="510" width="100%" class="mx-auto bg-transparent">
    <v-form ref="form" :on-submit="validate" class="grid gap-2">
      <v-text-field
        variant="outlined"
        color="primary"
        :rules="passwordRules"
        v-model="itemsForm.password"
        label="Contraseña"
        :type="visible ? 'text' : 'password'"
        :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append-inner="visible = !visible"
        @input="validate()"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        variant="outlined"
        color="primary"
        @input="validate()"
        :rules="verifyPasswordRules"
        v-model="itemsForm.verifyPassword"
        label="Confirmar contraseña"
        required
      ></v-text-field>
    </v-form>
  </v-sheet>
</template>
