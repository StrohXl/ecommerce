<script setup>
import AppBar from "../components/navigation/AppBar";
import { useTheme } from "vuetify";
const theme = useTheme();
</script>
<template>
  <v-theme-provider :theme="theme">
    <v-app class="!grid bg-[#fefefe]">
      <template v-if="!['/sign-in', '/sign-up'].includes(useRoute().path)">
        <AppBar />
        <NavigationDrawer />
        <NavigationDrawerShoppingCart />
      </template>

      <v-main class=" !bg-slate-100">
        <slot />
      </v-main>
      <template v-if="!['/sign-in', '/sign-up'].includes(useRoute().path)">
        <NavigationFooter />
        <ModalShop />
        <ModalHeart />
      </template>
      <NuxtNotifications position="bottom right" :max="5" speed="1000" />
    </v-app>
  </v-theme-provider>
</template>
