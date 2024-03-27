<script setup lang="ts">
const email: Ref<string> = ref("");
const password: Ref<string> = ref("");
const loading = ref(false);
const checkbox: Ref<boolean> = ref(false);
const response = ref();
const form = ref();
const emailRules = [
  (v: string) => !!v || "Email requerido",
  (v: string) =>
    /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/i.test(v) ||
    "Email invalido",
];
const visible = ref(false);
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

const validate = async () => {
  const { valid } = await form.value.validate();
  if (valid) {
    loading.value = true;
    setTimeout(() => {
      console.log({
        email: email.value,
        password: password.value,
        checkbox: checkbox.value,
      });
      loading.value = false;
      createCookie();
    }, 2000);
  }
};
</script>
<template>
  <v-sheet max-width="400" width="100%" class="mx-auto bg-transparent">
    <v-form ref="form" :on-submit="validate">
      {{ response }}
      <v-text-field
        color="primary"
        v-model="email"
        variant="outlined"
        label="Correo electronico"
        :rules="emailRules"
        required
      ></v-text-field>
      <v-text-field
        variant="outlined"
        class="mt-2"
        color="primary"
        :rules="passwordRules"
        v-model="password"
        label="Contraseña"
        required
        :type="visible ? 'text' : 'password'"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-checkbox
        color="primary"
        v-model="checkbox"
        label="Recordarme?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column items-end gap-">
        <v-btn
          @click="validate()"
          color="primary-darken-1"
          :loading="loading"
          class="mt-0"
          block
        >
          Ingresar
        </v-btn>
        <NuxtLink class="text-primary-lighten-1" href="/sign-up">
          <v-btn variant="text"> No tienes cuenta? </v-btn>
        </NuxtLink>
      </div>
    </v-form>
  </v-sheet>
</template>
