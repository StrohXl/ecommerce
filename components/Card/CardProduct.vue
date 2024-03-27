<script setup>
defineProps(["name", "imagePrincipal", "price", "id"]);
</script>

<template>
  <NuxtLink :href="`/product/${id}`" :title="name">
    <v-card
      class="hover:!shadow-xl !w-44 sm:!w-48 md:!w-52 hover:!shadow-gray-300 !border-1 !border-gray-200 max-w-[220px] mx-auto cursor-pointer !relative"
    >
      <div>
        <v-img
          class="h-44 md:h-52"
          :src="imagePrincipal"
          contain
          max-width="220"
          max-height="220"
        />
      </div>
      <v-card-subtitle class="!opacity-100 !text-lg pt-3 border-t-2 mt-2">
        {{ name }}
      </v-card-subtitle>
      <v-card-subtitle class="mb-5 !text-lg">${{ price }}</v-card-subtitle>
    </v-card>
  </NuxtLink>
</template>
