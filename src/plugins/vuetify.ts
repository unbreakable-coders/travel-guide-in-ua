import "vuetify/styles";
import { createVuetify } from "vuetify";

export const vuetify = createVuetify({
  theme: {
    defaultTheme: "inua",
    themes: {
      inua: {
        dark: false,
        colors: {
          primary: "#1f3a5f",
          secondary: "#3a8b5c",
          accent: "#e2b04a",
          background: "#f7f8fa",
          gray: "#bfbfbfff",
          surface: "#ffffff",
        },
      },
    },
  },
  defaults: {
    global: {
      style: {
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      },
    },
  },
});
