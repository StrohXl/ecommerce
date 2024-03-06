<template>
  <div class="text-center">
    <v-menu location="bottom center" open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn
          variant="outlined"
          icon="mdi-account"
          v-bind="props"
          class="buttons-actions-icon"
        ></v-btn>
      </template>
      <v-list bg-color="#fafafa" class="mt-3" color="primary">
        <div class="grid justify-center gap-2  py-3 shadow-sm px-14 ">
          <v-avatar class="!border-2 mx-auto" size="60">
            <v-icon class="!text-4xl">mdi-account</v-icon>
          </v-avatar>
          <span>Xavier Mayora</span>
        </div>

        <v-list-item
          class="mt-2"
          prepend-icon="mdi-cog"
          value="sign-in"
          @click="useRouter().push('/sign-in')"
          >Configurar</v-list-item
        >
        <v-list-item
          prepend-icon="mdi-logout"
          value="logout"
          @click="deleteCookie()"
        >
          Desconectar
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
