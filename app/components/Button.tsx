import Image from 'next/image'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
/** Il fondo su cui il bottone appoggia: definisce come si inverte in hover. */
type ButtonTone = 'ink' | 'paper'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: ButtonVariant
  tone?: ButtonTone
  children: ReactNode
}

/**
 * CTA del sito, tre livelli (Lost Room Brand System, V. La voce):
 * - primary: ceralacca piena, ombra sfalsata. Una sola per schermata.
 * - secondary: filetto che si riempie di colore in hover.
 * - tertiary: la mano indica + testo sottolineato, nessun bordo. Un solo
 *   uso della manina per schermata (docs/design-system.md).
 *
 * L'ombra del primary è ink (#14110F) per token — corretta e visibile su
 * carta, esattamente come nel manuale. Su inchiostro un'ombra ink sparisce
 * nello sfondo: lì usiamo un'ombra ottone, stesso effetto "si abbassa al
 * click", solo leggibile nel contesto scuro.
 */
const base =
  'inline-flex min-h-12 items-center justify-center gap-2 text-center font-almanac text-sm tracking-label transition-colors duration-150 ease-out'

const variants: Record<'primary' | 'secondary', Record<ButtonTone, string>> = {
  primary: {
    ink: 'border border-seal-600 bg-seal-600 px-7 py-3 text-paper-100 shadow-[5px_5px_0_var(--color-brass-500)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_var(--color-brass-500)] motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0',
    paper:
      'border border-seal-600 bg-seal-600 px-7 py-3 text-paper-100 shadow-stamp active:translate-x-[2px] active:translate-y-[2px] active:shadow-stamp-in motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0',
  },
  secondary: {
    ink: 'border border-paper-100 px-7 py-3 text-paper-100 hover:bg-paper-100 hover:text-ink-900',
    paper: 'border border-ink-900 px-7 py-3 text-ink-900 hover:bg-ink-900 hover:text-paper-100',
  },
}

// Niente cambio colore in hover: a questa dimensione di testo (14px) il
// brass violerebbe "mai come testo sotto 18px su inchiostro" — l'hover si
// vede sulla sottolineatura (border-current -> più netta) e sull'icona.
const tertiaryText: Record<ButtonTone, string> = {
  ink: 'text-paper-100 opacity-90 hover:opacity-100',
  paper: 'text-ink-900 opacity-90 hover:opacity-100',
}

export default function Button({
  href,
  variant = 'primary',
  tone = 'ink',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  if (variant === 'tertiary') {
    return (
      <Link href={href} className={`${base} ${tertiaryText[tone]} ${className}`} {...rest}>
        <span className="w-4 shrink-0">
          <Image
            src="/ornaments/mano.png"
            alt=""
            width={1211}
            height={449}
            className={`h-auto w-full ${tone === 'ink' ? 'invert' : 'mix-blend-multiply'}`}
          />
        </span>
        <span className="border-b border-current pb-0.5">{children}</span>
      </Link>
    )
  }

  return (
    <Link href={href} className={`${base} ${variants[variant][tone]} ${className}`} {...rest}>
      {children}
    </Link>
  )
}
