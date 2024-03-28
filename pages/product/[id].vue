<script setup lang="ts">
const id = ref(Number(useRoute().params.id));
const product = items.find((item: any) => item.id == id.value);
const select = ref(1);
const image = ref(product.imagePrincipal);
</script>

<template>
  <div class="px-5  bg-white !py-10 md:!py-20">
    <div
      class="mx-auto !rounded-none md:!rounded-md min-h-[800px] max-w-[1400px] !border-gray-300/70"
    >
      <div
        class="mx-auto grid grid-cols-1 md:grid-rows-[400px] md:grid-cols-[55%,40%] gap-x-[10px] md:gap-x-[20px] lg:gap-x-[30px] md:max-w-full"
      >
        <div class="grid grid-cols-1 lg:grid-cols-[120px,auto] gap-x-[10px]">
          <div
            class="flex lg:grid md:!mx-0 lg:w-full gap-1 h-auto max-h-[600px] overflow-auto lg:!overflow-visible !mt-3 lg:!mt-0 md:!pb-0 pb-3"
          >
            <v-img
              @click="image = product.imagePrincipal"
              contain
              :src="product.imagePrincipal"
              style="overflow: 1"
              class="border-2 cursor-pointer h-auto w-auto aspect-[1]"
            />
            <v-img
              v-for="(item, index) in product.images"
              @click="image = item"
              :key="index"
              contain
              :src="item"
              class="border-2 cursor-pointer h-auto w-auto aspect-[1]"
            />
          </div>
          <v-img
            contain
            :src="image"
            class="row-start-1 lg:col-start-2 md:border-2 aspect-[1] md:!aspect-auto"
          />
        </div>
        <div
          class="md:!px-0 md:!mt-0 md:pr-36 md:border-t-0 !mt-5 md:grid md:grid-cols-1 justify-between"
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
                () => {
                  useShoppingCart().addProductInShoppingCart({
                    product,
                    cuantity: select,
                  });
                }
              "
            >
              Anadir al Carrito
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.select[type="number"]::-webkit-inner-spin-button,
.select[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
