<script setup>
import site from "@/site";
</script>
<template>
  <v-navigation-drawer
    class="!z-[1200] !h-screen !-top-0"
    location="right"
    width="300"
    v-model="useDrawerStore().drawerShoppingCart"
    temporary
  >
    <v-list>
      <v-list-item class="text-lg font-semibold">
        <v-btn
        @click="useDrawerStore().closeDrawerShoppping()"
          variant="text"
          color="primary"
          icon="mdi-close"
        ></v-btn>
        Carrito de compras
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
