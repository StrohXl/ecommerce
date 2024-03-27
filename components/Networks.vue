<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
<template>
    <v-row justify="center">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-0 !text-xl"
        :icon="icon"
        variant="text"
      ></v-btn
    ></v-row>
</template>
