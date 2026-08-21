import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

interface Project {
  index: string
  aspect: string
  photoLabel: string
  matted?: boolean
}

// Titolo/categoria/descrizione sono segnaposto letterali (come nel
// riferimento v2): non abbiamo ancora progetti reali da mostrare qui, e
// CLAUDE.md vieta di inventare contenuti — una pagina dedicata arriverà
// per ciascun progetto quando ci sarà una prima scheda reale.
const PROJECTS: Project[] = [
  { index: '01', aspect: '3 / 4', photoLabel: 'progetto 01' },
  { index: '02', aspect: '1 / 1', photoLabel: 'progetto 02', matted: true },
  { index: '03', aspect: '4 / 5', photoLabel: 'progetto 03' },
]

// Il quarto progetto non si aggiunge alla fila delle prime 3 (diventerebbe
// una griglia 4 colonne uniforme, o lascerebbe una scheda orfana a fine
// riga): resta a parte, in formato editoriale orizzontale — stessa anatomia
// scheda (foto/badge/titolo/categoria/descrizione/CTA), ma è lui stesso la
// "rottura di ritmo" rispetto allo staircase 01-02-03, non un quarto tassello
// che ci si infila dentro.
const FEATURED_PROJECT: Project = { index: '04', aspect: '16 / 10', photoLabel: 'progetto 04' }

/**
 * Composizione asimmetrica (non griglia uniforme), coerente con
 * FormatSection: proporzioni e leggero offset verticale diversi per scheda.
 */
export default function Projects() {
  return (
    <section id="progetti" aria-label="Progetti" className="bg-paper-lines bg-paper-100 px-5 py-14 text-ink-900 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink-900 pb-4">
          <h2 className="font-display text-[clamp(1.875rem,1.4rem+2.4vw,3.75rem)] leading-none text-ink-900">
            Progetti
          </h2>
          <span className="font-almanac text-[13px] tracking-label text-paper-400">
            Eventi speciali · istituzionali · pilota
          </span>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10">
          <Reveal delayMs={120}>
            <p className="max-w-[26ch] text-balance font-display text-[clamp(1.3125rem,1rem+1.4vw,1.875rem)] leading-[1.35] text-ink-900">
              E poi ci sono le cose che non avevano ancora un nome.{' '}
              <em className="text-brass-500 italic">Sono probabilmente quelle che ci piacciono di più.</em>
            </p>
          </Reveal>
          <Reveal delayMs={240} className="flex flex-col gap-3">
            <p className="text-pretty text-body text-ink-700">
              In questi anni abbiamo progettato esperienze dentro luoghi culturali e siti archeologici, eventi per
              aziende e istituzioni, giochi territoriali, produzioni immersive, attività per centinaia di
              partecipanti e strani esperimenti che inizialmente esistevano soltanto sotto forma di una frase:
            </p>
            <p className="font-body text-[clamp(1.3125rem,1.1rem+0.6vw,1.6875rem)] text-brass-500 italic">
              &quot;E se facessimo…?&quot;
            </p>
            <p className="text-pretty text-body text-ink-700">
              Da lì, generalmente, la situazione degenera.
              <br />
              Per fortuna.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Ogni progetto parte da qualcosa di diverso: un luogo, una storia, un pubblico, un obiettivo, una
              comunità, a volte persino un problema.
              <br />
              Poi arriva il gioco.
              <br />
              Questi sono alcuni dei posti in cui ci ha portato.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <div key={project.index} className={i === 1 ? 'sm:mt-6' : i === 2 ? 'sm:mt-12' : ''}>
              <div className={`relative ${project.matted ? 'bg-paper-200 p-3' : ''}`}>
                {project.matted && <div className="pointer-events-none absolute inset-0 border border-ink-900/30" />}
                <div className="relative">
                  <ImagePlaceholder label={project.photoLabel} aspect={project.aspect} />
                  <div className="absolute top-0 left-0 bg-ink-900 px-3 py-1.5 font-almanac text-[11px] tracking-label text-paper-100">
                    Progetto {project.index}
                  </div>
                </div>
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.25rem,1rem+0.6vw,1.625rem)] text-ink-900">
                Titolo progetto
              </h3>
              <div className="mt-1 font-almanac text-[12px] tracking-label text-paper-400">
                Categoria · luogo · anno
              </div>
              <p className="mt-2 text-base text-ink-700">Breve descrizione specifica del progetto.</p>
              <a
                href="#progetti"
                className="mt-3 inline-flex items-center gap-2 border-b border-brass-500/50 pb-1 font-almanac text-[13px] tracking-label text-brass-500 transition-colors duration-150 ease-out hover:border-ink-900 hover:text-ink-900"
              >
                Scopri il progetto
              </a>
            </div>
          ))}
        </div>

        {/* Progetto 04: fila a parte, orizzontale — vedi commento su
            FEATURED_PROJECT. border-t la stacca dallo staircase sopra,
            mt-14/16 dà aria sufficiente a schiarire anche l'offset di
            "Progetto 03" (sm:mt-12, il più basso dei tre). */}
        <Reveal delayMs={360} className="mt-14 grid gap-6 border-t border-ink-900/15 pt-12 sm:grid-cols-2 sm:gap-10 lg:mt-16 lg:gap-16">
          <div className="relative">
            <ImagePlaceholder label={FEATURED_PROJECT.photoLabel} aspect={FEATURED_PROJECT.aspect} />
            <div className="absolute top-0 left-0 bg-ink-900 px-3 py-1.5 font-almanac text-[11px] tracking-label text-paper-100">
              Progetto {FEATURED_PROJECT.index}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-[clamp(1.25rem,1rem+0.6vw,1.625rem)] text-ink-900">Titolo progetto</h3>
            <div className="mt-1 font-almanac text-[12px] tracking-label text-paper-400">
              Categoria · luogo · anno
            </div>
            <p className="mt-2 max-w-[46ch] text-base text-ink-700">Breve descrizione specifica del progetto.</p>
            <a
              href="#progetti"
              className="mt-3 inline-flex items-center gap-2 self-start border-b border-brass-500/50 pb-1 font-almanac text-[13px] tracking-label text-brass-500 transition-colors duration-150 ease-out hover:border-ink-900 hover:text-ink-900"
            >
              Scopri il progetto
            </a>
          </div>
        </Reveal>

        <Reveal delayMs={480}>
          <a
            href="#progetti"
            className="mt-10 inline-flex min-h-12 items-center border border-ink-900 px-7 py-3 font-almanac text-sm tracking-label text-ink-900 transition-colors duration-150 ease-out hover:bg-ink-900 hover:text-paper-100"
          >
            Esplora tutti i progetti
          </a>
        </Reveal>
      </div>
    </section>
  )
}
