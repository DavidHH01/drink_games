export interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  shape?: ButtonShape
  icon?: string
  iconPosition?: ButtonIconPosition
  effect?: ButtonEffect
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  href?: string
  to?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  class?: string
  id?: string
}

export interface ButtonClasses {
  base: string[]
  variant: string[]
  size: string[]
  shape: string[]
  effect: string[]
  state: string[]
}