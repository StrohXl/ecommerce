<script setup>
defineProps(["title"]);
</script>
<template>
  <v-tooltip :text="'sesdf'">
    <template v-slot:activator="{ props }">
      <slot v-bind="props" />
    </template>
  </v-tooltip>
</template>
