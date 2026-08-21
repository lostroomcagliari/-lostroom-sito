import Image from 'next/image'
import Button from './Button'
import Reveal from './Reveal'

interface Path {
  icon: string
  iconAlt: string
  title: string
  body: string
  cta: string
  href: string
  variant: 'primary' | 'secondary'
}

const PATHS: Path[] = [
  {
    icon: '/ornaments/mano.png',
    iconAlt: '',
    title: 'Voglio giocare.',
    body: 'Cerchi una delle nostre esperienze, vuoi scoprire le prossime date o hai semplicemente una certa predisposizione a ficcarti nei guai. Possiamo lavorarci.',
    cta: 'Portatemi nei guai',
    href: '#eventi',
    variant: 'primary',
  },
  {
    icon: '/ornaments/luna.png',
    iconAlt: '',
    title: 'Devo organizzare qualcosa.',
    body: 'Un addio al nubilato. Una festa. Un compleanno. Un team building. Un gruppo di persone che non vuoi semplicemente mettere sedute intorno a un tavolo. Ottimo.',
    cta: 'Vediamo cosa possiamo fare',
    href: '#team-building',
    variant: 'secondary',
  },
  {
    icon: '/ornaments/occhio.png',
    iconAlt: '',
    title: "Ho un'idea. O forse un problema.",
    body: 'Un luogo da raccontare. Un pubblico da coinvolgere. Un territorio da far scoprire. Un evento che non vuoi assomigli a tutti gli altri. Anche le frasi che iniziano con "e se facessimo…" sono benvenute.',
    cta: 'Costruiamo qualcosa',
    href: '#contatti',
    variant: 'secondary',
  },
]

/**
 * Una sola CTA ceralacca (il primo percorso): le altre due restano
 * secondarie, come da regola "una sola CTA per schermata". I tre ornamenti
 * (mano/luna/occhio) identificano ciascun percorso, non decorano la
 * sezione — per questo qui i tre convivono, diversamente dal resto del sito.
 */
export default function StartingPoints() {
  return (
    <section
      aria-label="Da dove vuoi cominciare"
      className="bg-paper-lines bg-paper-100 px-5 py-14 text-ink-900 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="flex flex-wrap items-end gap-x-10 gap-y-4 border-b-2 border-ink-900 pb-5">
          <h2 className="max-w-[16ch] text-balance font-display text-[clamp(1.875rem,1.4rem+2.2vw,3.625rem)] leading-none text-ink-900">
            Da dove vuoi cominciare?
          </h2>
          <p className="max-w-[38ch] text-pretty text-base text-ink-700">
            Potresti essere qui per motivi molto diversi. Va bene. Succede spesso.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-12">
          {PATHS.map((path, i) => (
            <Reveal
              key={path.title}
              delayMs={i * 120}
              className={`border-t border-ink-900/30 pt-6 ${i === 1 ? 'sm:mt-8' : i === 2 ? 'sm:mt-16' : ''}`}
            >
              {/* Riquadro fisso: le tre incisioni hanno proporzioni native
                  diverse (la mano è molto più larga dell'occhio o della
                  luna) — object-contain le allinea alla stessa dimensione
                  visiva invece che alla stessa altezza soltanto. */}
              <div className="relative h-9 w-12">
                <Image
                  src={path.icon}
                  alt={path.iconAlt}
                  fill
                  className="object-contain object-left-bottom mix-blend-multiply"
                />
              </div>
              <h3 className="mt-4 font-display text-[clamp(1.375rem,1.1rem+0.8vw,1.75rem)] leading-[1.1] text-ink-900">
                {path.title}
              </h3>
              <p className="mt-3 text-pretty text-base text-ink-700">{path.body}</p>
              <Button href={path.href} variant={path.variant} tone="paper" className="mt-5 w-full sm:w-auto">
                {path.cta}
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
