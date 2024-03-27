<script setup lang="ts">
const id = ref(Number(useRoute().params.id));
const product = items.find((item: any) => item.id == id.value);
const select = ref(1);
const image = ref(product.imagePrincipal);
</script>

<template>
  <div class="px-5 mt-16 mb-20">
    <v-card
      class="mx-auto !p-8 min-h-[800px] !shadow-xl !shadow-white  max-w-[1400px] my-10 !border-2 !border-gray-300/70"
    >
      <div
        class="max-w-[500px] mx-auto grid grid-cols-1 md:grid-rows-[400px] md:grid-cols-[55%,45%] gap-x-[30px] md:max-w-full"
      >
        <div class="grid grid-cols-[100px,auto] gap-x-[10px]">
          <div class="grid gap-2">
            <v-img
              @click="image = product.imagePrincipal"
              contain
              :src="product.imagePrincipal"
              class="border-2 cursor-pointer w-full h-28"
            />
            <v-img
              v-for="(item, index) in product.images"
              @click="image = item"
              :key="index"
              contain
              :src="item"
              class="border-2 cursor-pointer w-full h-28"
            />
          </div>
          <v-img
            contain
            :src="image"
            class="!max-h-[300px] border-2 sm:!max-h-[400px] md:!max-h-[600px] md:min-h-[600px]"
          />
        </div>
        <div
          class="border-t-2 md:!mt-0 md:pr-36 md:border-t-0 !border-gray-200/70 !mt-10 md:grid md:grid-cols-1 justify-between"
        >
          <div>
            <h1 class="!text-3xl">{{ product.name }}</h1>
            <p class="!text-base mt-5">{{ product.description }}</p>
            <v-card-subtitle
              class="!font-bold !opacity-80 !text-3xl mt-3 !pl-0"
            >
              ${{ product.price }}
            </v-card-subtitle>
          </div>
          <div class="!flex gap-2 mt-5 !w-full">
            <div
              class="px-2 h-11 flex border-gray-600 justify-between items-center rounded-full border-2"
            >
              <v-icon @click="select--" class="cursor-pointer"
                >mdi-minus</v-icon
              >

              <input
                type="number"
                :minlength="1"
                :value="select"
                :maxlength="10"
                class="max-w-16 text-center select"
                style="outline: none"
              />
              <v-icon @click="select++" class="cursor-pointer">mdi-plus</v-icon>
            </div>
            <v-btn
              size="large"
              rounded
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
    </v-card>
  </div>
</template>
<style>
.select[type="number"]::-webkit-inner-spin-button,
.select[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
