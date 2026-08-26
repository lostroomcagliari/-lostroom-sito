import ImagePlaceholder from '../ImagePlaceholder'
import type { Edition } from './types'

/**
 * Scheda di un'edizione passata nell'Archivio: badge anno + foto (3:4) +
 * titolo + location + repliche/giocatori. Badge in ceralacca (seal-600) su
 * cornice inchiostro — stessa ricetta del badge di genere in
 * FormatSection.tsx (l'unico precedente reale nel codebase per un chip
 * colorato sopra una foto), non il brass-su-inchiostro del mockup
 * originale: a 12px su fondo scuro il brass violerebbe "mai come testo
 * sotto 18px su inchiostro" (docs/design-system.md#colori).
 */
export default function EditionCard({ edition }: { edition: Edition }) {
  return (
    <div className="flex flex-col border border-brass-500/35 bg-ink-800">
      <div className="relative border-b border-brass-500/35 p-2">
        <ImagePlaceholder
          label={edition.photo?.label ?? `Edizione ${edition.year} — ${edition.title}`}
          src={edition.photo?.src}
          aspect="3 / 4"
          sizes="(min-width: 1024px) 22vw, 45vw"
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
