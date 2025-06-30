<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  script: [
    {
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7488788676367729",
      async: true,
      crossorigin: "anonymous",
    },
  ],
  meta: [
    { name: 'google-site-verification', content: 'TU_CODIGO_DE_VERIFICACION_AQUI' }
  ]
});
</script>