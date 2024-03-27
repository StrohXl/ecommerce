<script setup>
import site from "@/site";
</script>
<template>
  <v-navigation-drawer
    class="!z-[1200] !-top-0 !w-[100%] !h-[100%] sm:!w-[500px] md:hidden"
    location="right"
    name="drawer"
    data-pg-name="NavSecondary"
    v-model="useDrawerStore().drawerShoppingCart"
    temporary
  >
    <div class="text-xl font-semibold grid grid-rows-[auto,1fr,auto] h-full">
      <div class="border-b-2 flex items-center px-3 gap-3">
        <v-btn
          variant="text"
          icon="mdi-close"
          @click="useDrawerStore().closeDrawerShoppping()"
        ></v-btn>
        <h2 class="flex text-2xl items-center py-3 mb-0">Carrito de compras</h2>
      </div>
      <div class="h-full overflow-auto" style="scrollbar-width: none">
        <div class="mt-5 grid" v-if="useShoppingCart().shoppingCartLength == 0">
          <v-icon size="80" class="mx-auto mt-5"> mdi-cart-remove </v-icon>
          <h6 class="mt-5 font-semibold text-center">
            Tu Carrito de Compras está vacío
          </h6>
        </div>
        <v-list
          v-if="useShoppingCart().shoppingCartLength != 0"
          class="grid gap-2 px-3 my-2"
        >
          <v-list-item
            variant="outlined"
            class="!rounded-md !border-gray-300 !max-h-[108px]"
            v-for="(item, index) in useShoppingCart().shoppingCart"
            :value="index"
            :key="index"
          >
            <NuxtLink :href="`/product/${item.product.id}`">
              <div
                class="grid grid-cols-[20%,auto] grid-rows-[100px] gap-2 py-2"
              >
                <img
                  :src="item.product.imagePrincipal"
                  class="object-contain h-full"
                />
                <div>
                  <h6 class="!mb-0">{{ item.product.name }}</h6>
                  <h6 class="!mt-0 !pt-0 font-semibold">
                    ${{ item.product.price }}
                  </h6>
                  <div class="flex gap-1">
                    <v-btn
                      variant="flat"
                      color="primary"
                      size="small"
                      class="!normal-case"
                      >Cant:<b>{{ item.cuantity }}</b></v-btn
                    >
                    <v-btn
                      @click.prevent="
                        useShoppingCart().removeProductInShoppingCart(
                          item.product.id
                        )
                      "
                      variant="text"
                      class="!normal-case"
                      size="small"
                      >Eliminar</v-btn
                    >
                  </div>
                </div>
              </div>
            </NuxtLink>
          </v-list-item>
        </v-list>
      </div>
      <div
        class="pt-3 border-t-2"
        v-if="useShoppingCart().shoppingCartLength != 0"
      >
        <div class="flex justify-end px-3">
          <h6>
            Subtotal: <b>U$S {{ useShoppingCart().shoppingCartPriceTotal }}</b>
          </h6>
        </div>
        <div class="px-3 pb-3 flex justify-between">
          <v-btn
            color="primary"
            @click="useShoppingCart().removeAllProductInShoppingCart()"
            variant="text"
            append-icon="mdi-delete"
            >Quitar Todo</v-btn
          >
          <v-btn
            @click="useModalStore().openModalShop()"
            color="primary"
            append-icon="mdi-cart"
            >Comprar Todo</v-btn
          >
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>
