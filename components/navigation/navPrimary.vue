<script setup>
import site from "@/site";
const tab = ref();
const route = useRoute();
onMounted(() => {
  const position = site.nav.findIndex(
    (i) => i.link == route.fullPath || route.fullPath.includes(i.link)
  );
  tab.value = position;
});
</script>
<template>
  <v-tabs
    align-tabs="center"
    v-model="tab"
    color="primary"
    density="compact"
    class="col-span-2 mt-[70px] !hidden md:!flex"
  >
    <template v-for="(item, index) in site.nav" :key="item.link">
      <v-tab
        v-if="!item.subMenu"
        density="compact"
        class="!h-10"
        :value="index"
        @click="useRouter().push(item.link)"
      >
        {{ item.title }}
      </v-tab>
      
      <MenusMenuCategorias
        v-if="item.subMenu"
        class="flex items-center h-10 uppercase text-sm px-5"
      />
    </template>
  </v-tabs>
</template>
