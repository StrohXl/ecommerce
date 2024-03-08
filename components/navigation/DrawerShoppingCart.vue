<script setup>
import site from "@/site";
</script>
<template>
  <v-navigation-drawer
    class="!z-[1200] !h-screen !-top-0"
    location="right"
    width="400"
    v-model="useDrawerStore().drawerShoppingCart"
    temporary
  >
    <div class="text-xl font-semibold">
      <h2 class="flex text-2xl items-center p-5">Carrito de compras</h2>
      <div class="p-2 mt-5 grid">
        <v-icon size="80" class="mx-auto mt-5"> mdi-cart-remove </v-icon>
        <h6 class="mt-5 font-semibold text-center">
          Tu Carrito de Compras está vacío
        </h6>
      </div>
    </div>
  </v-navigation-drawer>
</template>
