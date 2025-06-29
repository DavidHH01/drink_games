import { computed } from 'vue'

export const useModal = (props: any) => {
  const modalClasses = computed(() => {
    const backdropClasses: string[] = [
      'fixed',
      'inset-0',
      'z-50',
      'flex',
      'transition-all',
      'duration-300',
      'ease-out'
    ]

    const containerClasses: string[] = [
      'relative',
      'w-full',
      'flex'
    ]

    const modalClasses: string[] = [
      'relative',
      'bg-white',
      'shadow-xl',
      'transition-all',
      'duration-300',
      'ease-out',
      'transform-gpu'
    ]

    const headerClasses: string[] = [
      'flex',
      'items-center',
      'justify-between',
      'p-6',
      'border-b',
      'border-gray-200'
    ]

    const bodyClasses: string[] = [
      'relative'
    ]

    const footerClasses: string[] = [
      'flex',
      'gap-3',
      'p-6',
      'border-t',
      'border-gray-200'
    ]

    // Backdrop classes
    switch (props.backdrop) {
      case ModalBackdrop.BLUR:
        backdropClasses.push('backdrop-blur-md', 'bg-black/30')
        break
      case ModalBackdrop.DARK:
        backdropClasses.push('bg-black/50')
        break
      case ModalBackdrop.LIGHT:
        backdropClasses.push('bg-white/30')
        break
      case ModalBackdrop.TRANSPARENT:
        backdropClasses.push('bg-transparent')
        break
      case ModalBackdrop.GRADIENT:
        backdropClasses.push('bg-gradient-to-br', 'from-black/20', 'to-accent/10')
        break
      case ModalBackdrop.GAMING:
        backdropClasses.push('backdrop-blur-sm', 'bg-gradient-to-br', 'from-accent/20', 'to-accent-2/20')
        break
      default:
        backdropClasses.push('bg-black/40')
    }

    // Position classes
    switch (props.position) {
      case ModalPosition.CENTER:
        containerClasses.push('items-center', 'justify-center', 'p-4')
        break
      case ModalPosition.TOP:
        containerClasses.push('items-start', 'justify-center', 'pt-16', 'px-4')
        break
      case ModalPosition.BOTTOM:
        containerClasses.push('items-end', 'justify-center', 'pb-4', 'px-4')
        break
      case ModalPosition.LEFT:
        containerClasses.push('items-center', 'justify-start', 'pl-4')
        break
      case ModalPosition.RIGHT:
        containerClasses.push('items-center', 'justify-end', 'pr-4')
        break
    }

    // Size classes
    switch (props.size) {
      case ModalSize.SMALL:
        modalClasses.push('max-w-md', 'w-full')
        break
      case ModalSize.MEDIUM:
        modalClasses.push('max-w-lg', 'w-full')
        break
      case ModalSize.LARGE:
        modalClasses.push('max-w-2xl', 'w-full')
        break
      case ModalSize.EXTRA_LARGE:
        modalClasses.push('max-w-4xl', 'w-full')
        break
      case ModalSize.FULL:
        modalClasses.push('w-full', 'h-full', 'm-0')
        break
    }

    // Variant classes
    switch (props.variant) {
      case ModalVariant.SUCCESS:
        modalClasses.push('border-l-4', 'border-success')
        headerClasses.push('bg-success/10', 'text-success')
        break
      case ModalVariant.WARNING:
        modalClasses.push('border-l-4', 'border-warn')
        headerClasses.push('bg-warn/10', 'text-warn')
        break
      case ModalVariant.DANGER:
        modalClasses.push('border-l-4', 'border-danger')
        headerClasses.push('bg-danger/10', 'text-danger')
        break
      case ModalVariant.INFO:
        modalClasses.push('border-l-4', 'border-info')
        headerClasses.push('bg-info/10', 'text-info')
        break
      case ModalVariant.ACCENT:
        modalClasses.push('border-l-4', 'border-accent')
        headerClasses.push('bg-accent/10', 'text-accent')
        break
      case ModalVariant.GAMING:
        modalClasses.push(
          'bg-gradient-to-br',
          'from-secondary',
          'to-tertiary',
          'border',
          'border-accent/30',
          'shadow-accent/20'
        )
        headerClasses.push('bg-accent/20', 'text-primary', 'border-accent/30')
        break
      case ModalVariant.GLASS:
        modalClasses.push(
          'bg-white/90',
          'backdrop-blur-lg',
          'border',
          'border-white/20'
        )
        break
      case ModalVariant.NEON:
        modalClasses.push(
          'bg-secondary',
          'border-2',
          'border-accent',
          'shadow-lg',
          'shadow-accent/25'
        )
        headerClasses.push('bg-accent/10', 'text-accent', 'border-accent/30')
        break
    }

    // Rounded corners (except for full size)
    if (props.size !== ModalSize.FULL) {
      modalClasses.push('rounded-xl')
    }

    // Scrollable body
    if (props.scrollable) {
      bodyClasses.push('overflow-y-auto', 'max-h-96')
    }

    return {
      backdrop: backdropClasses,
      container: containerClasses,
      modal: modalClasses,
      header: headerClasses,
      body: bodyClasses,
      footer: footerClasses
    }
  })

  return {
    modalClasses
  }
}