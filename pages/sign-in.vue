<template>
  <div class="">
    <div
      class="my-10 py-10 md:shadow-xl !max-w-[1200px] md:border-2 rounded-lg  mx-auto grid md:grid-cols-2 items-center"
    >
      <nuxt-icon name="pc" filled class="hidden md:!block" />
      <div class="border-l-2">
        <v-avatar class="!bg-gray-50 !shadow-md shadow-black border-1  mx-auto  mb-5 !flex" size="70">
          <v-icon class="text-[#6200aa] !text-4xl">mdi-account</v-icon>
        </v-avatar>
        <h3 class="text-center mb-12 font-normal">Iniciar sesion</h3>
        <FormSignIn />
      </div>
    </div>
  </div>
</template>
