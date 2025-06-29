import { computed } from 'vue'

export const useSection = (props: SectionProps) => {
  const sectionClasses = computed<SectionClasses>(() => {
    const wrapperClasses: string[] = ['relative', 'w-full']
    const containerClasses: string[] = ['w-full']

    // Variant classes
    switch (props.variant) {
      case SectionVariant.PRIMARY:
        wrapperClasses.push('bg-primary')
        break
      case SectionVariant.SECONDARY:
        wrapperClasses.push('bg-secondary')
        break
      case SectionVariant.TERTIARY:
        wrapperClasses.push('bg-tertiary')
        break
      case SectionVariant.ACCENT:
        wrapperClasses.push('bg-accent')
        break
      case SectionVariant.TRANSPARENT:
        wrapperClasses.push('bg-transparent')
        break
      default:
        wrapperClasses.push('bg-primary')
    }

    // Size classes (padding)
    switch (props.size) {
      case SectionSize.SMALL:
        wrapperClasses.push('py-8', 'md:py-12')
        break
      case SectionSize.MEDIUM:
        wrapperClasses.push('py-12', 'md:py-16')
        break
      case SectionSize.LARGE:
        wrapperClasses.push('py-16', 'md:py-24')
        break
      case SectionSize.EXTRA_LARGE:
        wrapperClasses.push('py-24', 'md:py-32')
        break
      default:
        wrapperClasses.push('py-12', 'md:py-16')
    }

    // Spacing classes (horizontal padding)
    switch (props.spacing) {
      case SectionSpacing.NONE:
        containerClasses.push('px-0')
        break
      case SectionSpacing.SMALL:
        containerClasses.push('px-4')
        break
      case SectionSpacing.MEDIUM:
        containerClasses.push('px-6', 'md:px-8')
        break
      case SectionSpacing.LARGE:
        containerClasses.push('px-8', 'md:px-12')
        break
      case SectionSpacing.EXTRA_LARGE:
        containerClasses.push('px-12', 'md:px-16')
        break
      default:
        containerClasses.push('px-6', 'md:px-8')
    }

    // Alignment classes
    switch (props.alignment) {
      case SectionAlignment.LEFT:
        containerClasses.push('text-left')
        break
      case SectionAlignment.CENTER:
        containerClasses.push('text-center', 'mx-auto')
        break
      case SectionAlignment.RIGHT:
        containerClasses.push('text-right', 'ml-auto')
        break
      default:
        containerClasses.push('text-left')
    }

    // Full height
    if (props.fullHeight) {
      wrapperClasses.push('min-h-screen', 'flex', 'items-center')
    }

    // Container max width
    if (props.containerMaxWidth) {
      containerClasses.push('max-w-7xl', 'mx-auto')
    }

    return {
      wrapper: wrapperClasses,
      container: containerClasses
    }
  })

  return {
    sectionClasses
  }
}