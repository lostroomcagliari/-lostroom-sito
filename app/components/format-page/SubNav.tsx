'use client'

import { useEffect, useRef, useState } from 'react'

interface SubNavProps {
  /** Nome del format/verticale mostrato come etichetta a sinistra. */
  label: string
  ctaLabel: string
  ctaHref: string
}

/**
 * Sotto-navigazione sticky, "il bignami / l'archivio" — il meccanismo
 * centrale del template (componente riutilizzabile per ogni pagina
 * format/verticale). NON nasconde i due blocchi dietro un tab: Bignami e
 * Archivio restano entrambi sempre nel DOM, uno dopo l'altro nella pagina
 * (docs/design-system.md: "non nascondere mai il blocco essenziale dentro
 * un expand"). Qui "Il bignami"/"L'archivio" sono link di salto che si
 * illuminano in base a quale dei due blocchi sta attraversando la parte
 * alta dello schermo — uno scroll-spy, non un interruttore show/hide.
 */
export default function SubNav({ label, ctaLabel, ctaHref }: SubNavProps) {
  const [inArchivio, setInArchivio] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const archivio = document.getElementById('archivio')
    if (!archivio) return
    const paint = () => setInArchivio(archivio.getBoundingClientRect().top <= 160)
    window.addEventListener('scroll', paint, { passive: true })
    window.addEventListener('resize', paint)
    paint()
    return () => {
      window.removeEventListener('scroll', paint)
      window.removeEventListener('resize', paint)
    }
  }, [])

  return (
    <div
      ref={navRef}
      className="sticky top-[77px] z-40 border-t border-b border-brass-500/35 bg-ink-900/95 backdrop-blur-sm sm:top-[85px]"
    >
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-3 px-5 py-2 sm:gap-6 sm:px-10">
        <span className="hidden font-almanac text-xs tracking-label text-paper-100/50 sm:inline">{label}</span>

        <div className="flex gap-1.5 border border-brass-500/40 p-[3px]">
          <a
            href="#bignami"
            className={`inline-flex min-h-11 items-center px-4 font-almanac text-[13px] tracking-label transition-colors duration-150 ease-out ${
              inArchivio ? 'bg-transparent text-paper-100/70' : 'bg-brass-500 text-paper-100'
            }`}
          >
            Il bignami
          </a>
          <a
            href="#archivio"
            className={`inline-flex min-h-11 items-center px-4 font-almanac text-[13px] tracking-label transition-colors duration-150 ease-out ${
              inArchivio ? 'bg-brass-500 text-paper-100' : 'bg-transparent text-paper-100/70'
            }`}
          >
            L&apos;archivio
          </a>
        </div>

        <a
          href="#faq"
          className="ml-auto inline-flex min-h-11 items-center font-almanac text-xs tracking-label text-paper-100/60 transition-colors duration-150 ease-out hover:text-brass-500"
        >
          FAQ
        </a>

        <a
          href={ctaHref}
          className="inline-flex min-h-11 items-center border border-paper-100 px-4 font-almanac text-xs tracking-label text-paper-100 transition-colors duration-150 ease-out hover:bg-paper-100 hover:text-ink-900"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  )
}
