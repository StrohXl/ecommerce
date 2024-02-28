<template>
  <div
    v-if="useClientStore().client == 'false'"
    class="items-center gap-2 hidden md:flex"
  >
    <NuxtLink href="/sign-up">
      <v-btn color="primary" variant="outlined"> Inscribirse </v-btn>
    </NuxtLink>
    <NuxtLink href="/sign-in">
      <v-btn variant="flat" color="primary"> Ingresar </v-btn>
    </NuxtLink>
  </div>
</template>
