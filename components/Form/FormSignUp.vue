<script setup lang="ts">
const email: Ref<string> = ref("");
const firstName: Ref<string> = ref("");
const lastName: Ref<string> = ref("");
const password: Ref<string> = ref("");
const verifyPassword: Ref<string> = ref("");
const checkbox: Ref<boolean> = ref(false);
const response = ref();
const visible = ref(false);
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
  (v: string) => v == password.value || "La contraseña no coincide",
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
        label="Contraseña"
        :type="visible ? 'text' : 'password'"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="visible = !visible"
        required
      ></v-text-field>
      <v-text-field
      type="password"
        variant="outlined"
        color="primary"
        :rules="verifyPasswordRules"
        v-model="verifyPassword"
        label="Confirmar contraseña"
        append-inner-icon="mdi-eye-off"
        required
      ></v-text-field>

      <div class="d-flex flex-column items-end gap-4">
        <v-btn @click="validate()" color="primary-darken-1" class="mt-4" block>
          Inscribirse
        </v-btn>
        <a class="text-primary-lighten-1" href="/sign-in">
          <v-btn variant="text"> ¿Ya tienes una cuenta? Iniciar sesión </v-btn>
        </a>
      </div>
    </v-form>
  </v-sheet>
</template>
