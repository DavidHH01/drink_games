<template>
  <div class="relative" ref="selectorRef">
    <!-- Botón principal -->
    <button
      @click="toggleDropdown"
      class="flex items-center gap-2 cursor-pointer px-3 py-2 bg-white  border border-white/20 rounded-lg text-gray-600 transition-all duration-300"
    >
      <span class="text-lg">{{ currentLocale.flag }}</span>
      <span class="text-sm font-medium">{{ currentLocale.code.toUpperCase() }}</span>
      <MdiIcon 
        :icon="isOpen ? 'mdiChevronUp' : 'mdiChevronDown'" 
        class="w-4 h-4 transition-transform duration-200"
      />
    </button>

    <!-- Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="scale-95 opacity-0 translate-y-2"
      enter-to-class="scale-100 opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="scale-100 opacity-100 translate-y-0"
      leave-to-class="scale-95 opacity-0 translate-y-2"
    >
      <div
        v-if="isOpen"
        class="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50"
      >
        <!-- Opciones de idioma -->
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="changeLanguage(locale.code)"
          class="w-full px-3 cursor-pointer py-2 text-left hover:bg-gray-50 transition-colors flex items-center gap-2"
          :class="{
            'bg-blue-50 text-blue-600': locale.code === currentLocale.code,
            'text-gray-700': locale.code !== currentLocale.code
          }"
        >
          <span class="text-base">{{ locale.flag }}</span>
          <span class="font-medium text-sm">{{ locale.name }}</span>
          <MdiIcon 
            v-if="locale.code === currentLocale.code"
            icon="mdiCheck" 
            class="w-4 h-4 ml-auto" 
          />
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
// Usar el composable i18n de Nuxt
const { locale, locales, setLocale } = useI18n()

// Estado reactivo
const isOpen = ref(false)
const selectorRef = ref<HTMLElement>()

// Computed
const currentLocale = computed(() => {
  return locales.value.find(l => l.code === locale.value) || locales.value[0]
})

const availableLocales = computed(() => {
  return locales.value
})

// Métodos
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const changeLanguage = async (newLocale: string) => {
  if (newLocale !== locale.value) {
    await setLocale(newLocale)
    isOpen.value = false
  }
}

// Cerrar dropdown al hacer clic fuera
const handleClickOutside = (event: Event) => {
  if (selectorRef.value && !selectorRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Asegurar que el dropdown esté por encima de otros elementos */
.z-50 {
  z-index: 50;
}

/* Mejoras para móviles */
@media (max-width: 640px) {
  .w-40 {
    width: 8rem;
  }
}
</style>