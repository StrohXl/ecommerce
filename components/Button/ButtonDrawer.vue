<template>
  <div class="xl:!hidden ml-2">
    <v-btn
      color="secondary"
      @click="useDrawerStore().openDrawer()"
      icon="mdi-menu"
      v-if="useDrawerStore().drawer == false"
      class="!text-xl"
    ></v-btn>
    <v-btn
      color="secondary"
      @click="useDrawerStore().closeDrawer()"
      v-if="useDrawerStore().drawer == true"
      icon="mdi-close"
      class="!text-xl"
    ></v-btn>
  </div>
</template>
