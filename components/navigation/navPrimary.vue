<script setup>
import site from "@/site";
const route = useRoute();
</script>
<template>
  <div
    class="hidden md:flex gap-3 lg:gap-6 justify-center row-start-2 col-span-2 w-full mt-10 lg:!mt-12"
  >
    <template v-for="item in site.nav" :key="item.title">
      <NuxtLink
        v-if="!item.subMenu"
        :class="` text-white transition-all border-b-2 cursor-pointer border-white/0 ${
          !item.subMenu && ' hover:border-gray-400'
        } ${route.path == item.link && ' !border-white/100 '}`"
        :to="item.link"
        >{{ item.title }}</NuxtLink
      >
      <MenusMenuCategorias v-if="item.subMenu" />
    </template>
  </div>
</template>
