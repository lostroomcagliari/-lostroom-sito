'use client'

import { useEffect } from 'react'

/**
 * Attiva lo scroll-reveal di tutta la pagina (Reveal.tsx, ImagePlaceholder)
 * aggiungendo "reveal-ready" a <html> — ma solo se il JS carica e l'utente
 * non preferisce animazioni ridotte. Il CSS (globals.css) nasconde i
 * .reveal-item/.reveal-item-image SOLO sotto quella classe: senza di essa
 * (JS fallito, reduced motion) il contenuto resta semplicemente visibile
 * da subito, mai dietro un trigger che può non scattare — stessa garanzia
 * già scelta per il Sipario prima di questa estensione allo scroll.
 *
 * Non renderizza nulla: va montato una sola volta, in app/page.tsx.
 */
export default function RevealController() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.documentElement.classList.add('reveal-ready')
  }, [])

  return null
}
