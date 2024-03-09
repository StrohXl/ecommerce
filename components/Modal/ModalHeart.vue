<script setup>
const dialog = ref(false);
watch(
  () => useModalStore().modalFavorite,
  () => {
    dialog.value = useModalStore().modalFavorite;
  }
);
watch(
  () => dialog.value,
  () => {
    if (dialog.value === false) {
      useModalStore().closeModalFavorite();
    } else {
      if (dialog.value) {
        useModalStore().openModalFavorite();
      }
    }
  }
);
</script>
<template>
  <v-dialog v-model="dialog" width="auto">
    <v-card
      class="text-xl text-center py-8"
      max-width="400"
      text="Para agregar favoritos, ingresa a tu cuenta"
    >
      <template v-slot:actions>
        <div class="grid justify-center w-full gap-2">
          <NuxtLink href="/sign-in">
            <v-btn 
              class="mx-auto"
              width="300"
              text="Ingresar"
              @click="useModalStore().closeModalFavorite()"
              variant="elevated"
              color="primary-darken-1"
            />
          </NuxtLink>
          <NuxtLink href="/sign-up">
            <v-btn 
              class="mx-auto w-full"
              variant="text"
              color="primary-darken-1"
              text="Inscribirse"
              @click="useModalStore().closeModalFavorite()"
            />
          </NuxtLink>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>
