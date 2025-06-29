<template>
  <div :class="headerClasses">
    <!-- Icon and title section -->
    <div class="flex items-center gap-3 min-w-0 flex-1">
      <!-- Icon -->
      <div
        v-if="icon"
        class="flex-shrink-0 w-10 h-10 rounded-lg text-gray-800 bg-current/10 flex items-center justify-center"
      >
        <MdiIcon :icon="icon" class="w-5 h-5" />
      </div>

      <!-- Title and subtitle -->
      <div class="min-w-0 flex-1">
        <h3
          v-if="title || $slots.default"
          class="text-xl font-semibold truncate text-gray-800"
        >
          <slot>{{ title }}</slot>
        </h3>
        <p
          v-if="subtitle"
          class="text-sm text-gray-600 mt-1 truncate"
        >
          {{ subtitle }}
        </p>
      </div>
    </div>

    <!-- Actions section -->
    <div class="flex items-center gap-2 flex-shrink-0">
      <!-- Custom actions -->
      <slot name="actions" />

      <!-- Close button -->
      <button
        v-if="closable"
        @click="$emit('close')"
        class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors duration-200"
      >
        <MdiIcon icon="mdiClose" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  icon?: string
  closable?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  closable: true
})

defineEmits<{
  close: []
}>()

const headerClasses = computed(() => {
  const classes = [
    'flex',
    'items-center',
    'justify-between',
    'p-6',
    'border-b',
    'border-gray-200',
    'bg-white' // Asegurar fondo blanco
  ]

  if (props.class) {
    classes.push(props.class)
  }

  return classes
})
</script>