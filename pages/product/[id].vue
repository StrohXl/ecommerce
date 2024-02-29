<script setup lang="ts">
const id = ref(useRoute().params.id);
const product = items.find((item: any) => item.id == id.value);
</script>

<template>
  <div class="px-5">
    <v-card
      class="mx-auto px-7 py-5 grid-rows-[400px] !grid grid-cols-2 max-w-6xl my-10 !border-2 !border-gray-100"
    >
      <v-img contain :src="product.image"> </v-img>
      <div class="border-l-2 pl-5">
        <v-card-title class="!font-bold !text-4xl">
          <h1>{{ product.title }}</h1>
        </v-card-title>
        <v-card-title class="!font-bold !text-3xl">
          U$S {{ product.precio }}
        </v-card-title>
      </div>
    </v-card>
  </div>
</template>
