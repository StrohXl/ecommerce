<script setup lang="ts">
const email: Ref<string> = ref("");
const firstName: Ref<string> = ref("");
const lastName: Ref<string> = ref("");
const password: Ref<string> = ref("");
const verifyPassword: Ref<string> = ref("");
const checkbox: Ref<boolean> = ref(false);
const response = ref();
const form = ref();
const firstNameRules = [
  (v: string) => !!v || "Nombre requerido",
  (v: string) => v.length > 5 || "El nombre debe de tener minimo 5 caracteres",
];
const LastNameRules = [
  (v: string) => !!v || "Apellido requerido",
  (v: string) =>
    v.length > 5 || "El apellido debe de tener minimo 5 caracteres",
];
const emailRules = [
  (v: string) => !!v || "Email requerido",
  (v: string) =>
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(v) ||
    "Email invalido",
];
const passwordRules = [
  (v: string) => !!v || "Contrasena requerida",
  (v: string) =>
    v.length > 5 || "La contrasena debe de tener minimo 5 caracteres",
];
const verifyPasswordRules = [
  (v: string) => !!v || "Confirmar contrasena requerida",
  (v: string) => v == password.value || "La contrasena no coincide",
];

const validate = async () => {
  const { valid } = await form.value.validate();
  if (valid) {
    console.log({
      email: email.value,
      password: password.value,
      checkbox: checkbox.value,
    });
  }
};
</script>
<template>
  <v-sheet max-width="510" width="100%" class="mx-auto bg-transparent">
    <v-form ref="form" :on-submit="validate" class="grid gap-2">
      <div class="grid grid-cols-2 gap-3">
        <v-text-field
          color="primary"
          v-model="firstName"
          variant="outlined"
          label="Nombre"
          :rules="firstNameRules"
          required
        ></v-text-field>
        <v-text-field
          color="primary"
          v-model="lastName"
          variant="outlined"
          label="Apellido"
          :rules="LastNameRules"
          required
        ></v-text-field>
      </div>
      <v-text-field
        variant="outlined"
        color="primary"
        :rules="emailRules"
        v-model="email"
        label="Correo Electronico"
        required
      ></v-text-field>
      <v-text-field
        variant="outlined"
        color="primary"
        :rules="passwordRules"
        v-model="password"
        label="Contrasena"
        required
      ></v-text-field>
      <v-text-field
        variant="outlined"
        color="primary"
        :rules="verifyPasswordRules"
        v-model="verifyPassword"
        label="Confirmar contrasena"
        required
      ></v-text-field>

      <div class="d-flex flex-column items-end gap-4">
        <v-btn @click="validate()" color="primary-darken-1" class="mt-4" block>
          Inscribirse
        </v-btn>
        <NuxtLink class="text-primary-lighten-1" href="/sign-in">
          <v-btn variant="text"> ¿Ya tienes una cuenta? Iniciar sesión </v-btn>
        </NuxtLink>
      </div>
    </v-form>
  </v-sheet>
</template>
