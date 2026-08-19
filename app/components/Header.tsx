'use client'

import { useState } from 'react'
import Button from './Button'

const NAV_LINKS = [
  { href: '#format', label: 'Format' },
  { href: '#eventi', label: 'Eventi' },
  { href: '#team-building', label: 'Team building' },
  { href: '#chi-siamo', label: 'Chi siamo' },
]

/**
 * Nav fissa. Logo: per ora una targa-segnaposto testuale in stile
 * timbro/almanacco — il logo vero (con cornice strappata) arriva più avanti
 * e prenderà questo stesso spazio, docs/design-system.md#logo.
 */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-paper-100/15 bg-ink-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3 sm:gap-6 sm:px-10">
        <a
          href="#top"
          aria-label="Lost Room — torna all'inizio"
          className="shrink-0 border border-brass-500/60 px-2.5 py-1.5"
        >
          <span className="block font-almanac text-[11px] tracking-kicker text-paper-100">
            LOST ROOM
          </span>
        </a>

        <nav className="ml-4 hidden items-center gap-7 lg:flex" aria-label="Sezioni principali">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-1 font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass-500 transition-transform duration-200 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden lg:block">
          <Button href="#contatti" variant="secondary" tone="ink">
            Contatti
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center border border-paper-100/40 text-paper-100 lg:hidden"
        >
          <span className="sr-only">{open ? 'Chiudi il menu' : 'Apri il menu'}</span>
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
            <path d="M0 1H18" stroke="currentColor" strokeWidth="1.5" />
            <path
              d="M0 6.5H18"
              stroke="currentColor"
              strokeWidth="1.5"
              className={`transition-opacity duration-150 ${open ? 'opacity-0' : 'opacity-100'}`}
            />
            <path d="M0 12H18" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Sezioni principali"
        className={`grid border-t border-paper-100/15 bg-ink-900 transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none lg:hidden ${
          open ? 'grid-rows-[1fr] border-opacity-100' : 'grid-rows-[0fr] border-opacity-0'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center font-almanac text-sm tracking-label text-paper-100/85"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="#contatti"
                variant="secondary"
                tone="ink"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Contatti
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
