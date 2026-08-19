import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary'
/** Il fondo su cui il bottone appoggia: definisce come si inverte in hover. */
type ButtonTone = 'ink' | 'paper'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonVariant
  tone?: ButtonTone
  children: ReactNode
}

/**
 * CTA del sito. Una sola primary (ceralacca, shadow-stamp) per schermata:
 * è l'accento d'azione, mai decorativo (docs/design-system.md). Le altre
 * CTA sulla stessa vista devono restare secondary (solo filetto).
 */
const base =
  'inline-flex min-h-12 items-center justify-center gap-2 border px-7 py-3 text-center font-almanac text-sm tracking-label transition-colors duration-150 ease-out'

const variants: Record<ButtonVariant, Record<ButtonTone, string>> = {
  primary: {
    ink: 'border-seal-600 bg-seal-600 text-paper-100 shadow-stamp active:translate-x-[2px] active:translate-y-[2px] active:shadow-stamp-in motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0',
    paper:
      'border-seal-600 bg-seal-600 text-paper-100 shadow-stamp active:translate-x-[2px] active:translate-y-[2px] active:shadow-stamp-in motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0',
  },
  secondary: {
    ink: 'border-paper-100 text-paper-100 hover:bg-paper-100 hover:text-ink-900',
    paper: 'border-ink-900 text-ink-900 hover:bg-ink-900 hover:text-paper-100',
  },
}

export default function Button({
  href,
  variant = 'primary',
  tone = 'ink',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <a href={href} className={`${base} ${variants[variant][tone]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
