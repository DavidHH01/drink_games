<template>
  <component
    :is="componentTag"
    :href="href"
    :to="to"
    :target="target"
    :type="type"
    :disabled="disabled || loading"
    :class="[allClasses, customClass]"
    :id="id"
    @click="handleClick"
    v-bind="linkAttrs"
  >
    <!-- Loading spinner -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <MdiIcon 
        :icon="'mdiLoading'" 
        :class="['animate-spin', iconSize]"
      />
    </div>

    <!-- Content wrapper -->
    <div
      :class="[
        'flex items-center gap-2',
        loading && 'opacity-0'
      ]"
    >
      <!-- Left icon -->
      <MdiIcon
        v-if="icon && iconPosition === ButtonIconPosition.LEFT"
        :icon="icon"
        :class="[
          iconSize,
          onlyIcon && 'mx-0'
        ]"
      />

      <!-- Button text -->
      <span
        v-if="!onlyIcon"
        class="truncate"
      >
        <slot />
      </span>

      <!-- Right icon -->
      <MdiIcon
        v-if="icon && iconPosition === ButtonIconPosition.RIGHT"
        :icon="icon"
        :class="iconSize"
      />

      <!-- Only icon -->
      <MdiIcon
        v-if="icon && iconPosition === ButtonIconPosition.ONLY"
        :icon="icon"
        :class="iconSize"
      />
    </div>

    <!-- Gaming effect overlay -->
    <div
      v-if="effect === ButtonEffect.NEON"
      class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)"
    />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useButton } from '~/composables/useButton'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  icon?: String
  iconPosition?: ButtonIconPosition
  effect?: ButtonEffect
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  href?: string
  to?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  class?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
  shape: ButtonShape.ROUNDED,
  iconPosition: ButtonIconPosition.LEFT,
  effect: ButtonEffect.NONE,
  disabled: false,
  loading: false,
  fullWidth: false,
  target: '_self',
  type: 'button'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const { allClasses } = useButton(props)

const componentTag = computed(() => {
  if (props.href) return 'a'
  if (props.to) return 'NuxtLink'
  return 'button'
})

const linkAttrs = computed(() => {
  if (props.href) {
    return {
      href: props.href,
      target: props.target
    }
  }
  if (props.to) {
    return {
      to: props.to
    }
  }
  return {}
})

const onlyIcon = computed(() => 
  props.iconPosition === ButtonIconPosition.ONLY
)

const iconSize = computed(() => {
  switch (props.size) {
    case ButtonSize.SMALL:
      return 'w-4 h-4'
    case ButtonSize.MEDIUM:
      return 'w-5 h-5'
    case ButtonSize.LARGE:
      return 'w-6 h-6'
    case ButtonSize.EXTRA_LARGE:
      return 'w-7 h-7'
    default:
      return 'w-5 h-5'
  }
})

const customClass = computed(() => props.class || '')

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<style scoped>
/* Gaming button effects */
.btn-gaming-glow {
  position: relative;
}

.btn-gaming-glow::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: linear-gradient(45deg, var(--color-accent), var(--color-accent-2));
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-gaming-glow:hover::before {
  opacity: 1;
}

/* Neon effect */
.btn-neon {
  text-shadow: 0 0 5px currentColor;
  box-shadow: 
    0 0 5px var(--color-accent),
    0 0 10px var(--color-accent),
    0 0 15px var(--color-accent);
}

.btn-neon:hover {
  box-shadow: 
    0 0 10px var(--color-accent),
    0 0 20px var(--color-accent),
    0 0 30px var(--color-accent);
}
</style>