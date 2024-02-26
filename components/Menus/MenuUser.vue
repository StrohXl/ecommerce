<template>
  <div class="text-center">
    <v-menu location="bottom center" open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-account"
          v-bind="props"
          class="buttons-actions-icon"
        ></v-btn>
      </template>

      <v-list bg-color="#fafafa" class="mt-3" color="primary">
        <v-list-item
          append-icon="mdi-login"
          value="sign-in"
          @click="useRouter().push('/sign-in')"
          >Iniciar sesión</v-list-item
        >
        <v-list-item
          append-icon="mdi-account-plus"
          value="sign-up"
          @click="useRouter().push('/sign-up')"
        >
          Crear cuenta
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
