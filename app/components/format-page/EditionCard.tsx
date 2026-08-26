'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import ImagePlaceholder from '../ImagePlaceholder'
import CopyBlock from './CopyBlock'
import type { Edition } from './types'

// Il prefisso -webkit- non è cosmetico: senza, Chromium a volte non
// nasconde davvero la faccia "sul retro" dentro un [transform-style:
// preserve-3d] — resta visibile e, senza un overflow-hidden a
// contenerla, può "sporgere" nella cella sopra o sotto nella griglia.
// Stessa doppia dichiarazione già nel mockup di riferimento (docs/
// reference), non una precauzione aggiunta a caso.
const hiddenBackface: CSSProperties = {
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
}

/** true solo su dispositivi con hover reale e puntatore fine (mouse/
 * trackpad): su touch il primo tap deve girare la scheda, non solo
 * "premere" un hover che lì non esiste — stessa verifica del mockup
 * originale (flipInHover, ora sempre attivo: docs/reference). */
function supportsHoverFlip() {
  return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * Scheda di un'edizione passata nell'Archivio — gira mostrando il
 * retro narrativo. Fronte: badge anno + foto (3:4) + titolo + location +
 * repliche/giocatori. Badge in ceralacca (seal-600) su cornice inchiostro
 * — stessa ricetta del badge di genere in FormatSection.tsx, non il
 * brass-su-inchiostro del mockup originale: a 12px su fondo scuro il brass
 * violerebbe "mai come testo sotto 18px su inchiostro"
 * (docs/design-system.md#colori).
 *
 * Il flip stesso resta quello del mockup: hover lo apre/chiude sui
 * dispositivi con puntatore fine, il click/tap lo alterna sempre (anche
 * da tastiera, invio o spazio) — così resta utilizzabile su touch e con
 * accessibilità da tastiera, non solo passandoci sopra col mouse.
 */
export default function EditionCard({ edition }: { edition: Edition }) {
  const [flipped, setFlipped] = useState(false)

  if (!edition.back) {
    return <CardFront edition={edition} />
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${edition.year} — ${edition.title}: gira la scheda`}
      // h-[480px] fissa, non min-h: il rotatore sotto usa h-full, e una
      // percentuale si risolve solo contro un'altezza "definita" — con
      // min-height soltanto il calcolo fallisce, il rotatore collassa a
      // 0 e il retro (assoluto dentro di lui, con overflow-y-auto) si
      // richiude sulla sola prima riga di contenuto.
      className="h-[480px] cursor-pointer overflow-hidden outline-offset-4 [perspective:1600px]"
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((f) => !f)
        }
      }}
      onMouseEnter={() => supportsHoverFlip() && setFlipped(true)}
      onMouseLeave={() => supportsHoverFlip() && setFlipped(false)}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        <div className="absolute inset-0" style={hiddenBackface}>
          <CardFront edition={edition} />
        </div>
        <div
          className="absolute inset-0 overflow-y-auto border border-brass-500/35 bg-paper-lines bg-paper-100 p-5 text-ink-900"
          style={{ ...hiddenBackface, transform: 'rotateY(180deg)' }}
        >
          <div className="font-almanac text-[12px] tracking-label text-seal-600">{edition.back.badge}</div>
          <h3 className="mt-2.5 font-display text-[clamp(1.3125rem,1.1rem+0.6vw,1.6875rem)] leading-[1.1] text-ink-900">
            {edition.title}
          </h3>
          <CopyBlock lines={edition.back.lines} bg="light" className="mt-3.5 gap-3" />
          <div className="mt-4 border-t border-ink-900/25 pt-2.5 font-almanac text-[11px] tracking-label text-paper-400">
            {edition.replicas} repliche · {edition.players} giocatori
          </div>
        </div>
      </div>
    </div>
  )
}

function CardFront({ edition }: { edition: Edition }) {
  return (
    <div className="flex h-full flex-col border border-brass-500/35 bg-ink-800">
      <div className="relative border-b border-brass-500/35 p-2">
        <ImagePlaceholder
          label={edition.photo?.label ?? `Edizione ${edition.year} — ${edition.title}`}
          src={edition.photo?.src}
          aspect="3 / 4"
          sizes="(min-width: 1024px) 22vw, 45vw"
          imageClassName="filter-vintage"
        />
        <div className="absolute top-2 left-2 bg-seal-600 px-3 py-1.5 font-almanac text-[11px] tracking-label text-paper-100">
          {edition.year}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-[clamp(1.25rem,1rem+0.8vw,1.625rem)] leading-[1.1] text-paper-100">
          {edition.title}
        </h3>
        <div className="mt-2 font-almanac text-[12px] tracking-label text-paper-100/60">{edition.location}</div>
        <div className="mt-auto flex gap-4 border-t border-brass-500/35 pt-3">
          <div>
            <div className="font-display text-2xl leading-none text-paper-100">{edition.replicas}</div>
            <div className="mt-1 font-almanac text-[11px] tracking-label text-brass-500">Repliche</div>
          </div>
          <div>
            <div className="font-display text-2xl leading-none text-paper-100">{edition.players}</div>
            <div className="mt-1 font-almanac text-[11px] tracking-label text-brass-500">Giocatori</div>
          </div>
        </div>
      </div>
    </div>
  )
}
