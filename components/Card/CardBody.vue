<template>
  <div :class="bodyClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  padding?: CardSize
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  padding: CardSize.MEDIUM
})

const bodyClasses = computed(() => {
  const classes: string[] = []

  // Padding classes
  switch (props.padding) {
    case CardSize.SMALL:
      classes.push('p-4')
      break
    case CardSize.MEDIUM:
      classes.push('p-6')
      break
    case CardSize.LARGE:
      classes.push('p-8')
      break
    case CardSize.FULL:
      classes.push('p-0')
      break
  }

  if (props.class) {
    classes.push(props.class)
  }

  return classes
})
</script>