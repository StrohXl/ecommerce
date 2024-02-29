<script setup>
useHead({
  title: useRuntimeConfig().public.title,
});
</script>

<template>
  <PruebaImage />
  <div
    class="grid grid-cols-[auto,auto] sm:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto,auto,auto] sm: px-3 justify-center max-w-6xl gap-3 mx-auto mb-60"
  >
    <CardProduct
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :image="item.image"
      :price="item.precio"
      :id="item.id"
    />
  </div>
</template>
