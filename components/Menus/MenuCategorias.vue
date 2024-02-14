<script setup>
import site from "@/site";
</script>
<template>
  <div class="text-center">
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <span class="cursor-pointer" variant="text" dark v-bind="props">
          Categorias
        </span>
      </template>

      <v-list class="mt-3" select-strategy="classic" color="primary">
        <v-list-item
          :value="item.title"
          v-for="(item, index) in site.nav[1].subMenu"
          :key="index"
          
        >
          <NuxtLink class="block" :model-value="isActive" :href="`/${item.link}`">
            {{ item.title }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
