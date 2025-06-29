import { computed } from 'vue'

export const useButton = (props: any) => {
  const buttonClasses = computed(() => {
    const baseClasses: string[] = [
      'relative',
      'inline-flex',
      'items-center',
      'justify-center',
      'font-medium',
      'text-center',
      'border',
      'cursor-pointer',
      'transition-all',
      'duration-300',
      'ease-out',
      'select-none',
      'overflow-hidden',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-2',
      'active:scale-95',
      'transform-gpu'
    ]

    const variantClasses: string[] = []
    const sizeClasses: string[] = []
    const shapeClasses: string[] = []
    const effectClasses: string[] = []
    const stateClasses: string[] = []

    // Variant classes
    switch (props.variant) {
      case ButtonVariant.PRIMARY:
        variantClasses.push(
          'bg-accent',
          'border-accent',
          'text-white',
          'shadow-accent',
          'hover:bg-accent-hover',
          'hover:border-accent-hover',
          'hover:shadow-lg',
          'focus:ring-accent'
        )
        break
      case ButtonVariant.SECONDARY:
        variantClasses.push(
          'bg-accent-2',
          'border-accent-2',
          'text-white',
          'hover:bg-accent-2-hover',
          'hover:border-accent-2-hover',
          'hover:shadow-md',
          'focus:ring-accent-2'
        )
        break
      case ButtonVariant.ACCENT:
        variantClasses.push(
          'bg-gradient-to-r',
          'from-accent',
          'to-accent-2',
          'border-transparent',
          'text-white',
          'shadow-lg',
          'hover:shadow-xl',
          'hover:scale-105',
          'focus:ring-accent'
        )
        break
      case ButtonVariant.OUTLINE:
        variantClasses.push(
          'bg-transparent',
          'border-accent',
          'text-accent',
          'hover:bg-accent',
          'hover:text-white',
          'hover:shadow-accent',
          'focus:ring-accent'
        )
        break
      case ButtonVariant.GHOST:
        variantClasses.push(
          'bg-transparent',
          'border-transparent',
          'text-accent',
          'hover:bg-accent/10',
          'hover:text-accent-hover',
          'focus:ring-accent'
        )
        break
      case ButtonVariant.DANGER:
        variantClasses.push(
          'bg-danger',
          'border-danger',
          'text-white',
          'hover:bg-red-600',
          'hover:border-red-600',
          'focus:ring-danger'
        )
        break
      case ButtonVariant.SUCCESS:
        variantClasses.push(
          'bg-success',
          'border-success',
          'text-white',
          'hover:bg-green-500',
          'hover:border-green-500',
          'focus:ring-success'
        )
        break
      case ButtonVariant.WARNING:
        variantClasses.push(
          'bg-warn',
          'border-warn',
          'text-gray-900',
          'hover:bg-yellow-400',
          'hover:border-yellow-400',
          'focus:ring-warn'
        )
        break
      case ButtonVariant.INFO:
        variantClasses.push(
          'bg-info',
          'border-info',
          'text-white',
          'hover:bg-blue-500',
          'hover:border-blue-500',
          'focus:ring-info'
        )
        break
    }

    // Size classes
    switch (props.size) {
      case ButtonSize.SMALL:
        sizeClasses.push('px-3', 'py-1.5', 'text-sm', 'min-h-[32px]')
        break
      case ButtonSize.MEDIUM:
        sizeClasses.push('px-4', 'py-2', 'text-base', 'min-h-[40px]')
        break
      case ButtonSize.LARGE:
        sizeClasses.push('px-6', 'py-3', 'text-lg', 'min-h-[48px]')
        break
      case ButtonSize.EXTRA_LARGE:
        sizeClasses.push('px-8', 'py-4', 'text-xl', 'min-h-[56px]')
        break
    }

    // Shape classes
    switch (props.shape) {
      case ButtonShape.ROUNDED:
        shapeClasses.push('rounded-md')
        break
      case ButtonShape.SQUARE:
        shapeClasses.push('rounded-none')
        break
      case ButtonShape.PILL:
        shapeClasses.push('rounded-full')
        break
      case ButtonShape.CIRCLE:
        shapeClasses.push('rounded-full', 'aspect-square', 'p-0')
        break
    }

    // Effect classes
    switch (props.effect) {
      case ButtonEffect.GLOW:
        effectClasses.push('shadow-lg', 'hover:shadow-2xl', 'hover:shadow-accent/50')
        break
      case ButtonEffect.PULSE:
        effectClasses.push('animate-pulse')
        break
      case ButtonEffect.SHAKE:
        effectClasses.push('hover:animate-bounce')
        break
      case ButtonEffect.BOUNCE:
        effectClasses.push('hover:animate-bounce')
        break
      case ButtonEffect.NEON:
        effectClasses.push(
          'shadow-lg',
          'shadow-accent/50',
          'hover:shadow-xl',
          'hover:shadow-accent/75',
          'border-accent',
          'hover:border-accent-hover'
        )
        break
    }

    // State classes
    if (props.disabled) {
      stateClasses.push(
        'opacity-50',
        'cursor-not-allowed',
        'pointer-events-none'
      )
    }

    if (props.loading) {
      stateClasses.push('pointer-events-none')
    }

    if (props.fullWidth) {
      baseClasses.push('w-full')
    }

    return {
      base: baseClasses,
      variant: variantClasses,
      size: sizeClasses,
      shape: shapeClasses,
      effect: effectClasses,
      state: stateClasses
    }
  })

  const allClasses = computed(() => [
    ...buttonClasses.value.base,
    ...buttonClasses.value.variant,
    ...buttonClasses.value.size,
    ...buttonClasses.value.shape,
    ...buttonClasses.value.effect,
    ...buttonClasses.value.state
  ])

  return {
    buttonClasses,
    allClasses
  }
}