<template>
  <div v-if="useClientStore().client == 'true'" class="hidden md:flex gap-0">
    <MenusMenuUser />
  </div>
</template>
