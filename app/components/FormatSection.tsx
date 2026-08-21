import Button from './Button'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

type GenreColor = 'velvet' | 'seal' | 'brass'

interface FormatEntry {
  index: string
  name: string
  genre: string
  genreColor: GenreColor
  tag?: string
  lead: string[]
  body: string[]
  closer?: string
  cta: string
  href: string
  photoLabel: string
  photoSrc: string
  imageSide: 'left' | 'right'
}

const FORMATS: FormatEntry[] = [
  {
    index: '01',
    name: 'Adventure Night',
    genre: "Gioco d'azione",
    genreColor: 'velvet',
    lead: [
      'Un luogo vero.',
      'Una storia che potrebbe essere successa.',
      'Squadre in esplorazione e un mistero che, naturalmente, nessuno vi aveva chiesto di risolvere.',
    ],
    body: [
      'Le nostre Adventure Night portano il gioco fuori dalle stanze e dentro luoghi storici, culturali, naturali e urbani.',
      'Il resto dovrete scoprirlo voi.',
    ],
    cta: 'Scopri le Adventure Night',
    href: '#format',
    photoLabel: 'Adventure Night, squadra in esplorazione tra le rovine di notte',
    photoSrc: '/foto/1.png',
    imageSide: 'left',
  },
  {
    index: '02',
    name: 'Cena con Delitto',
    genre: 'Gioco di ruolo dal vivo',
    genreColor: 'seal',
    lead: [
      'Dimenticate il pubblico seduto a tavola mentre qualcuno recita un omicidio davanti a voi.',
      'Qui i personaggi siete voi.',
    ],
    body: [
      "Avrete un'identità, una storia, informazioni che forse sarebbe meglio non condividere e obiettivi personali che potrebbero rendere improvvisamente molto negoziabile il concetto di amicizia.",
    ],
    closer: 'Buona cena.',
    cta: 'Entra nella storia',
    href: '#format',
    photoLabel: 'Scena del delitto Lost Room, vista dall’alto delle scale',
    photoSrc: '/foto/2.png',
    imageSide: 'right',
  },
  {
    index: '03',
    name: 'Mystery Dinner',
    genre: 'Gioco investigativo',
    genreColor: 'brass',
    lead: ['Una cena.', 'Un caso da risolvere.'],
    body: [
      'Squadre investigative, prove, sospetti e una quantità statisticamente significativa di persone convinte di aver capito tutto dopo dodici minuti.',
    ],
    closer: 'Spoiler: generalmente no.',
    cta: 'Inizia a indagare',
    href: '#format',
    photoLabel: 'Prove sul tavolo di una Mystery Dinner Lost Room',
    photoSrc: '/foto/3.png',
    imageSide: 'left',
  },
]

/**
 * Composizione editoriale/asimmetrica, non griglia uniforme: i tre format si
 * alternano immagine-sinistra/immagine-destra e il secondo blocco scende
 * (il "blocco sfalsato" del design system).
 *
 * Il badge sull'immagine codifica il GENERE di gioco, non un numero
 * progressivo: colore diverso per format, con un uso di seal-600 che è
 * un'eccezione consapevole e richiesta alla regola "ceralacca mai
 * decorativa" — qui il colore è informativo (genere), non un'azione.
 */
const GENRE_BADGE: Record<GenreColor, string> = {
  velvet: 'bg-velvet-700 text-paper-100',
  seal: 'bg-seal-600 text-paper-100',
  brass: 'bg-brass-500 text-ink-900',
}
export default function FormatSection() {
  return (
    <section id="format" aria-label="I format Lost Room" className="bg-ink-900 px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="border-b-2 border-paper-100/70 pb-4">
          <h2 className="font-display text-[clamp(1.875rem,1.4rem+2.4vw,3.75rem)] leading-none text-paper-100">
            I format Lost Room
          </h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mt-6 max-w-[60ch] text-pretty text-body text-paper-100/80">
            Alcune cose le abbiamo fatte così tante volte che ormai hanno un nome, delle regole e una loro piccola
            mitologia.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16 sm:gap-20 lg:gap-28">
          {FORMATS.map((format, i) => (
            <article
              key={format.index}
              className={`grid items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-16 ${
                i % 2 === 1 ? 'sm:mt-16' : ''
              }`}
            >
              <div className={format.imageSide === 'right' ? 'sm:order-2' : ''}>
                <div className="relative">
                  <ImagePlaceholder label={format.photoLabel} src={format.photoSrc} aspect="4 / 3" hideCaption />
                  <div
                    className={`absolute bottom-0 left-0 px-3 py-1.5 font-almanac text-[11px] tracking-label ${GENRE_BADGE[format.genreColor]}`}
                  >
                    {format.genre}
                  </div>
                  {format.tag && (
                    <div className="absolute top-0 right-0 border border-brass-500/60 bg-ink-900 px-3 py-1.5 font-almanac text-[11px] tracking-label text-paper-100">
                      {format.tag}
                    </div>
                  )}
                </div>
              </div>

              <Reveal delayMs={120} className={format.imageSide === 'right' ? 'sm:order-1' : ''}>
                <h3 className="font-display text-[clamp(1.75rem,1.3rem+1.6vw,2.875rem)] leading-[1.02] text-paper-100">
                  {format.name}
                </h3>
                <p className="mt-4 text-pretty font-display text-[clamp(1.1875rem,1rem+0.6vw,1.4375rem)] leading-[1.45] text-paper-100">
                  {format.lead.map((line, li) => (
                    <span key={li} className="block">
                      {line}
                    </span>
                  ))}
                </p>
                {format.body.map((p, pi) => (
                  <p key={pi} className="mt-4 max-w-[46ch] text-pretty text-body text-paper-100/75">
                    {p}
                  </p>
                ))}
                {format.closer && (
                  <p className="mt-4 font-body text-[1.25rem] text-brass-500 italic">{format.closer}</p>
                )}
                <Button href={format.href} variant="secondary" tone="ink" className="mt-6">
                  {format.cta}
                </Button>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
