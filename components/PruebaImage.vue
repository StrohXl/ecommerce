<script setup lang="ts">
const num = ref(0);
const div1 = ref(true);
const div2 = ref(false);
const div3 = ref(false);
const div4 = ref(false);
let timeout: any;
const mouseLeave = () => {
  runInterval();
  div1.value = false;
  div2.value = false;
  div3.value = false;
  div4.value = false;
  if (num.value == 0) {
    div1.value = true;
  }
  if (num.value == 1) {
    div2.value = true;
  }
  if (num.value == 2) {
    div3.value = true;
  }
  if (num.value == 3) {
    div4.value = true;
  }
};
const mouseEnter = (position: number) => {
  clearInterval(timeout);
  div1.value = false;
  div2.value = false;
  div3.value = false;
  div4.value = false;
  if (position == 0) {
    div1.value = true;
  }
  if (position == 1) {
    div2.value = true;
  }
  if (position == 2) {
    div3.value = true;
  }
  if (position == 3) {
    div4.value = true;
  }
};
const runInterval = () => {
  timeout = setInterval(() => {
    num.value++;
    div1.value = false;
    div2.value = false;
    div3.value = false;
    div4.value = false;
    if (num.value == 4) {
      num.value = 0;
    }
    if (num.value == 0) {
      div1.value = true;
    }
    if (num.value == 1) {
      div2.value = true;
    }
    if (num.value == 2) {
      div3.value = true;
    }
    if (num.value == 3) {
      div4.value = true;
    }
  }, 4000);
};
onMounted(() => {
  runInterval();
});
</script>

<template>
  <section class="prueba-imagen max-w-[1400px] mx-auto bg-black h-[500px] mb-20">
    <div
      :class="`relative ${div1 == true ? '!w-[100px]  !opacity-100' : 'hidden'}`"
      @mouseenter="mouseEnter(0)"
      @mouseleave="mouseLeave()"
    >
      <v-btn
        :class="`!absolute z-10 cursor-pointer bottom-5 right-5 opacity-0 ${
          div1 && 'opacity-100'
        }`"
        color="primary-darken-1"
        >Ver Ofertas</v-btn
      >
      <img class="!absolute" src="/laptops-regreso-a-clases-2022.jpg" alt="" />
    </div>

    <div
      :class="`relative ${div2 == true ? '!w-[100%] !opacity-100' : 'hidden'}`"
      @mouseenter="mouseEnter(1)"
      @mouseleave="mouseLeave()"
    >
      <v-btn
        :class="`!absolute z-10 bottom-5 right-5 opacity-0 ${
          div2 && 'opacity-100'
        }`"
        color="primary-darken-1"
        >Ver Ofertas</v-btn
      >
      <img class="!absolute" src="/Comparación-de-consolas.jpg" alt="" />
    </div>
    <div
      :class="`relative ${div3 == true ? '!w-[100%] !opacity-100' : 'hidden'}`"
      @mouseenter="mouseEnter(2)"
      @mouseleave="mouseLeave()"
    >
      <v-btn
        :class="`!absolute z-10 bottom-5 right-5 opacity-0 ${
          div3 && 'opacity-100'
        }`"
        color="primary-darken-1"
        >Ver Ofertas</v-btn
      >
      <img class="!absolute" src="/laptops-regreso-a-clases-2022.jpg" alt="" />
    </div>
    <div
      :class="`relative ${div4 == true ? '!w-[100%] !opacity-100' : 'hidden'}`"
      @mouseenter="mouseEnter(3)"
      @mouseleave="mouseLeave()"
    >
      <v-btn
        :class="`!absolute z-10 bottom-5 right-5 opacity-0 ${
          div4 && 'opacity-100'
        }`"
        color="primary-darken-1"
        >Ver Ofertas</v-btn
      >
      <img
        class="!absolute"
        src="/lista-lanzamientos-moviles-2023.webp"
        alt=""
      />
    </div>
  </section>
</template>
<style>
.prueba-imagen {
  display: flex;
}
.prueba-imagen > div > img {
  object-fit: cover;
  height: 100%;
}
.prueba-imagen > div {
  @apply w-full;
  opacity: 0.6;
  filter: contrast(80%);
  transition: 0.5s;
}
</style>
