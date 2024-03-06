<script lang="ts" setup>
const router = useRouter()
const loading = ref(false);
const search = ref('');
// Funciones 

function onClick(){
  loading.value = true
  setTimeout(()=>{
    loading.value = false
    router.push(`/search/${search.value}`)
  },2000)
}

</script>

<template>
  <v-text-field
    class="max-w-sm"
    :loading="loading"
    density="compact"
    variant="solo"
    color="primary-darken-1"
    label="Buscar"
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
    v-model="search"
    @click:append-inner="onClick"
  ></v-text-field>
</template>
