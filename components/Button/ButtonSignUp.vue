<template>
  <div
    v-if="useClientStore().client == 'false'"
    class="items-center gap-2 hidden lg:flex ml-3"
  >
    <a href="/sign-up">
      <v-btn rounded variant="outlined" color="secondary"> Inscribirse </v-btn>
    </a>
    <a href="/sign-in">
      <v-btn rounded variant="flat" color="secondary"> Ingresar </v-btn>
    </a>
  </div>
</template>
