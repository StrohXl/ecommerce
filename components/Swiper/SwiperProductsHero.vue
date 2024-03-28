<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

</script>
<template>
  <SwiperFather
    :breakpoints="{
      300: { slidesPerView: 2, spaceBetween: 20 },
      600: { slidesPerView: 3, spaceBetween: 20 },
      900: { slidesPerView: 4, spaceBetween: 20 },
      1200: { slidesPerView: 5, spaceBetween: 10 },
    }"
    :navigation="true"
    class="w-full pb-10 swiper-products-hero"
  >
    <swiper-slide
      class="flex justify-center"
      v-for="(item, index) in items.slice(0, 20)"
      :key="index"
    >
      <CardProduct
        :name="item.name"
        :imagePrincipal="item.imagePrincipal"
        :price="item.price"
        :id="item.id"
      />
    </swiper-slide>
  </SwiperFather>
</template>
