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
  modules: ["nuxt-mdi", "@nuxtjs/sitemap", "@nuxtjs/i18n"],
  imports: {
    dirs: ["models/**"],
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        flag: "🇺🇸",
      },
      {
        code: "es",
        iso: "es-ES",
        name: "Español",
        file: "es.json",
        flag: "🇪🇸",
      },
    ],
    defaultLocale: "en",
    langDir: "locales/",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },
  app: {
    head: {
      title: "Drink Games - Best Party Drinking Games Online",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Play the best drinking games online! Pyramid challenges, System rules, and more party games. Perfect for groups of friends. Play responsibly!",
        },
        {
          name: "keywords",
          content:
            "drinking games, party games, pyramid game, system game, online games, group games, party activities, drinking challenges",
        },
        { name: "author", content: "Drink Games" },
        {
          property: "og:title",
          content: "Drink Games - Best Party Drinking Games Online",
        },
        {
          property: "og:description",
          content:
            "Play the best drinking games online! Pyramid challenges, System rules, and more party games.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://drink-games.com" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Drink Games - Best Party Drinking Games Online",
        },
        {
          name: "twitter:description",
          content:
            "Play the best drinking games online! Perfect for parties and groups.",
        },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
      ],
      link: [
        { rel: "canonical", href: "https://drink-games.com" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Drink Games",
            description: "Online drinking games for parties and groups",
            url: "https://drink-games.com",
            applicationCategory: "Game",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        },
      ],
    },
  },
  nitro: {
    prerender: {
      routes: ["/", "/piramide", "/sistema", "/rules", "/about"],
    },
  },
  sitemap: {
    hostname: "https://drink-games.com",
    gzip: true,
    routes: [
      "/",
      "/piramide",
      "/sistema",
      "/rules",
      "/about",
      "/privacy",
      "/terms",
    ],
  },
});
