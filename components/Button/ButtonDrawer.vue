<template>
    <div class="md:!hidden">
      <v-btn
        @click="useDrawerStore().openDrawer()"
        icon="mdi-menu"
        v-if="useDrawerStore().drawer == false"
        class="!text-xl"
      ></v-btn>
      <v-btn
        @click="useDrawerStore().closeDrawer()"
        v-if="useDrawerStore().drawer == true"
        icon="mdi-close"
        class="!text-xl"
      ></v-btn>
    </div>
  </template>
  