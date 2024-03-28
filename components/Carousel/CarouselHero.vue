<template>
  <v-carousel
    :class="`mx-auto !h-[400px] md:!h-[500px] xl:!h-[600px]  max-w-[1600px] w-full
   !bg-slate-100 !transition-none carousel-hero`"
    :show-arrows="false"
    hide-delimiters
    cycle
  >
    <v-carousel-item class="!object-cover" src="/Comparación-de-consolas.jpg">
    </v-carousel-item>
  </v-carousel>
</template>
<style lang="css">
.carousel-hero {
  & div{
    & div{
      & img{
        object-fit: cover !important;
      }
    }
  }

}
</style>
