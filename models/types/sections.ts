export interface SectionProps {
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

export interface SectionClasses {
  wrapper: string[]
  container: string[]
}