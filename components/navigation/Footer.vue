<script setup>
import site from "@/site";
</script>
<template>
  <v-footer color="primary" class="py-10 pb-3">
    <v-row justify="center" no-gutters class="!grid sm:!flex">
      <v-btn
        v-for="link in site.nav"
        :key="link.title"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
      <NuxtLink v-if="!link.subMenu" :to="link.link">{{ link.title }}</NuxtLink>
      <template v-if="link.subMenu">
        {{ link.title }}
      </template>
      </v-btn>
      <v-col class="mt-8" cols="12" justify="center">
        <Networks/>
      </v-col>
      <v-col class="text-center mt-8" cols="12">
        {{ new Date().getFullYear() }} — <strong>{{ $config.public.title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
