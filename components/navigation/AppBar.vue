<script lang="ts" setup>
onMounted(() => {
  verifyCookie();
});
</script>
<template>
  <v-app-bar
    color="primary"
    scroll-behavior="elevate"
    class="md:py-4 md:pb-7 !border-none"
  >
    <nav class="nav-bar max-w-[1200px] mx-auto px-5">
      <div class="flex items-center gap-5 row-start-1">
        <h3 class="mb-0">
          <NuxtLink to="/">
            {{ $config.public.title }}
          </NuxtLink>
        </h3>
        <TextSearch class="!hidden md:!block" />
      </div>
      <div class="buttons-actions">
        <v-btn icon="mdi-magnify" class="md:!hidden"></v-btn>
        <ButtonIconShoppingCart />
        <ButtonSignIn />
        <ButtonSignUp />
        <ButtonDrawer />
      </div>
      <NavigationNavPrimary />
    </nav>
  </v-app-bar>
</template>

<style lang="postcss">
.nav-bar {
  @apply grid grid-cols-2 md:grid-cols-[55%,auto] md:grid-rows-2 items-center justify-between w-full px-3 h-full;
}
.buttons-actions {
  @apply flex justify-end row-start-1 gap-0 ;
}
</style>
