'use client'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  /** ms di ritardo dopo l'ingresso in viewport — ricrea la Dettatura a
   * cascata (docs/design-system.md#movimento, già usata nell'Hero) ma
   * triggerata dallo scroll invece che al mount, così l'effetto non è
   * sprecato su tutto ciò che sta sotto la prima schermata. */
  delayMs?: number
}

/**
 * Wrapper di scroll-reveal per blocchi di testo (fade + slide-up). Client
 * component isolato apposta: le sezioni che lo usano restano Server
 * Component, questo è l'unico pezzo che ha bisogno di IntersectionObserver.
 *
 * L'osservatore attiva solo la classe "is-visible"; il nascondimento vero e
 * proprio (opacity:0 di partenza) vive in CSS sotto :root.reveal-ready
 * (globals.css + RevealController.tsx). Se il JS non parte o l'utente
 * preferisce animazioni ridotte, quella classe non arriva mai sulla root e
 * il contenuto resta visibile da subito — stessa garanzia già scelta per
 * il Sipario in ImagePlaceholder: mai un trigger che può non scattare.
 */
export default function Reveal({ children, className = '', delayMs = 0 }: RevealProps) {
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
      { threshold: 0.2, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-item ${visible ? 'is-visible' : ''} ${className}`}
      style={delayMs ? ({ transitionDelay: `${delayMs}ms` } as CSSProperties) : undefined}
    >
      {children}
    </div>
  )
}
