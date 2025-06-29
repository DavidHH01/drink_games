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
});
</script>
