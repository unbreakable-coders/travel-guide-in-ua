import "vuetify/styles";
import { createVuetify } from "vuetify";

export const vuetify = createVuetify({
  theme: {
    defaultTheme: "inua",
    themes: {
      inua: {
        dark: false,
        colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
          background: "var(--color-bg)",
          surface: "var(--color-surface)",
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
