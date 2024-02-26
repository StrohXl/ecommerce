<script setup>
import site from "@/site";
const menu = ref()
</script>
<template>
  <div class="text-center">
    <v-menu open-on-hover v-model="menu" location="bottom center" close-delay="50" open-delay="50">
      <template v-slot:activator="{ props }">
        <span class="cursor-pointer" variant="text" dark v-bind="props">
          Categorias
          <Icon :class="`${menu && 'rotate-180'} mb-[2px]`" name="ic:outline-keyboard-arrow-down" size="1.5em" />
        </span>
      </template>

      <v-list bg-color="#fafafa" class="mt-4">
        <v-list-item
          :value="item.title"
          v-for="(item, index) in site.nav[1].subMenu"
          :key="index"
        >
          <NuxtLink
            class="block"
            :model-value="isActive"
            :href="`/${item.link}`"
          >
            {{ item.title }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
