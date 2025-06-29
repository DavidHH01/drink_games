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
    <!-- Loading overlay -->
    <div
      v-if="loading"
      class="absolute inset-0 bg-secondary/50 backdrop-blur-sm flex items-center justify-center z-20"
    >
      <MdiIcon icon="mdiLoading" class="w-8 h-8 animate-spin text-accent" />
    </div>

    <!-- Gaming effect overlay -->
    <div
      v-if="variant === CardVariant.GAMING"
      class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
    />

    <!-- Neon glow effect -->
    <div
      v-if="variant === CardVariant.NEON"
      class="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-inherit"
    />

    <!-- Card content -->
    <div class="relative z-10">
      <slot />
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
  href?: string
  to?: string
  class?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: CardVariant.DEFAULT,
  size: CardSize.MEDIUM,
  radius: CardRadius.LARGE,
  shadow: CardShadow.MEDIUM,
  hoverEffect: CardHoverEffect.NONE,
  clickable: false,
  disabled: false,
  loading: false
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

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading && props.clickable) {
    emit('click', event)
  }
}
</script>