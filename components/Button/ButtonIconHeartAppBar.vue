<template>
  <v-tooltip text="Favoritos" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        icon="mdi-heart"
        class="buttons-actions-icon"
      ></v-btn>
    </template>
  </v-tooltip>
</template>
