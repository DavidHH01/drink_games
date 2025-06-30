<template>
  <div :class="footerClasses">
    <!-- Background gradient -->
    <div
      v-if="gradientFooter"
      class="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent-2/3 to-accent/5 rounded-b-xl"
    />
    
    <!-- Decorative line -->
    <div 
      v-if="gradientFooter"
      class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
    />
    
    <div class="relative z-10 flex items-center justify-end gap-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  class?: string
  gradientFooter?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  justify: 'end',
  gradientFooter: false
})

const footerClasses = computed(() => [
  'relative px-6 py-4 border-t border-gray-200 rounded-b-xl',
  {
    'bg-white': !props.gradientFooter,
    'bg-gradient-to-r from-gray-50 to-white': props.gradientFooter
  }
])
</script>