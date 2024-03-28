<script setup>
useHead({
  name: useRuntimeConfig().public.name,
});
</script>

<template>
  <div class="relative mb-40">
    <CarouselHero />
    <div
      class="!w-screen px-5 absolute top-60 md:top-72 xl:top-96 xl:left-[50%] xl:translate-x-[-50%]"
    >
      <SwiperProductsHero />
    </div>
    <div class="mt-40">
      <div
        class="mx-auto grid mt-0 grid-cols-[auto,auto] lg:gap-7 sm:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto,auto,auto,auto,auto] sm: px-3 justify-center max-w-[1400px] gap-3"
      >
        <CardProduct
          v-for="(item, index) in items.slice(0, 12)"
          :key="index"
          :name="item.name"
          :imagePrincipal="item.imagePrincipal"
          :price="item.price"
          :id="item.id"
        />
      </div>
    </div>
  </div>
</template>
