<script setup>
defineProps(["title", "image", "price", "id"]);
</script>

<template>
  <NuxtLink :href="`/product/${id}`" :title="title">
    <v-card
      class="hover:!shadow-xl hover:!shadow-gray-300 !border-1 !border-gray-200 max-w-[220px] mx-auto cursor-pointer !relative"
    >
      <div>
        <v-img
          height="284"
          :src="image"
          contain
          max-width="220"
          width="220"
          max-height="220"
        />
      </div>
      <v-card-subtitle class="!opacity-100 !text-lg pt-3 border-t-2 mt-2">
        {{ title }}
      </v-card-subtitle>
      <v-card-title class="mb-5"
        ><span class="text-primary">U$S</span> {{ price }}</v-card-title
      >
      <ButtonIconHeart />
    </v-card>
  </NuxtLink>
</template>
