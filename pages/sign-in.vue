<template>
  <div class="mx-3">
    <div
      class="my-16 py-10 md:shadow-xl md:mx-auto !max-w-[1200px] border-2 rounded-lg grid md:grid-cols-2 items-center"
    >
      <nuxt-icon name="pc" filled class="hidden md:!block" />
      <div class="md:border-l-2 px-3">
        <h3 class="text-center mb-12 font-normal">
          {{ useRuntimeConfig().public.title }}
        </h3>
        <v-avatar
          class="!bg-gray-50 !shadow-md shadow-black border-1 mx-auto mb-5 !flex"
          size="70"
        >
          <v-icon class="!text-4xl text-primary">mdi-account</v-icon>
        </v-avatar>
        <h5 class="text-center mb-8 font-normal">Iniciar sesion</h5>
        <FormSignIn class="" />
      </div>
    </div>
  </div>
</template>
