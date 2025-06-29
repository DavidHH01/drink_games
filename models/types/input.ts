export interface InputProps {
  modelValue?: string | number
  type?: InputType
  variant?: InputVariant
  size?: InputSize
  radius?: InputRadius
  placeholder?: string
  label?: string
  hint?: string
  error?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  clearable?: boolean
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  step?: number
  autocomplete?: string
  autofocus?: boolean
  class?: string
  id?: string
}

export interface InputClasses {
  container: string[]
  label: string[]
  inputWrapper: string[]
  input: string[]
  icon: string[]
  hint: string[]
  error: string[]
}