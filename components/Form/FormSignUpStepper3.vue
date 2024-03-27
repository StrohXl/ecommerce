<script setup lang="ts">
const codigo = ref("");
const codig = [(v: string) => !!v, (v: string) => v.length == 5];
const verifyCodigo = () => {

};
</script>

<template>
  <v-text-field
    class="w-20 mx-auto !text-center verify-codigo"
    type="codigo"
    :maxlength="5"
    @input="codigo.length == 5 && verifyCodigo()"
    variant="underlined"
    color="primary"
    :rules="codig"
    v-model="codigo"
    required
  ></v-text-field>
</template>
<style>
.verify-codigo input {
  text-align: center !important;
  letter-spacing: 5px;
}
</style>
