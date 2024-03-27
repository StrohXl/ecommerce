<template>
  <div class="mx-3 min-h-screen flex justify-center items-center">
    <div
      class="bg-white w-full py-10 md:shadow-xl md:mx-auto !max-w-[450px] border-2 rounded-lg items-center"
    >
      <div class="">
        <h3 class="text-center mb-6 font-normal">
          {{ useRuntimeConfig().public.title }}
        </h3>
        <v-avatar
          class="!bg-gray-50 !shadow-md shadow-black border-1 mx-auto mb-5 !flex"
          size="70"
        >
          <v-icon class="!text-4xl text-primary">mdi-account</v-icon>
        </v-avatar>
        <h5 class="text-center mb-8 font-normal">Iniciar sesión</h5>
        <FormSignIn class="" />
      </div>
    </div>
  </div>
</template>
