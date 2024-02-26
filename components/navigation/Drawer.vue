<script setup>
import site from "@/site";
const route = useRoute();
</script>
<template>
  <v-navigation-drawer
    v-model="useDrawerStore().drawer"
    class="md:!none !w-screen pt-2 !bg-white !h-full"
    temporary

  >
    <div class="items-center gap-3 flex justify-center mt-10">
      <NuxtLink href="/sign-up">
        <v-btn variant="outlined" color="primary"> Inscribirse </v-btn>
      </NuxtLink>
      <NuxtLink href="/sign-in">
        <v-btn color="primary" variant="flat"> Ingresar </v-btn>
      </NuxtLink>
    </div>

    <v-list density="compact" class="my-10" nav >
      <template v-for="item in site.nav" :key="item.title">
        <v-list-item
          :class="`text-gray-800 ${
            route.fullPath == item.link && 'text-primary !font-bold'
          }`"
          :value="item.title"
          v-if="!item.subMenu"
        >
          <NuxtLink class="block uppercase" :href="`${item.link}`">
            {{ item.title }}
          </NuxtLink>
        </v-list-item>
        <v-list-group v-if="item.subMenu" nav>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              :class="`text-lg uppercase ${
                route.fullPath.includes(item.title.toLowerCase())
                  ? ' text-primary font-semibold'
                  : '!text-gray-800 '
              }`"
              >{{ item.title }}</v-list-item
            >
          </template>
          <v-list-item
            :value="subCategorie.title"
            :class="`text-lg ${
              route.fullPath.includes(subCategorie.title.toLowerCase())
                ? ' text-primary font-semibold'
                : '!text-gray-800 '
            }`"
            :key="subCategorie.title"
            v-for="subCategorie in item.subMenu"
          >
            <NuxtLink class="block uppercase" :href="`/${subCategorie.link}`">
              {{ subCategorie.title }}
            </NuxtLink>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
    <Networks class="text-primary" />
  </v-navigation-drawer>
</template>
