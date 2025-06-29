<template>
  <div :class="actionsClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  align?: CardActionsAlign
  padding?: CardSize
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: CardActionsAlign.RIGHT,
  padding: CardSize.MEDIUM
})

const actionsClasses = computed(() => {
  const classes = ['flex items-center gap-2']

  // Alignment classes
  switch (props.align) {
    case CardActionsAlign.LEFT:
      classes.push('justify-start')
      break
    case CardActionsAlign.CENTER:
      classes.push('justify-center')
      break
    case CardActionsAlign.RIGHT:
      classes.push('justify-end')
      break
    case CardActionsAlign.BETWEEN:
      classes.push('justify-between')
      break
    case CardActionsAlign.AROUND:
      classes.push('justify-around')
      break
  }

  // Padding classes
  switch (props.padding) {
    case CardSize.SMALL:
      classes.push('p-4', 'pt-0')
      break
    case CardSize.MEDIUM:
      classes.push('p-6', 'pt-0')
      break
    case CardSize.LARGE:
      classes.push('p-8', 'pt-0')
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