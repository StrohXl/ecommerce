<script setup>
useHead({
  name: useRuntimeConfig().public.name,
});
</script>

<template>
  <div class="relative mb-40">
    <CarouselHero />
    <div
      class="mx-auto -translate-y-60 grid mt-10 grid-cols-[auto,auto] lg:gap-7 sm:grid-cols-[auto,auto,auto] md:grid-cols-[auto,auto,auto,auto,auto] justify-center max-w-[1400px] gap-3"
    >
      <CardProduct
        v-for="(item, index) in items.slice(0, 5)"
        :key="index"
        :name="item.name"
        :imagePrincipal="item.imagePrincipal"
        :price="item.price"
        :id="item.id"
      />
    </div>
    <div class="-translate-y-36">
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
