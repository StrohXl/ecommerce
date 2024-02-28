
<template>
  <div class="mx-7">
    <div
      class="my-10 py-10 md:shadow-xl mx-auto !max-w-[1200px] md:border-2 rounded-lg grid md:grid-cols-2 items-center"
    >
      <nuxt-icon name="pc" filled class="hidden md:!block" />
      <div class="md:border-l-2 px-3">
        <v-avatar
          class="!bg-gray-50 !shadow-md  shadow-black border-1 mx-auto mb-5 !flex"
          size="70"
        >
          <v-icon class="!text-4xl text-primary">mdi-account</v-icon>
        </v-avatar>
        <h3 class="text-center mb-12 font-normal">Iniciar sesion</h3>
        <FormSignIn class="" />
      </div>
    </div>
  </div>
</template>
