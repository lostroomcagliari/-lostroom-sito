import type { CopyLine } from './types'

interface CopyBlockProps {
  lines: CopyLine[]
  /** Fondo su cui appoggia il testo: governa il colore di base del corpo
   * (paper-100/80 su scuro, ink-700 su chiaro) e il default di "accent"
   * quando la riga non specifica un tono. */
  bg: 'dark' | 'light' | 'velvet'
  className?: string
}

const BODY_COLOR: Record<CopyBlockProps['bg'], string> = {
  dark: 'text-paper-100/80',
  velvet: 'text-paper-100/85',
  light: 'text-ink-700',
}

const DISPLAY_COLOR: Record<CopyBlockProps['bg'], string> = {
  dark: 'text-paper-100',
  velvet: 'text-paper-100',
  light: 'text-ink-900',
}

const ACCENT_COLOR: Record<'brass' | 'seal', string> = {
  brass: 'text-brass-500',
  seal: 'text-seal-600',
}

/** Spezza le "\n" interne in <br/>, senza aprire un nuovo <p>. */
function withBreaks(text: string) {
  return text.split('\n').map((chunk, i, arr) => (
    <span key={i}>
      {chunk}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

/**
 * Renderizza un blocco di paragrafi con le tre enfasi già in uso nel resto
 * del sito: corpo normale, "display" (Bodoni più grande, la frase cardine)
 * e "accent" (corsivo brass/seal, la battuta a effetto) — vedi CopyLine in
 * types.ts. Un solo componente per tutte le colonne di testo del template
 * (bignami, archivio, universo, prossimo posto), invece di riscrivere la
 * stessa mappatura in ogni sezione.
 */
export default function CopyBlock({ lines, bg, className = '' }: CopyBlockProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {lines.map((line, i) => {
        if (line.type === 'display') {
          return (
            <p
              key={i}
              className={`font-display text-[clamp(1.25rem,1rem+0.9vw,1.75rem)] leading-[1.35] ${DISPLAY_COLOR[bg]}`}
            >
              {withBreaks(line.text)}
            </p>
          )
        }
        if (line.type === 'accent') {
          // Sul velluto la battuta resta in paper-300, non brass: è il tono
          // già scelto per le citazioni su fondo velvet altrove (Verticals,
          // OurWay) — il brass ha meno risalto sul verde scuro.
          const accentColor = bg === 'velvet' ? 'text-paper-300' : ACCENT_COLOR[line.tone ?? 'brass']
          return (
            <p key={i} className={`font-body text-[clamp(1.1875rem,1rem+0.6vw,1.5rem)] italic leading-[1.4] ${accentColor}`}>
              {withBreaks(line.text)}
            </p>
          )
        }
        return (
          <p key={i} className={`text-pretty text-body ${BODY_COLOR[bg]}`}>
            {withBreaks(line.text)}
          </p>
        )
      })}
    </div>
  )
}
