import { computed } from 'vue'

export const useInput = (props: any) => {
  const inputClasses = computed(() => {
    const containerClasses: string[] = ['relative', 'w-full']
    
    const labelClasses: string[] = [
      'block',
      'text-sm',
      'font-medium',
      'mb-2',
      'transition-colors',
      'duration-200'
    ]
    
    const inputWrapperClasses: string[] = [
      'relative',
      'flex',
      'items-center'
    ]
    
    const inputClasses: string[] = [
      'w-full',
      'border',
      'transition-all',
      'duration-200',
      'ease-out',
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-offset-1',
      'placeholder:text-gray-400'
    ]
    
    const iconClasses: string[] = [
      'absolute',
      'flex',
      'items-center',
      'justify-center',
      'pointer-events-none',
      'text-gray-400'
    ]
    
    const hintClasses: string[] = [
      'mt-1',
      'text-sm',
      'text-gray-500'
    ]
    
    const errorClasses: string[] = [
      'mt-1',
      'text-sm',
      'text-red-600'
    ]

    // Variant classes
    switch (props.variant) {
      case InputVariant.PRIMARY:
        labelClasses.push('text-primary')
        inputClasses.push(
          'border-gray-300',
          'bg-white',
          'text-primary',
          'focus:border-accent',
          'focus:ring-accent/20'
        )
        break
      case InputVariant.SECONDARY:
        labelClasses.push('text-secondary')
        inputClasses.push(
          'border-gray-300',
          'bg-secondary',
          'text-primary',
          'focus:border-accent-2',
          'focus:ring-accent-2/20'
        )
        break
      case InputVariant.SUCCESS:
        labelClasses.push('text-green-700')
        inputClasses.push(
          'border-green-300',
          'bg-green-50',
          'text-green-900',
          'focus:border-green-500',
          'focus:ring-green-500/20'
        )
        break
      case InputVariant.WARNING:
        labelClasses.push('text-yellow-700')
        inputClasses.push(
          'border-yellow-300',
          'bg-yellow-50',
          'text-yellow-900',
          'focus:border-yellow-500',
          'focus:ring-yellow-500/20'
        )
        break
      case InputVariant.DANGER:
        labelClasses.push('text-red-700')
        inputClasses.push(
          'border-red-300',
          'bg-red-50',
          'text-red-900',
          'focus:border-red-500',
          'focus:ring-red-500/20'
        )
        break
      case InputVariant.INFO:
        labelClasses.push('text-blue-700')
        inputClasses.push(
          'border-blue-300',
          'bg-blue-50',
          'text-blue-900',
          'focus:border-blue-500',
          'focus:ring-blue-500/20'
        )
        break
      case InputVariant.ACCENT:
        labelClasses.push('text-pink-700')
        inputClasses.push(
          'border-pink-300',
          'bg-pink-50',
          'text-pink-900',
          'focus:border-pink-500',
          'focus:ring-pink-500/20'
        )
        break
      case InputVariant.GAMING:
        labelClasses.push('text-white')
        inputClasses.push(
          'border-accent/50',
          'bg-gray-900/50',
          'text-white',
          'focus:border-accent',
          'focus:ring-accent/30',
          'backdrop-blur-sm'
        )
        break
      case InputVariant.GLASS:
        labelClasses.push('text-gray-700')
        inputClasses.push(
          'border-white/30',
          'bg-white/20',
          'text-gray-900',
          'backdrop-blur-md',
          'focus:border-white/50',
          'focus:ring-white/20'
        )
        break
      default:
        labelClasses.push('text-gray-700')
        inputClasses.push(
          'border-gray-300',
          'bg-white',
          'text-gray-900',
          'focus:border-blue-500',
          'focus:ring-blue-500/20'
        )
    }

    // Size classes
    switch (props.size) {
      case InputSize.SMALL:
        inputClasses.push('px-3', 'py-2', 'text-sm', 'min-h-[36px]')
        iconClasses.push('w-4', 'h-4')
        break
      case InputSize.MEDIUM:
        inputClasses.push('px-4', 'py-2.5', 'text-base', 'min-h-[44px]')
        iconClasses.push('w-5', 'h-5')
        break
      case InputSize.LARGE:
        inputClasses.push('px-5', 'py-3', 'text-lg', 'min-h-[52px]')
        iconClasses.push('w-6', 'h-6')
        break
      case InputSize.EXTRA_LARGE:
        inputClasses.push('px-6', 'py-4', 'text-xl', 'min-h-[60px]')
        iconClasses.push('w-7', 'h-7')
        break
    }

    // Radius classes
    switch (props.radius) {
      case InputRadius.NONE:
        inputClasses.push('rounded-none')
        break
      case InputRadius.SMALL:
        inputClasses.push('rounded-sm')
        break
      case InputRadius.MEDIUM:
        inputClasses.push('rounded-md')
        break
      case InputRadius.LARGE:
        inputClasses.push('rounded-lg')
        break
      case InputRadius.FULL:
        inputClasses.push('rounded-full')
        break
    }

    // Icon position
    if (props.icon) {
      if (props.iconPosition === 'left') {
        inputClasses.push('pl-10')
        iconClasses.push('left-3')
      } else {
        inputClasses.push('pr-10')
        iconClasses.push('right-3')
      }
    }

    // States
    if (props.disabled) {
      inputClasses.push('opacity-50', 'cursor-not-allowed', 'bg-gray-100')
    }

    if (props.readonly) {
      inputClasses.push('bg-gray-50', 'cursor-default')
    }

    if (props.error) {
      inputClasses.push('border-red-300', 'focus:border-red-500', 'focus:ring-red-500/20')
      labelClasses.push('text-red-700')
    }

    return {
      container: containerClasses,
      label: labelClasses,
      inputWrapper: inputWrapperClasses,
      input: inputClasses,
      icon: iconClasses,
      hint: hintClasses,
      error: errorClasses
    }
  })

  return {
    inputClasses
  }
}