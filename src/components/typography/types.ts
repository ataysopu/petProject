export const VARIANTS = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  subtitleA: 'h6',
  subtitleB: 'h6',
  bodyA: 'p',
  bodyB: 'p',
  overline: 'span',
  caption: 'div'
} as const;

export interface TypographyType extends React.HTMLAttributes<HTMLElement> {
  tag?: ComponentType;
  variant?: keyof typeof VARIANTS;
  variantOnMobile?: keyof typeof VARIANTS;
  color?: string;
  children: React.ReactNode;
}

export type Keys = keyof typeof VARIANTS;
export type ComponentType = typeof VARIANTS[Keys] | 'div';