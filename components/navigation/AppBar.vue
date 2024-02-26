<template>
  <v-app-bar class="md:py-4 md:pb-7 !border-b-1 !shadow-md">
    <nav class="nav-bar max-w-[1200px] mx-auto">
      <div class="flex items-center gap-5 row-start-1">
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
          icon="mdi-magnify"
          class="buttons-actions-icon md:!hidden"
        ></v-btn>
        <v-btn
          @click="useDrawerStore().openDrawerShopping()"
          icon="mdi-shopping"
          class="buttons-actions-icon"
        ></v-btn>
        <div class="items-center gap-2 hidden md:flex">
          <NuxtLink href="/sign-up">
            <v-btn variant="outlined" color="primary"> Inscribirse </v-btn>
          </NuxtLink>
          <NuxtLink href="/sign-in">
            <v-btn color="primary" variant="flat"> Ingresar </v-btn>
          </NuxtLink>
        </div>
        <div>
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
  @apply flex justify-end row-start-1 gap-0 md:gap-2;
}
.buttons-actions-icon {
}
</style>
