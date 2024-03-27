// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";

export default defineNuxtPlugin((app) => {
  const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: "#fefefe",
      surface: "#FFFFFF",
      white: "#fff",
      primary: "#633fa6",
      secondary: "#fff",
      error: "#ff0000",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "myCustomLightTheme",
      variations: {
        colors: ["primary", "secondary"],
        lighten: 1,
        darken: 2,
      },
      themes: {
        myCustomLightTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
