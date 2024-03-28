<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
const modules = [Navigation];
defineProps(["breakpoints", "navigation"]);
</script>
<template>
  <swiper
    :modules="modules"
    :navigation="navigation"
    :breakpoints="breakpoints"
  >
    <slot />
  </swiper>
</template>
