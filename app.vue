<script setup lang="ts">
import servicesPricipal from "./utils/servicesPricipal";
import "./assets/css/navigation.css";
servicesPricipal();

</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
