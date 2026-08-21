import type { CSSProperties, ReactNode } from 'react'

interface FramedKickerProps {
  children: ReactNode
  /** Sfondo su cui appoggia: governa il colore del testo (la cornice e gli
   * asterischi restano sempre brass-500, filetto/ornamento non ha
   * restrizioni di contrasto). Su inchiostro il testo resta chiaro, non
   * brass: a questa dimensione (11-13px) brass violerebbe "mai come testo
   * sotto 18px su inchiostro" (Brand System, II. Colore). */
  tone?: 'ink' | 'paper'
  className?: string
  style?: CSSProperties
}

/**
 * Cornice doppia con asterischi — l'elemento vintage-stamp del kicker,
 * riutilizzabile ovunque un titolo di sezione ha bisogno dell'occhiello
 * (Hero, Il nostro modo, Chi c'è dietro, Halloween, Cosa sta succedendo).
 * Nessuna larghezza fissa: si adatta al testo, va a capo se serve, non
 * genera overflow su kicker più lunghi.
 */
export default function FramedKicker({ children, tone = 'ink', className = '', style }: FramedKickerProps) {
  const textColor = tone === 'paper' ? 'text-brass-500' : 'text-paper-100'

  return (
    <div className={`inline-block border border-brass-500/70 p-[5px] ${className}`} style={style}>
      <div className="flex items-center gap-2.5 border-[3px] border-double border-brass-500/60 px-4 py-2.5 sm:gap-4 sm:px-6">
        <span aria-hidden className="shrink-0 text-xs text-brass-500">
          ✳
        </span>
        <span className={`font-almanac text-[11px] tracking-[0.16em] sm:text-xs sm:tracking-kicker ${textColor}`}>
          {children}
        </span>
        <span aria-hidden className="shrink-0 text-xs text-brass-500">
          ✳
        </span>
      </div>
    </div>
  )
}
