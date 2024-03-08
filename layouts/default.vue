<script setup>
import AppBar from "../components/navigation/AppBar";
import { useTheme } from "vuetify";
const theme = useTheme();
</script>
<template>
  <v-theme-provider :theme="theme">
    <v-app class="!grid bg-[#fefefe]" >
      <AppBar />
      <NavigationDrawer />
      <NavigationDrawerShoppingCart />
      <div class="mt-[64px] md:mt-[108px]">
        <slot />
      </div>
      <NavigationFooter />
      <ModalShopping/>

    </v-app>
  </v-theme-provider>
</template>
