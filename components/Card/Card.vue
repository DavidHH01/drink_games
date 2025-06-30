<template>
  <component
    :is="componentTag"
    :href="href"
    :to="to"
    :class="[allClasses, customClass]"
    :id="id"
    @click="handleClick"
    v-bind="linkAttrs"
  >
    <!-- Background effects -->
    <div
      v-if="backgroundPattern"
      class="absolute inset-0 opacity-10 pointer-events-none"
      :class="getPatternClass"
    />

    <!-- Gradient overlay -->
    <div
      v-if="gradientOverlay"
      class="absolute inset-0 pointer-events-none"
      :class="gradientOverlay"
    />

    <!-- Animated border for special effects -->
    <div
      v-if="variant === CardVariant.GAMING || animatedBorder"
      class="absolute inset-0 rounded-inherit pointer-events-none"
      :class="animatedBorderClass"
    />

    <!-- Loading overlay -->
    <div
      v-if="loading"
      class="absolute inset-0 bg-secondary/50 backdrop-blur-sm flex items-center justify-center z-20 rounded-inherit"
    >
      <div class="flex flex-col items-center gap-3">
        <MdiIcon icon="mdiLoading" class="w-8 h-8 animate-spin text-accent" />
        <span v-if="loadingText" class="text-sm text-accent font-medium">{{ loadingText }}</span>
      </div>
    </div>

    <!-- Gaming effect overlay -->
    <div
      v-if="variant === CardVariant.GAMING"
      class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-inherit"
    />

    <!-- Neon glow effect -->
    <div
      v-if="variant === CardVariant.NEON"
      class="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-inherit"
    />

    <!-- Glassmorphism overlay -->
    <div
      v-if="glassmorphism"
      class="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none rounded-inherit"
    />

    <!-- Shine effect on hover -->
    <div
      v-if="shineEffect"
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-700 transform -skew-x-12 -translate-x-full hover:translate-x-full pointer-events-none rounded-inherit"
    />

    <!-- Card content -->
    <div class="relative z-10" :class="contentClasses">
      <slot />
    </div>

    <!-- Bottom accent line -->
    <div
      v-if="accentLine"
      class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-inherit"
    />

    <!-- Corner decorations -->
    <div
      v-if="cornerDecorations"
      class="absolute top-2 right-2 w-3 h-3 bg-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
    <div
      v-if="cornerDecorations"
      class="absolute bottom-2 left-2 w-2 h-2 bg-accent-2/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    />

    <!-- Floating particles effect -->
    <div
      v-if="particleEffect"
      class="absolute inset-0 pointer-events-none overflow-hidden rounded-inherit"
    >
      <div
        v-for="i in 5"
        :key="i"
        class="absolute w-1 h-1 bg-accent/20 rounded-full animate-float opacity-0 group-hover:opacity-100"
        :style="getParticleStyle(i)"
      />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCard } from '~/composables/useCard'

interface Props {
  variant?: CardVariant
  size?: CardSize
  radius?: CardRadius
  shadow?: CardShadow
  hoverEffect?: CardHoverEffect
  clickable?: boolean
  disabled?: boolean
  loading?: boolean
  loadingText?: string
  href?: string
  to?: string
  class?: string
  id?: string
  // New aesthetic props
  glassmorphism?: boolean
  shineEffect?: boolean
  accentLine?: boolean
  cornerDecorations?: boolean
  particleEffect?: boolean
  animatedBorder?: boolean
  backgroundPattern?: 'dots' | 'grid' | 'waves' | 'circuit' | null
  gradientOverlay?: string
  contentPadding?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: CardVariant.DEFAULT,
  size: CardSize.MEDIUM,
  radius: CardRadius.LARGE,
  shadow: CardShadow.MEDIUM,
  hoverEffect: CardHoverEffect.NONE,
  clickable: false,
  disabled: false,
  loading: false,
  glassmorphism: false,
  shineEffect: false,
  accentLine: false,
  cornerDecorations: false,
  particleEffect: false,
  animatedBorder: false,
  backgroundPattern: null
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { allClasses } = useCard(props)

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
  return 'div'
})

const linkAttrs = computed(() => {
  if (props.href) {
    return { href: props.href }
  }
  if (props.to) {
    return { to: props.to }
  }
  return {}
})

const customClass = computed(() => props.class || '')

const contentClasses = computed(() => {
  const classes = []
  if (props.contentPadding) {
    classes.push(props.contentPadding)
  }
  return classes.join(' ')
})

const getPatternClass = computed(() => {
  const patterns = {
    dots: 'bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:20px_20px]',
    grid: 'bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]',
    waves: 'bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]',
    circuit: 'bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_50%,transparent_50%),linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] [background-size:10px_10px]'
  }
  return patterns[props.backgroundPattern!] || ''
})

const animatedBorderClass = computed(() => {
  if (props.variant === CardVariant.GAMING || props.animatedBorder) {
    return 'border-2 border-transparent bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-border animate-pulse'
  }
  return ''
})

const getParticleStyle = (index: number) => {
  const positions = [
    { top: '20%', left: '10%', animationDelay: '0s' },
    { top: '60%', left: '80%', animationDelay: '0.5s' },
    { top: '30%', left: '60%', animationDelay: '1s' },
    { top: '80%', left: '20%', animationDelay: '1.5s' },
    { top: '50%', left: '40%', animationDelay: '2s' }
  ]
  return positions[index - 1] || positions[0]
}

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading && props.clickable) {
    emit('click', event)
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.rounded-inherit {
  border-radius: inherit;
}

.bg-clip-border {
  background-clip: border-box;
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

/* Custom scrollbar for card content */
.card-content::-webkit-scrollbar {
  width: 4px;
}

.card-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.card-content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.card-content::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>