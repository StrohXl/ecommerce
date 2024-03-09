<template>
  <div
    v-if="useClientStore().client == 'false'"
    class="items-center gap-2 hidden md:flex ml-3"
  >
    <NuxtLink href="/sign-up">
      <v-btn  variant="outlined"> Inscribirse </v-btn>
    </NuxtLink>
    <NuxtLink href="/sign-in">
      <v-btn variant="flat" class="text-primary" > Ingresar </v-btn>
    </NuxtLink>
  </div>
</template>
