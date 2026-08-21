import Button from './Button'
import FramedKicker from './FramedKicker'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

interface UpcomingEvent {
  title: string
  dateLocation: string
  teaser: string
  href: string
}

interface NextEventsProps {
  /** Quando non c'è un evento reale in programma (il caso di default,
   * oggi), mostriamo la raccolta contatti invece di un calendario vuoto —
   * vedi CLAUDE.md sul funnel e la nota su "niente calendario tradizionale". */
  event?: UpcomingEvent
}

/**
 * "Cosa sta succedendo" — due stati alternativi, mai contemporanei:
 * un evento reale in evidenza, oppure l'invito a lasciare un contatto.
 * Il form qui sotto è solo di presentazione: l'submit va collegato a Brevo
 * (tag evento) quando l'integrazione sarà pronta, vedi CLAUDE.md#funnel.
 */
export default function NextEvents({ event }: NextEventsProps) {
  return (
    <section id="eventi" aria-label="Cosa sta succedendo" className="bg-paper-lines bg-paper-100 px-5 py-14 text-ink-900 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <Reveal className="border-b-2 border-ink-900 pb-4">
          <FramedKicker tone="paper">Cosa sta succedendo</FramedKicker>
          <h2 className="mt-5 font-display text-[clamp(1.75rem,1.3rem+2.2vw,3.625rem)] leading-none text-ink-900">
            Vuoi giocare con noi?
          </h2>
        </Reveal>
        <Reveal delayMs={120}>
          <p className="mt-6 max-w-[62ch] text-pretty text-body text-ink-700">
            Durante l&apos;anno organizziamo anche esperienze aperte al pubblico.
            <br />
            Le nostre date non seguono un calendario particolarmente rassicurante.
            <br />
            Dipendono dalle storie, dalle location, dalle collaborazioni e da quando riusciamo effettivamente a
            mettere insieme tutti i pezzi.
          </p>
        </Reveal>

        {event ? (
          <Reveal delayMs={240} className="mt-10">
            <div className="mb-4 font-almanac text-[13px] tracking-kicker text-paper-400">Prossimamente</div>
            <div className="flex flex-wrap items-center gap-5 border-t border-b border-ink-900/30 py-6">
              <div className="w-[200px] shrink-0">
                <ImagePlaceholder label="evento" aspect="4 / 3" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-[clamp(1.375rem,1rem+1.2vw,2rem)] text-ink-900">{event.title}</h3>
                <div className="mt-1.5 font-almanac text-[12px] tracking-label text-paper-400">
                  {event.dateLocation}
                </div>
                <p className="mt-2 text-base text-ink-700">{event.teaser}</p>
              </div>
              <a
                href={event.href}
                className="inline-flex min-h-11 items-center border border-ink-900 px-6 py-3 font-almanac text-[13px] tracking-label text-ink-900 transition-colors duration-150 ease-out hover:bg-ink-900 hover:text-paper-100"
              >
                Scopri l&apos;evento
              </a>
            </div>
            <Button href="#eventi" variant="primary" tone="paper" className="mt-6">
              Vedi tutti i prossimi eventi
            </Button>
          </Reveal>
        ) : (
          <Reveal delayMs={240} className="relative mt-10 border border-ink-900/35 bg-paper-200 p-6 sm:p-9">
            <div aria-hidden className="pointer-events-none absolute inset-[9px] border border-ink-900/20" />
            <div className="relative">
              <h3 className="font-display text-[clamp(1.375rem,1.1rem+1vw,2.125rem)] leading-[1.1] text-ink-900">
                In questo momento non trovi niente?
              </h3>
              <p className="mt-3 max-w-[54ch] text-pretty text-base text-ink-700">
                Non significa che siamo morti.
                <br />
                Probabilmente stiamo preparando qualcosa.
                <br />
                Lasciaci il tuo contatto e sarai tra i primi a sapere quando succede qualcosa di sospetto.
              </p>
              <form className="mt-5 flex flex-wrap gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="min-h-12 min-w-[220px] flex-1 border-0 border-b border-ink-900/45 bg-transparent px-0.5 py-3 font-body text-lg text-ink-900 placeholder:text-ink-900/50 focus:border-brass-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="min-h-12 border-0 bg-seal-600 px-6 py-3 font-almanac text-sm tracking-label text-paper-100 shadow-stamp transition-colors duration-150 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-stamp-in motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0"
                >
                  Avvisatemi
                </button>
              </form>
              <p className="mt-3 text-caption text-paper-400">
                Niente spam. Abbiamo già abbastanza cose di cui vergognarci.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
