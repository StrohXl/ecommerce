<script setup>
const shop = ref(false);
watch(
  () => useModalStore().modalShop,
  () => {
    shop.value = useModalStore().modalShop;
  }
);
watch(
  () => shop.value,
  () => {
    if (shop.value === false) {
      useModalStore().closeModalShop();
    } else {
      if (shop.value) {
        useModalStore().openModalShop();
      }
    }
  }
);
</script>
<template>
  <v-dialog v-model="shop" width="auto">
    <v-card
      class="text-xl text-center py-8"
      max-width="400"
      text="Para comprar debes ingresar a tu cuenta"
    >
      <template v-slot:actions>
        <div class="grid justify-center w-full gap-2">
          <NuxtLink href="/sign-in">
            <v-btn
              class="mx-auto"
              width="300"
              text="Ingresar"
              @click="useModalStore().closeModalShop()"
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
              @click="useModalStore().closeModalShop()"
            />
          </NuxtLink>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>
