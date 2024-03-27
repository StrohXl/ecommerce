<script setup>
onMounted(() => {
  chargeListShoppingCart();
});
</script>
<template>
  <v-badge
    color="secondary"
    :content="useShoppingCart().shoppingCartLength"
    offset-x="10"
    offset-y="10"
  >
    <v-btn
      v-bind="props"
      color="secondary"
      @click="useDrawerStore().openDrawerShopping()"
      icon="mdi-cart-outline"
      class="buttons-actions-icon"
    />
  </v-badge>
</template>
<style>
.v-tooltip > .v-overlay__content {
  @apply !bg-black;
}
</style>
