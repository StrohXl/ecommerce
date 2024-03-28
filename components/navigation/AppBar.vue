<script lang="ts" setup>
import ButtonSignIn from "../Button/ButtonSignIn.vue";
import ButtonSignUp from "../Button/ButtonSignUp.vue";
onMounted(() => {
  verifyCookie();
});
</script>
<template>
  <v-app-bar
    scroll-behavior="elevate"
    color="primary"
    class="backdrop-blur-sm  !border-b-2 md:!z-[1000]"
  >
    <nav class="nav-bar max-w-[1400px] mx-auto px-5">
      <div class="flex items-center gap-5">
        <h4 class="mb-0 !font-extrabold">
          <NuxtLink to="/"> {{ useRuntimeConfig().public.title }} </NuxtLink>
        </h4>
        <TextSearch class="!hidden md:!block " />
      </div>

      <div class="buttons-actions">
        <div class="hidden md:!flex gap-5 mt-1 items-center mr-1">
          <NuxtLink class="text-secondary opacity-90 font-semibold" href="/"
            >Inicio</NuxtLink
          >
          <MenusMenuCategorias />
        </div>
        <ButtonSearch class="md:!hidden" />
        <ButtonIconShoppingCart />
        <ButtonSignIn />
        <ButtonSignUp />
        <ButtonDrawer />
      </div>
    </nav>
  </v-app-bar>
</template>

<style>
.nav-bar {
  @apply grid grid-cols-[auto,auto] md:grid-cols-[400px,auto] lg:grid-cols-[600px,auto] items-center justify-between w-full px-3 h-full;
}
.buttons-actions {
  @apply flex justify-end items-center text-base  gap-0;
}
</style>
