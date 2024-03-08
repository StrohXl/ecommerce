<template>
  <v-tooltip text="Carrito de Compras" location="bottom">
    <template v-slot:activator="{ props }">
      <v-badge
        :content="useShoppingCart().shoppingCartLength"
        color="white"
        offset-x="5"
        offset-y="5"
      >
        <v-btn
          v-bind="props"
          @click="useDrawerStore().openDrawerShopping()"
          icon="mdi-cart-outline"
          class="buttons-actions-icon"
        />
      </v-badge>
    </template>
  </v-tooltip>
</template>
