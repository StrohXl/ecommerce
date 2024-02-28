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
const passwordRules = [
  (v: string) => !!v || "Contrasena requerida",
  (v: string) =>
    v.length > 5 || "La contrasena debe de tener minimo 5 caracteres",
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
      createCookie()
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
        label="Contrasena"
        required
      ></v-text-field>

      <v-checkbox
        color="primary"
        v-model="checkbox"
        label="Recordarme?"
        required
      ></v-checkbox>

      <div class="d-flex flex-column items-end gap-4">
        <v-btn
          @click="validate()"
          color="primary"
          :loading="loading"
          class="mt-4"
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
