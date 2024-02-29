<script setup>
import AppBar from "../components/navigation/AppBar";
import { useTheme } from "vuetify";
const theme = useTheme();
</script>
<template>
  <v-theme-provider :theme="theme">
    <v-layout class="!grid bg-[#fefefe]" >
      <AppBar />
      <NavigationDrawer />
      <NavigationDrawerShoppingCart />
      <div class="mt-[64px] md:mt-[108px]">
        <slot />
      </div>
      <NavigationFooter />
      <ModalShopping/>

    </v-layout>
  </v-theme-provider>
</template>
