<template>
  <div :class="headerClasses">
    <!-- Background gradient -->
    <div
      v-if="gradientHeader"
      class="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent-2/5 to-accent/10 rounded-t-xl"
    />
    
    <div class="relative z-10 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <!-- Icon with enhanced styling -->
        <div 
          v-if="icon" 
          class="relative flex items-center justify-center w-12 h-12 rounded-xl"
          :class="iconContainerClass"
        >
          <!-- Icon glow effect -->
          <div 
            v-if="gradientHeader"
            class="absolute inset-0 bg-gradient-to-br from-accent to-accent-2 rounded-xl blur opacity-30"
          />
          <div 
            class="relative flex items-center justify-center w-full h-full rounded-xl border"
            :class="iconBackgroundClass"
          >
            <MdiIcon :icon="icon" class="w-6 h-6 text-white drop-shadow-lg" />
          </div>
        </div>

        <!-- Title and subtitle -->
        <div class="flex-1">
          <h3 
            v-if="title" 
            class="text-xl font-bold text-gray-900 mb-1"
            :class="{ 'bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent': gradientHeader }"
          >
            {{ title }}
          </h3>
          <p 
            v-if="subtitle" 
            class="text-sm text-gray-600"
            :class="{ 'text-accent/80': gradientHeader }"
          >
            {{ subtitle }}
          </p>
        </div>

        <!-- Default slot for custom content -->
        <slot />
      </div>

      <!-- Actions and close button -->
      <div class="flex items-center gap-2">
        <slot name="actions" />
        
        <button
          v-if="closable"
          @click="$emit('close')"
          class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 hover:scale-105"
        >
          <MdiIcon icon="mdiClose" class="w-4 h-4" />
        </button>
      </div>
    </div>

    <!-- Decorative line -->
    <div 
      v-if="gradientHeader"
      class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  icon?: string
  closable?: boolean
  gradientHeader?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  closable: true,
  gradientHeader: false
})

defineEmits<{
  close: []
}>()

const headerClasses = computed(() => [
  'relative px-6 py-4 border-b border-gray-200 rounded-t-xl',
  {
    'bg-white': !props.gradientHeader,
    'bg-gradient-to-r from-gray-50 to-white': props.gradientHeader
  }
])

const iconContainerClass = computed(() => {
  if (props.gradientHeader) {
    return 'transform hover:scale-105 transition-transform duration-200'
  }
  return ''
})

const iconBackgroundClass = computed(() => {
  if (props.gradientHeader) {
    return 'bg-gradient-to-br from-accent to-accent-2 border-accent/30 shadow-lg'
  }
  return 'bg-gray-100 border-gray-200'
})
</script>