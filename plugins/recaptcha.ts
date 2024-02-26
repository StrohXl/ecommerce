import VueRecaptchaPlugin from "vue-recaptcha";
export default defineNuxtPlugin(({ vueApp }) => {
  const {
    public: { recaptcha },
  } = useRuntimeConfig();
  vueApp.use(VueRecaptchaPlugin, {
    v2SiteKey: "6LcUinopAAAAANUQPVP4t2p8U-jMPMK0III2pkoo",
    v3SiteKey: "6LcUinopAAAAANUQPVP4t2p8U-jMPMK0III2pkoo",
  });
});
