import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  //...
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "vue-recaptcha/nuxt",
    "nuxt-icon",
    "nuxt-icons",
    //...
  ],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          href: "/favicon.svg",
        },
      ],
    },
  },
  recaptcha: {
    enterprise: true,
    installPlugin: false,
  },
  runtimeConfig: {
    public: {
      title: process.env.NUXT_TITLE_PAGE,
      colorPrimary: process.env.NUXT_PRIMARY_COLOR,
      urlBackend: process.env.URL_BACKEND_ECOOMERCE,
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
