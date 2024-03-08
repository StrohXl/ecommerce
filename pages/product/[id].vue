<script setup lang="ts">
const id = ref(Number(useRoute().params.id));
const product = items.find((item: any) => item.id == id.value);
const select = ref(1);
</script>

<template>
  <div class="px-5">
    <v-card
      class="mx-auto px-5 py-5 md:max-w-6xl my-10 !border-2 !shadow-none !border-gray-300/70"
    >
      <div
        class="max-w-[500px] mx-auto grid grid-cols-1 md:grid-rows-[400px] md:grid-cols-[50%,45%] lg:grid-cols-[60%,35%] gap-x-[5%] md:max-w-full"
      >
        <v-img contain :src="product.image" class="!max-h-[300px] sm:!max-h-[400px] md:!max-h-full"> </v-img>
        <div
          class="border-t-2 pt-5 md:!mt-0 md:pl-5 md:border-t-0 md:border-l-2 !border-gray-200/70 !mt-10 md:grid md:grid-cols-1 justify-between"
        >
          <div>
            <h1 class="!text-2xl pr-3">{{ product.title }}</h1>
            <v-card-title class="!font-bold !text-3xl mt-3 !pl-0">
              <span class="text-primary opacity-100"> U$S </span>
              {{ product.price }}
            </v-card-title>
          </div>
          <div
            class="grid  gap-2 mt-5 !w-full md:flex flex-col md:justify-center"
          >
            <v-select
              :hide-details="true"
              variant="outlined"
              color="primary"
              class="items-center !grid !flex-none mb-5"
              label="Cantidad"
              placeholder="1"
              :items="[1, 2, 3, 4, 5, 6, 7, 8]"
              v-model="select"
            />
            <v-btn
              class="!normal-case"
              variant="flat"
              size="large"
              color="primary"
            >
              Comprar
            </v-btn>

            <v-btn
              size="large"
              class="!normal-case"
              variant="outlined"
              color="primary"
              append-icon="mdi-cart-plus"
              @click="
                useShoppingCart().addProductInShoppingCart({
                  product,
                  cuantity: select,
                })
              "
            >
              Anadir al Carrito
            </v-btn>
          </div>
        </div>
      </div>
      <ButtonIconHeart />
    </v-card>
  </div>
</template>
