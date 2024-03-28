<template>
  <div v-if="useClientStore().client == 'true'" class="hidden lg:flex gap-0">
    <MenusMenuUser />
  </div>
</template>
