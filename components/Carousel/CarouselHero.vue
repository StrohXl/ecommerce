<template>
  <v-carousel color="primary" show-arrows="hover" cycle>
    <v-carousel-item
      id="carousel-item"
      src="/lista-lanzamientos-moviles-2023.webp"
      cover
    ></v-carousel-item>

    <v-carousel-item
      id="carousel-item"
      src="/laptops-regreso-a-clases-2022.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      id="carousel-item"
      src="/Comparación-de-consolas.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>
<style>
#carousel-item {
  @apply !max-w-[1200px] mx-auto ;
}
</style>
