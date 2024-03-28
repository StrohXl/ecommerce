<script setup>
defineProps(["name", "imagePrincipal", "price", "id"]);
</script>

<template>
  <NuxtLink :href="`/product/${id}`" :title="name">
    <v-card
      class="!shadow-none hover:!shadow-xl !w-44  md:!w-52 hover:!shadow-gray-400 !border-2 md:!min-h-80 !border-gray-300/70 mx-auto cursor-pointer !relative"
    >
      <div>
        <v-img
          class="!h-44 sm:!h-48 md:!h-52"
          :src="imagePrincipal"
          contain
        
        />
      </div>
      <v-card-subtitle
        class="!opacity-90 !text-[12px] md:!text-[13px] pt-4 border-t-2 mt-2 !whitespace-normal !line-clamp-1"
      >
        {{ name }}
      </v-card-subtitle>
      <v-card-subtitle class="mb-5 !text-lg !opacity-100">${{ price }}</v-card-subtitle>
    </v-card>
  </NuxtLink>
</template>
