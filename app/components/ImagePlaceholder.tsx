'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface ImagePlaceholderProps {
  /** Cosa mostrerà la foto reale, es. "giocatori al buio, luce sui volti".
   * Quando `src` è presente diventa l'alt text: scrivere una didascalia
   * descrittiva vera (es. "Ritratto di Fausta Laddomada"), non la nota per
   * il segnaposto. */
  label: string
  /** Rapporto d'aspetto CSS, es. "4 / 3". Riserva lo spazio: quando arriva
   * la foto vera il layout non deve spostarsi. Omettilo quando l'altezza è
   * già fissata dal contenitore (es. un banner hero a min-height/vh). */
  aspect?: string
  className?: string
  /** Cornice ottone incassata — per le foto trattate come un'immagine
   * "montata" (es. l'apertura dell'Hero), non per i tagli fotografici
   * a piena bandiera usati altrove. */
  framed?: boolean
  /** Nascondi la didascalia "FOTO — ..." quando un badge del chiamante
   * occupa già l'angolo in basso (es. "Format n. 01"): evita la
   * sovrapposizione di due etichette sulla stessa immagine. Ignorato
   * quando `src` è presente: una foto vera non mostra mai la didascalia
   * segnaposto. */
  hideCaption?: boolean
  /** Percorso della foto reale (public/...). Quando presente sostituisce il
   * riquadro segnaposto con l'immagine vera, mantenendo bordo, vignetta e
   * cornice ottone invariati. */
  src?: string
  /** Attributo `sizes` per next/image: quanto è larga la foto rispetto al
   * viewport, nel breakpoint più stretto in cui compare. Il default è
   * tarato sul caso più comune, una card a due colonne (~45vw su desktop,
   * quasi piena larghezza sotto). Un banner a piena larghezza (Hero, foto
   * di transizione) vuole "100vw"; un riquadro più stretto (i ritratti
   * affiancati di AboutUs, ~22vw) vuole un valore più piccolo — altrimenti
   * l'ottimizzatore serve una variante più piccola/grande del necessario e
   * la foto appare sfocata (o pesa più del dovuto) quando viene stirata. */
  sizes?: string
}

/**
 * Segnaposto fotografico. Applica il Sipario (docs/design-system.md: le
 * immagini si scoprono dall'alto verso il basso, 900ms) quando l'elemento
 * entra in viewport (IntersectionObserver), non più al mount — altrimenti
 * l'effetto è sprecato su tutto ciò che sta sotto la prima schermata.
 *
 * Il nascondimento vero e proprio (clip-path di partenza) vive in CSS sotto
 * :root.reveal-ready (globals.css + RevealController.tsx): se il JS non
 * parte o l'utente preferisce animazioni ridotte, quella classe non arriva
 * mai sulla root e l'immagine resta visibile da subito — mai un trigger
 * che potrebbe non scattare (tab in background, screenshot, reduced
 * motion).
 *
 * L'elemento osservato dall'IntersectionObserver (il div esterno, con
 * "ref") NON è lo stesso a cui viene applicato il clip-path: un elemento
 * clippato a inset(0 0 100% 0) ha un'area visibile nulla, e alcuni browser
 * la trattano come tale anche ai fini dell'intersezione — l'osservatore non
 * rileva mai lo scroll-into-view (serve diventare visibili per essere
 * "visti", ma serve essere "visti" per diventare visibili). Il div interno
 * porta il clip-path, quello esterno resta sempre "pieno" per l'observer.
 */
export default function ImagePlaceholder({
  label,
  aspect,
  className = '',
  framed = false,
  hideCaption = false,
  src,
  sizes = '(min-width: 1024px) 45vw, 90vw',
}: ImagePlaceholderProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden bg-ink-800 ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div className={`reveal-item-image ${visible ? 'is-visible' : ''} absolute inset-0`}>
        {src && <Image src={src} alt={label} fill sizes={sizes} className="object-cover" />}
        <div className="absolute inset-0 border border-paper-100/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgb(169_126_60/0.14),transparent_60%)]" />
        {framed && (
          <div className="pointer-events-none absolute inset-3 border border-brass-500/50 sm:inset-5" />
        )}
        {!hideCaption && !src && (
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-center px-4 py-3 text-center">
            <span className="font-almanac text-[11px] tracking-label text-paper-300/70">FOTO — {label}</span>
          </div>
        )}
      </div>
    </div>
  )
}
