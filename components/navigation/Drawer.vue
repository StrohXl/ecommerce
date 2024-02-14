<script setup>
import site from "@/site";
const route = useRoute();
</script>
<template>
  <v-navigation-drawer
    color="primary"
    v-model="useDrawerStore().drawer"
    class="md:!none !w-screen pt-2"
    temporary
  >
    <v-list density="compact" class="my-5" nav>
      <template v-for="item in site.nav" :key="item.title">
        <v-list-item
          :class="`!text-gray-400 text-lg ${
            route.fullPath == item.link && 'text-white'
          }`"
          :value="item.title"
          v-if="!item.subMenu"
        >
          <NuxtLink class="block" :href="`${item.link}`">
            {{ item.title }}
          </NuxtLink>
        </v-list-item>
        <v-list-group v-if="item.subMenu" nav>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :class="`text-lg ${
                route.fullPath.includes(item.title.toLowerCase())
                  ? ' text-white'
                  : '!text-gray-400'
              }`"
              >{{ item.title }}</v-list-item
            >
          </template>
          <v-list-item
            :value="subCategorie.title"
            :class="`text-lg ${
              route.fullPath.includes(subCategorie.title.toLowerCase())
                ? ' text-white'
                : '!text-gray-400'
            }`"
            :key="subCategorie.title"
            v-for="subCategorie in item.subMenu"
          >
            <NuxtLink class="block" :href="`/${subCategorie.link}`">
              {{ subCategorie.title }}
            </NuxtLink>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
    <Networks class="mt-10" />
  </v-navigation-drawer>
</template>
