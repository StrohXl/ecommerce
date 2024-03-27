<script setup lang="ts">
onMounted(() => {
  useStepperStore().resetAllFormSignUp();
});
</script>

<template>
  <div class="py-20 min-h-screen flex justify-center items-center">
    <div
      class="sm:border-2 !h-auto !bg-white w-full max-w-[450px] mx-auto px-5 sm:p-10 rounded-lg md:shadow-xl md:shadow-black/30"
    >
      <h3 class="text-center mb-5 font-normal">Inscribirse</h3>
      <SteppersFormSignUp />
      <div class="flex justify-end">
        <NuxtLink href="/sign-in">
          <v-btn class="!normal-case" color="primary" variant="text">Ya tengo una cuenta</v-btn>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
