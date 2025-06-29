export interface CardProps {
  variant?: CardVariant
  size?: CardSize
  radius?: CardRadius
  shadow?: CardShadow
  hoverEffect?: CardHoverEffect
  clickable?: boolean
  disabled?: boolean
  loading?: boolean
  href?: string
  to?: string
  class?: string
  id?: string
}

export interface CardHeaderProps {
  title?: string
  subtitle?: string
  align?: CardHeaderAlign
  avatar?: string
  icon?: string
  class?: string
}

export interface CardBodyProps {
  padding?: CardSize
  class?: string
}

export interface CardActionsProps {
  align?: CardActionsAlign
  padding?: CardSize
  class?: string
}

export interface CardClasses {
  base: string[]
  variant: string[]
  size: string[]
  radius: string[]
  shadow: string[]
  hoverEffect: string[]
  state: string[]
}