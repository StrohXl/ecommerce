<script lang="ts" setup>
onMounted(() => {
  verifyCookie();
});
</script>
<template>
  <v-app-bar class="md:py-4 md:pb-7 !border-b-1 !shadow-md">
    <nav class="nav-bar max-w-[1200px] mx-auto">
      <div class="flex items-center gap-5 row-start-1">
        <h3 class="mb-0 text-primary">
          <NuxtLink to="/">
            {{ $config.public.title }}
          </NuxtLink>
        </h3>
        <TextSearch class="!hidden md:!block" />
      </div>
      <div class="buttons-actions">
        <v-btn
          color="primary"
          variant="outlined"
          icon="mdi-magnify"
          class="md:!hidden"
        ></v-btn>
        <NavigationButtonsSignIn />
        <NavigationButtonsSignUp />
        <NavigationButtonsDrawer />
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
  @apply flex justify-end row-start-1 gap-2 md:gap-3;
}
</style>
