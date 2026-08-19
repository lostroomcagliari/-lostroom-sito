interface ImagePlaceholderProps {
  /** Cosa mostrerà la foto reale, es. "giocatori al buio, luce sui volti". */
  label: string
  /** Rapporto d'aspetto CSS, es. "4 / 3". Riserva lo spazio: quando arriva
   * la foto vera il layout non deve spostarsi. Omettilo quando l'altezza è
   * già fissata dal contenitore (es. un banner hero a min-height/vh). */
  aspect?: string
  className?: string
}

/**
 * Segnaposto fotografico. Applica il Sipario (docs/design-system.md: le
 * immagini si scoprono dall'alto verso il basso, 900ms) alla comparsa —
 * senza JavaScript, quindi senza mai nascondere il contenuto dietro un
 * trigger che potrebbe non scattare mai (tab in background, screenshot,
 * reduced motion). Chi disattiva le animazioni vede il riquadro pieno da
 * subito, nessun'attesa.
 */
export default function ImagePlaceholder({ label, aspect, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-ink-800 motion-safe:animate-sipario ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className="absolute inset-0 border border-paper-100/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(169_126_60/0.14),transparent_60%)]" />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center px-4 py-3 text-center">
        <span className="font-almanac text-[11px] tracking-label text-paper-300/70">
          FOTO — {label}
        </span>
      </div>
    </div>
  )
}
