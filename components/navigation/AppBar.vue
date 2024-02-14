<template>
  <v-app-bar
    color="primary"
    class="md:py-4 md:pb-7 !shadow-none"
 
  >
    <nav class="nav-bar max-w-[1200px] mx-auto">
      <div class="flex items-center gap-10 row-start-1">
        <h3 class="mb-0">
          <NuxtLink to="/">
            {{ $config.public.title }}
          </NuxtLink>
        </h3>
        <TextSearch class="!hidden md:!block" />
      </div>
      <div class="buttons-actions">
        <v-btn
          @click="useDrawerStore().openDrawerShopping()"
          icon="mdi-shopping"
          class="buttons-actions-icon"
        ></v-btn>
        <v-btn icon="mdi-heart" class="buttons-actions-icon"></v-btn>
        <NuxtLink href="/sign">
          <v-btn icon="mdi-account" class="buttons-actions-icon"></v-btn>
        </NuxtLink>
        <v-btn
          @click="useDrawerStore().openDrawer()"
          icon="mdi-menu"
          v-if="useDrawerStore().drawer == false"
          class="!text-xl md:!hidden"
        ></v-btn>
        <v-btn
          @click="useDrawerStore().closeDrawer()"
          v-if="useDrawerStore().drawer == true"
          icon="mdi-close"
          class="!text-xl md:!hidden"
        ></v-btn>
      </div>
      <NavigationNavPrimary />
    </nav>
  </v-app-bar>
</template>

<style lang="postcss">
.nav-bar {
  @apply grid grid-cols-2 md:grid-cols-[70%,auto] md:grid-rows-2 items-center justify-between w-full px-3 h-full;
}
.buttons-actions {
  @apply flex justify-end row-start-1;
}
.buttons-actions-icon {
}
</style>
