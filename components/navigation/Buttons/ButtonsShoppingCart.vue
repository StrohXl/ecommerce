<template>
  <v-tooltip text="Carrito de Compras" location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        @click="useDrawerStore().openDrawerShopping()"
        variant="outlined"
        icon="mdi-cart-outline"
        class="buttons-actions-icon"
      />
    </template>
  </v-tooltip>
</template>
