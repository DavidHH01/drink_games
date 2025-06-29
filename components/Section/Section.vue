<template>
  <component 
    :is="tag"
    :id="id"
    :class="[...sectionClasses.wrapper, customClass]"
  >
    <div :class="sectionClasses.container">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSection } from '~/composables/useSection'

interface Props {
  size?: SectionSize
  variant?: SectionVariant
  alignment?: SectionAlignment
  spacing?: SectionSpacing
  fullHeight?: boolean
  containerMaxWidth?: boolean
  tag?: string
  id?: string
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: SectionSize.MEDIUM,
  variant: SectionVariant.PRIMARY,
  alignment: SectionAlignment.LEFT,
  spacing: SectionSpacing.MEDIUM,
  fullHeight: false,
  containerMaxWidth: true,
  tag: 'section',
  id: undefined,
  class: ''
})

const { sectionClasses } = useSection(props)

const customClass = computed(() => props.class || '')
</script>
