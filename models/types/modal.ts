export interface ModalProps {
  modelValue?: boolean
  size?: ModalSize
  variant?: ModalVariant
  position?: ModalPosition
  animation?: ModalAnimation
  backdrop?: ModalBackdrop
  title?: string
  subtitle?: string
  icon?: string
  closable?: boolean
  persistent?: boolean
  fullscreen?: boolean
  scrollable?: boolean
  centered?: boolean
  showHeader?: boolean
  showFooter?: boolean
  headerClass?: string
  bodyClass?: string
  footerClass?: string
  class?: string
  id?: string
}

export interface ModalClasses {
  backdrop: string[]
  container: string[]
  modal: string[]
  header: string[]
  body: string[]
  footer: string[]
}

export interface ModalHeaderProps {
  title?: string
  subtitle?: string
  icon?: string
  closable?: boolean
  class?: string
}

export interface ModalBodyProps {
  scrollable?: boolean
  padding?: ModalSize
  class?: string
}

export interface ModalFooterProps {
  justify?: 'start' | 'center' | 'end' | 'between' | 'around'
  class?: string
}