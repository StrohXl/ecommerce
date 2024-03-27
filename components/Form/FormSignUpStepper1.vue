<script setup lang="ts">
const itemsForm = ref(useStepperStore().stepperFormSignUp.form);

const form = ref();
const firstNameRules = [
  (v: string) => !!v || "Nombre requerido",
  (v: string) => v.length > 2 || "El nombre debe de tener minimo 3 caracteres",
];
const LastNameRules = [
  (v: string) => !!v || "Apellido requerido",
  (v: string) =>
    v.length > 2 || "El apellido debe de tener minimo 3 caracteres",
];
const emailRules = [
  (v: string) => !!v || "Email requerido",
  (v: string) =>
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(v) ||
    "Email invalido",
];
1;
const validate = async () => {
  if (
    itemsForm.value.firstName != "" &&
    itemsForm.value.lastName != "" &&
    itemsForm.value.email != ""
  ) {
    const { valid } = await form.value.validate();
    if (valid) {
      useStepperStore().changeCompleteStepperFormSignUp(1, true);
    } else {
      useStepperStore().changeCompleteStepperFormSignUp(1, false);
    }
  }
};
</script>
<template>
  <v-sheet width="100%" class="mx-0 bg-transparent">
    <v-form ref="form" class="grid gap-2">
      <div class="grid grid-cols-2 gap-3">
        <v-text-field
          @input="validate()"
          input="validate()"
          color="primary"
          v-model="itemsForm.firstName"
          variant="outlined"
          label="Nombre"
          :rules="firstNameRules"
          required
        ></v-text-field>
        <v-text-field
          @input="validate()"
          color="primary"
          v-model="itemsForm.lastName"
          variant="outlined"
          label="Apellido"
          :rules="LastNameRules"
          required
        ></v-text-field>
      </div>
      <v-text-field
        @input="validate()"
        variant="outlined"
        color="primary"
        :rules="emailRules"
        v-model="itemsForm.email"
        label="Correo Electronico"
        required
      ></v-text-field>
    </v-form>
  </v-sheet>
</template>
