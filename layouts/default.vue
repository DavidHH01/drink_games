<template>
  <div
    class="min-h-screen bg-gradient-to-br from-primary via-primary-dark to-secondary"
  >
    <!-- Header simple -->
    <header class="relative z-50">
      <div class="max-w-7xl mx-auto flex justify-end items-center p-2">
        <LanguageSelector />
      </div>
    </header>

    <!-- Main Content -->
    <main class="relative z-10">
      <slot />
    </main>

    <!-- Footer simple -->
    <footer
      class="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20"
    >
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div
          class="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Drink Games. All rights reserved.
          </p>
          <div class="flex items-center gap-6 text-sm">
            <button
              @click="showPatchNotes = true"
              class="flex items-center gap-2 cursor-pointer text-gray-400 hover:text-accent transition-colors duration-300 hover:scale-105 transform"
            >
              <MdiIcon icon="mdiNotebook" class="w-4 h-4" />
              <span>{{ $t("patchNotes.button") }}</span>
              <!-- Badge de nueva actualización -->
              <span
                class="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              ></span>
            </button>
            <NuxtLink
              to="/privacy"
              class="text-gray-400 hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </NuxtLink>
            <span class="text-gray-600">|</span>
            <span class="text-gray-400">Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
    <PatchNotesModal :visible="showPatchNotes" @close="closePatchNotes" />
  </div>
</template>

<script setup lang="ts">
// Computed
const currentYear = computed(() => new Date().getFullYear());
const showPatchNotes = ref(false);
// SEO básico
const togglePatchNotes = () => {
  console.log("Toggling patch notes modal"); // Debug
  showPatchNotes.value = true;
};

const closePatchNotes = () => {
  console.log("Closing patch notes modal"); // Debug
  showPatchNotes.value = false;
};
useHead({
  htmlAttrs: {
    lang: "en",
  },
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
});
</script>

<style scoped>
/* Asegurar que el fondo glassmorphism funcione correctamente */
.bg-white\/10 {
  background-color: rgba(255, 255, 255, 0.1);
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
}

.border-white\/20 {
  border-color: rgba(255, 255, 255, 0.2);
}

/* Mejorar la legibilidad en modo oscuro */
.text-gray-200 {
  color: #e5e7eb;
}

.text-gray-300 {
  color: #d1d5db;
}
</style>
