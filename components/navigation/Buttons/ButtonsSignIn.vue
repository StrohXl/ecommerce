<template>
  <div v-if="useClientStore().client == 'true'" class="hidden md:flex gap-3">
    <v-tooltip text="Favoritos" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          variant="outlined"
          icon="mdi-heart"
          class="buttons-actions-icon"
        ></v-btn>
      </template>
    </v-tooltip>

    <MenusMenuUser />
  </div>
</template>
