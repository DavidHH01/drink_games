import { computed } from 'vue'

export const useCard = (props: any) => {
  const cardClasses = computed(() => {
    const baseClasses: string[] = [
      'relative',
      'overflow-hidden',
      'transition-all',
      'duration-300',
      'ease-out'
    ]

    const variantClasses: string[] = []
    const sizeClasses: string[] = []
    const radiusClasses: string[] = []
    const shadowClasses: string[] = []
    const hoverEffectClasses: string[] = []
    const stateClasses: string[] = []

    // Variant classes
    switch (props.variant) {
      case CardVariant.DEFAULT:
        variantClasses.push(
          'bg-secondary',
          'border',
          'border-default'
        )
        break
      case CardVariant.ELEVATED:
        variantClasses.push(
          'bg-secondary',
          'shadow-lg'
        )
        break
      case CardVariant.OUTLINED:
        variantClasses.push(
          'bg-transparent',
          'border-2',
          'border-accent'
        )
        break
      case CardVariant.FILLED:
        variantClasses.push(
          'bg-tertiary',
          'border-0'
        )
        break
      case CardVariant.GRADIENT:
        variantClasses.push(
          'bg-gradient-to-br',
          'from-accent/20',
          'to-accent-2/20',
          'border',
          'border-accent/30'
        )
        break
      case CardVariant.GLASS:
        variantClasses.push(
          'bg-secondary/30',
          'backdrop-blur-md',
          'border',
          'border-white/20'
        )
        break
      case CardVariant.NEON:
        variantClasses.push(
          'bg-secondary',
          'border-2',
          'border-accent',
          'shadow-lg',
          'shadow-accent/25'
        )
        break
      case CardVariant.GAMING:
        variantClasses.push(
          'bg-gradient-to-br',
          'from-secondary',
          'to-tertiary',
          'border',
          'border-accent/50',
          'relative'
        )
        break
    }

    // Size classes
    switch (props.size) {
      case CardSize.SMALL:
        sizeClasses.push('max-w-sm')
        break
      case CardSize.MEDIUM:
        sizeClasses.push('max-w-md')
        break
      case CardSize.LARGE:
        sizeClasses.push('max-w-lg')
        break
      case CardSize.FULL:
        sizeClasses.push('w-full')
        break
    }

    // Radius classes
    switch (props.radius) {
      case CardRadius.NONE:
        radiusClasses.push('rounded-none')
        break
      case CardRadius.SMALL:
        radiusClasses.push('rounded-sm')
        break
      case CardRadius.MEDIUM:
        radiusClasses.push('rounded-md')
        break
      case CardRadius.LARGE:
        radiusClasses.push('rounded-lg')
        break
      case CardRadius.EXTRA_LARGE:
        radiusClasses.push('rounded-xl')
        break
      case CardRadius.FULL:
        radiusClasses.push('rounded-2xl')
        break
    }

    // Shadow classes
    switch (props.shadow) {
      case CardShadow.NONE:
        shadowClasses.push('shadow-none')
        break
      case CardShadow.SMALL:
        shadowClasses.push('shadow-sm')
        break
      case CardShadow.MEDIUM:
        shadowClasses.push('shadow-md')
        break
      case CardShadow.LARGE:
        shadowClasses.push('shadow-lg')
        break
      case CardShadow.EXTRA_LARGE:
        shadowClasses.push('shadow-xl')
        break
      case CardShadow.GLOW:
        shadowClasses.push('shadow-accent')
        break
    }

    // Hover effect classes
    switch (props.hoverEffect) {
      case CardHoverEffect.LIFT:
        hoverEffectClasses.push('hover:-translate-y-2', 'hover:shadow-xl')
        break
      case CardHoverEffect.SCALE:
        hoverEffectClasses.push('hover:scale-105')
        break
      case CardHoverEffect.TILT:
        hoverEffectClasses.push('hover:rotate-1')
        break
      case CardHoverEffect.GLOW:
        hoverEffectClasses.push('hover:shadow-accent', 'hover:shadow-lg')
        break
      case CardHoverEffect.PULSE:
        hoverEffectClasses.push('hover:animate-pulse')
        break
    }

    // State classes
    if (props.clickable) {
      stateClasses.push('cursor-pointer')
    }

    if (props.disabled) {
      stateClasses.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none')
    }

    if (props.loading) {
      stateClasses.push('animate-pulse')
    }

    return {
      base: baseClasses,
      variant: variantClasses,
      size: sizeClasses,
      radius: radiusClasses,
      shadow: shadowClasses,
      hoverEffect: hoverEffectClasses,
      state: stateClasses
    }
  })

  const allClasses = computed(() => [
    ...cardClasses.value.base,
    ...cardClasses.value.variant,
    ...cardClasses.value.size,
    ...cardClasses.value.radius,
    ...cardClasses.value.shadow,
    ...cardClasses.value.hoverEffect,
    ...cardClasses.value.state
  ])

  return {
    cardClasses,
    allClasses
  }
}