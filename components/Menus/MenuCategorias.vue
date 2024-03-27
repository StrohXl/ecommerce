<script setup>
import site from "@/site";
const categories = ref(useCategoriesStore().categories);
const menu = ref();
</script>
<template>
  <div class="text-center">
    <v-menu
      open-on-hover
      v-model="menu"
      location="bottom center"
      close-delay="50"
      open-delay="50"
    >
      <template v-slot:activator="{ props }">
        <span
          class="cursor-pointer ml-2 text-secondary font-semibold opacity-90"
          variant="text"
          dark
          v-bind="props"
        >
          Categorias
          <v-icon
            :class="`${
              menu && 'rotate-180'
            } mb-[2px] -translate-x-1 transition-transform duration-300 !text-2xl`"
          >
            mdi-menu-down
          </v-icon>
        </span>
      </template>

      <v-list bg-color="#fafafa" class="mt-4">
        <v-list-item
          :value="item.name"
          v-for="(item, index) in categories"
          :key="index"
        >
          <NuxtLink
            class="block !pr-10"
            :model-value="isActive"
            :href="`/categorias/${item.name}`"
          >
            {{ item.name }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
