<template>
  <div v-if="useClientStore().client == 'true'" class="hidden md:flex gap-3">
    <v-tooltip text="Carrito de Compras" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary"
          @click="useDrawerStore().openDrawerShopping()"
          variant="outlined"
          icon="mdi-cart-outline"
          class="buttons-actions-icon"
        />
      </template>
    </v-tooltip>
    <v-tooltip text="Favoritos" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          color="primary"
          variant="outlined"
          icon="mdi-heart"
          class="buttons-actions-icon"
        ></v-btn>
      </template>
    </v-tooltip>

    <MenusMenuUser />
  </div>
</template>
