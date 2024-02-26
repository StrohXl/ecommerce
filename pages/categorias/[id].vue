<script setup>
useHead({
    title: useRuntimeConfig().public.title + " - " + useRoute().params.id,
    meta: [
    { name: 'description', content: 'Ofertas' }
    ]
})
</script>
<template>
   {{ useRoute().params.id }}
</template>