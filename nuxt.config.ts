import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  components: [
    // Auto-import components based only on its name, not path,
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  modules: ["nuxt-mdi"],
  imports: {
    dirs: ["models/**"],
  },
});