<template>
  <div :class="footerClasses">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  justify: 'end'
})

const footerClasses = computed(() => {
  const classes = ['flex', 'gap-3', 'p-6', 'border-t', 'border-gray-200']

  // Justify classes
  switch (props.justify) {
    case 'start':
      classes.push('justify-start')
      break
    case 'center':
      classes.push('justify-center')
      break
    case 'end':
      classes.push('justify-end')
      break
    case 'between':
      classes.push('justify-between')
      break
    case 'around':
      classes.push('justify-around')
      break
  }

  if (props.class) {
    classes.push(props.class)
  }

  return classes
})
</script>