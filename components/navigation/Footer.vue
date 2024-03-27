<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
<template>
  <v-footer color="secondary" class="pt-2 pb-3 px-10 !border-t-">
    <v-row justify="center" no-gutters class="!grid sm:!flex max-w-[1400px] mx-auto">
      <v-col class="mt-8" cols="12" justify="center">
        <h2 class="mb-0 font-extrabold text-center">
          <NuxtLink to="/">
            {{ $config.public.title }}
          </NuxtLink>
        </h2>
        <h4 class="my-5 mb-0 font-semibold text-center text-primary">
          Nuestras Redes sociales
        </h4>
        <div class="-translate-x-3 flex justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-0 mt-0 !text-xl hover:text-red-500"
            :icon="icon"
            variant="text"
          />
        </div>
      </v-col>
     

      <v-col class="text-center mt-8" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>{{ $config.public.title }}</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
