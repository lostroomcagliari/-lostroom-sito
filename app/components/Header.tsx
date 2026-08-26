'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { FORMAT_NAV } from '../lib/formats'

// Href assoluti ("/#…"): questo header vive anche sulle pagine format
// (/format/adventure-night e le prossime), non più solo in Home — un
// hash relativo ("#eventi") lì cercherebbe un id che non esiste sulla
// pagina corrente invece di riportare in Home alla sezione giusta.
const NAV_LINKS = [
  { href: '/#eventi', label: 'Eventi' },
  { href: '/#team-building', label: 'Team building' },
  { href: '/#chi-siamo', label: 'Chi siamo' },
]

/**
 * Nav fissa. Logo: targa vera (cornice strappata su fondo inchiostro),
 * docs/design-system.md#logo — mix-blend-screen fonde la base nera della
 * targa con lo sfondo dell'header, lasciando emergere solo cornice e scritta.
 *
 * "Format" è un dropdown (hover su desktop, sempre espanso nel menu
 * mobile): elenca i tre format Lost Room da app/lib/formats.ts, unica
 * fonte anche per "Gli altri format" a fondo pagina format. I format non
 * ancora costruiti (href null) compaiono comunque — vanno "predisposti fin
 * da ora" — ma come voce non cliccabile con l'etichetta "in arrivo",
 * invece di linkare a una rotta che darebbe 404.
 */
export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-paper-100/15 bg-ink-900/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1440px] items-center gap-4 px-5 py-3 sm:gap-6 sm:px-10">
        <Link
          href="/#top"
          aria-label="Lost Room — torna all'inizio"
          className="block w-[52px] shrink-0 mix-blend-screen sm:w-[60px]"
        >
          <Image src="/brand/logo.png" alt="Lost Room" width={512} height={512} priority className="h-auto w-full" />
        </Link>

        <nav className="ml-4 hidden items-center gap-7 lg:flex" aria-label="Sezioni principali">
          <div className="group relative">
            <Link
              href="/#format"
              className="group relative flex items-center gap-1.5 py-1 font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              Format
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden className="mt-px opacity-70">
                <path d="M1 1 4.5 5 8 1" stroke="currentColor" strokeWidth="1.3" />
              </svg>
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass-500 transition-transform duration-200 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
            </Link>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-opacity duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="w-60 border border-brass-500/40 bg-ink-900 p-1.5 shadow-[5px_5px_0_var(--color-brass-500)]">
                {FORMAT_NAV.map((entry) =>
                  entry.href ? (
                    <Link
                      key={entry.slug}
                      href={entry.href}
                      className="block px-3.5 py-2.5 font-almanac text-[13px] tracking-label text-paper-100/85 transition-colors duration-150 ease-out hover:bg-paper-100/10 hover:text-paper-100"
                    >
                      {entry.name}
                    </Link>
                  ) : (
                    <span
                      key={entry.slug}
                      className="flex items-center justify-between gap-3 px-3.5 py-2.5 font-almanac text-[13px] tracking-label text-paper-100/40"
                    >
                      {entry.name}
                      <span className="text-[10px] tracking-label text-paper-100/30">In arrivo</span>
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brass-500 transition-transform duration-200 ease-out group-hover:scale-x-100 motion-reduce:transition-none" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden lg:block">
          <Button href="/#contatti" variant="secondary" tone="ink">
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
            <li className="pt-1 pb-0.5 font-almanac text-xs tracking-label text-paper-100/45">Format</li>
            {FORMAT_NAV.map((entry) => (
              <li key={entry.slug}>
                {entry.href ? (
                  <Link
                    href={entry.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center pl-3 font-almanac text-sm tracking-label text-paper-100/85"
                  >
                    {entry.name}
                  </Link>
                ) : (
                  <span className="flex min-h-12 items-center justify-between gap-3 pl-3 font-almanac text-sm tracking-label text-paper-100/40">
                    {entry.name}
                    <span className="text-[10px] tracking-label text-paper-100/30">In arrivo</span>
                  </span>
                )}
              </li>
            ))}
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center font-almanac text-sm tracking-label text-paper-100/85"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href="/#contatti"
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
