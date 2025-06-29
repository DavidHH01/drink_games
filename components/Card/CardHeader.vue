<template>
  <div :class="headerClasses">
    <!-- Avatar/Icon section -->
    <div v-if="avatar || icon" class="flex-shrink-0">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="title"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div
        v-else-if="icon"
        class="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center"
      >
        <MdiIcon :icon="icon" class="w-5 h-5 text-accent" />
      </div>
    </div>

    <!-- Content section -->
    <div class="flex-1 min-w-0">
      <h3
        v-if="title || $slots.title"
        class="text-lg font-semibold text-primary truncate"
      >
        <slot name="title">{{ title }}</slot>
      </h3>
      <p
        v-if="subtitle || $slots.subtitle"
        class="text-sm text-secondary mt-1 truncate"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </p>
    </div>

    <!-- Actions section -->
    <div v-if="$slots.actions" class="flex-shrink-0">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title?: string
  subtitle?: string
  align?: CardHeaderAlign
  avatar?: string
  icon?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: CardHeaderAlign.LEFT
})

const headerClasses = computed(() => {
  const classes = ['flex items-center gap-3 p-6 pb-0']

  // Alignment classes
  switch (props.align) {
    case CardHeaderAlign.CENTER:
      classes.push('text-center', 'flex-col', 'gap-2')
      break
    case CardHeaderAlign.RIGHT:
      classes.push('text-right', 'flex-row-reverse')
      break
    case CardHeaderAlign.BETWEEN:
      classes.push('justify-between')
      break
  }

  if (props.class) {
    classes.push(props.class)
  }

  return classes
})
</script>