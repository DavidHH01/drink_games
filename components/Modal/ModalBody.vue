<template>
  <div :class="bodyClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  scrollable?: boolean
  padding?: ModalSize
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  scrollable: false,
  padding: ModalSize.MEDIUM
})

const bodyClasses = computed(() => {
  const classes: string[] = ['relative']

  // Padding classes
  switch (props.padding) {
    case ModalSize.SMALL:
      classes.push('p-4')
      break
    case ModalSize.MEDIUM:
      classes.push('p-6')
      break
    case ModalSize.LARGE:
      classes.push('p-8')
      break
    case ModalSize.EXTRA_LARGE:
      classes.push('p-10')
      break
    case ModalSize.FULL:
      classes.push('p-0')
      break
  }

  // Scrollable
  if (props.scrollable) {
    classes.push('overflow-y-auto', 'max-h-96')
  }

  if (props.class) {
    classes.push(props.class)
  }

  return classes
})
</script>