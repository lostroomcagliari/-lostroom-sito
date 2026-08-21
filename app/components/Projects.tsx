import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

interface Project {
  index: string
  aspect: string
  src: string
  label: string
  title: string
  subtitle: string
  description: string
  matted?: boolean
}

const PROJECTS: Project[] = [
  {
    index: '01',
    aspect: '3 / 4',
    src: '/foto/progetto1.png',
    label: "The Orphanage, interno dell'escape room temporanea",
    title: 'The Orphanage',
    subtitle: 'Escape room temporanea · Cagliari · 2018',
    description:
      "Doveva essere una casa maledetta. Poi abbiamo visto la struttura e abbiamo capito che era chiaramente un orfanotrofio. Ed è diventata l'esperienza escape più memorabile del nostro percorso.",
  },
  {
    index: '02',
    aspect: '1 / 1',
    src: '/foto/progetto2.png',
    label: 'Apocalypse, bunker militare della Seconda guerra mondiale a Pula',
    title: 'Apocalypse',
    subtitle: 'Action game immersivo · Pula · 2025',
    description:
      'Questa volta la scenografia esisteva già: veri bunker militari della Seconda guerra mondiale. Noi abbiamo aggiunto una storia, un gioco e qualche motivo in più per non sentirsi completamente tranquilli.',
    matted: true,
  },
  {
    index: '03',
    aspect: '4 / 5',
    src: '/foto/progetto3.png',
    label: "Topolino e i Giganti di Mont'e Prama, materiali di gioco del festival a Cabras",
    title: "Topolino e i Giganti di Mont'e Prama",
    subtitle: 'Escape game narrativo per famiglie · Cabras · 2026',
    description:
      "Un fumetto amato da tutti, l'archeologia, un festival e famiglie trasformate in squadre di esploratori. Nel 2026 abbiamo reso giocabile una storia ambientata tra i viaggi nel tempo e misteri dei Giganti di Mont'e Prama.",
  },
]

// Il quarto progetto non si aggiunge alla fila delle prime 3 (diventerebbe
// una griglia 4 colonne uniforme, o lascerebbe una scheda orfana a fine
// riga): resta a parte, in formato editoriale orizzontale — stessa anatomia
// scheda (foto/titolo/categoria/descrizione/CTA), ma è lui stesso la
// "rottura di ritmo" rispetto allo staircase 01-02-03, non un quarto tassello
// che ci si infila dentro. Aspect 3/2 (non 16/10): è il rapporto nativo
// della foto fornita, per non ritagliarla inutilmente.
const FEATURED_PROJECT: Project = {
  index: '04',
  aspect: '3 / 2',
  src: '/foto/progetto4.jpg',
  label: "Black Lotus, LARP a Palazzo Doglio",
  title: 'Black Lotus',
  subtitle: 'Live action role play · Cagliari · 2025',
  description:
    "Un LARP di 16 ore dentro un hotel di lusso, tra identità, segreti e alleanze poco raccomandabili. Per una sera, una notte e una mattina, Palazzo Doglio è diventato il teatro immersivo di giochi di potere e delitti irrisolti da 30 anni.",
}

/**
 * Doppia cornice brass — stesso linguaggio dei ritratti in AboutUs.tsx:
 * bordo esterno (con margine) + bordo interno via ImagePlaceholder
 * `framed`, non un trattamento nuovo. Estratto qui perché usato 2 volte
 * (staircase + Progetto 04) e per non farli divergere in futuro.
 * Niente più badge "Progetto 0X": categoria/luogo/anno sono già nel
 * sottotitolo di ogni scheda, il badge era ridondante (era solo un
 * overlay assoluto, non strutturale — rimosso senza altri aggiustamenti).
 */
function ProjectPhoto({ project }: { project: Project }) {
  return (
    <div className={`relative border border-brass-500/60 p-2 ${project.matted ? 'bg-paper-200' : ''}`}>
      <ImagePlaceholder
        label={project.label}
        src={project.src}
        aspect={project.aspect}
        framed
        imageClassName="filter-vintage"
      />
    </div>
  )
}

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
          {/* Frasi brevi isolate ("E se facessimo…?", "Da lì...", "Ma con
              metodo.", "Poi arriva il gioco.") come <p> a sé, non fuse con
              le vicine: è un effetto di ritmo voluto, non un refuso di
              formattazione. */}
          <Reveal delayMs={240} className="flex flex-col gap-3">
            <p className="text-pretty text-body text-ink-700">
              In questi anni abbiamo progettato esperienze dentro luoghi culturali e siti archeologici, eventi per
              aziende e istituzioni, giochi territoriali, produzioni immersive, attività per centinaia di
              partecipanti e strani esperimenti che inizialmente esistevano soltanto sotto forma di una frase:
            </p>
            <p className="font-body text-[clamp(1.3125rem,1.1rem+0.6vw,1.6875rem)] text-brass-500 italic">
              &quot;E se facessimo…?&quot;
            </p>
            <p className="text-pretty text-body text-ink-700">Da lì, generalmente, la situazione degenera.</p>
            <p className="text-pretty text-body text-ink-700">Ma con metodo.</p>
            <p className="text-pretty text-body text-ink-700">
              Negli anni abbiamo imparato che le idee migliori non nascono ignorando regole e vincoli, ma trovando il
              modo di giocarci insieme: rispettando spazi, persone, sicurezza, tempi, autorizzazioni e limiti di chi
              ci affida un progetto.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Ogni esperienza nasce da qualcosa di diverso: raccontare un luogo o una storia, coinvolgere un
              pubblico, raggiungere un obiettivo, costruire una comunità, a volte persino risolvere un problema.
            </p>
            <p className="text-pretty text-body text-ink-700">Poi arriva il gioco.</p>
            <p className="text-pretty text-body text-ink-700">
              Se siamo riusciti ad organizzarlo in un sito archeologico, in un museo, in un parco naturalistico, in
              un hotel di lusso, in un bunker, in barca, in spiaggia, per strada o dentro un&apos;azienda
              blindatissima, probabilmente possiamo trovare il modo di farlo ovunque.
            </p>
            <p className="text-pretty text-body text-ink-700">Questi sono alcuni dei posti in cui ci ha portato.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {PROJECTS.map((project, i) => (
            <div key={project.index} className={i === 1 ? 'sm:mt-6' : i === 2 ? 'sm:mt-12' : ''}>
              <ProjectPhoto project={project} />
              <h3 className="mt-4 text-pretty font-display text-[clamp(1.125rem,0.9rem+0.7vw,1.625rem)] leading-[1.15] text-ink-900">
                {project.title}
              </h3>
              <div className="mt-1 font-almanac text-[12px] tracking-label text-paper-400">{project.subtitle}</div>
              <p className="mt-2 text-base text-ink-700">{project.description}</p>
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
          <ProjectPhoto project={FEATURED_PROJECT} />
          <div className="flex flex-col justify-center">
            <h3 className="font-display text-[clamp(1.25rem,1rem+0.6vw,1.625rem)] text-ink-900">
              {FEATURED_PROJECT.title}
            </h3>
            <div className="mt-1 font-almanac text-[12px] tracking-label text-paper-400">
              {FEATURED_PROJECT.subtitle}
            </div>
            <p className="mt-2 max-w-[46ch] text-base text-ink-700">{FEATURED_PROJECT.description}</p>
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
