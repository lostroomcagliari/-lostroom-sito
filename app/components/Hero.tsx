import Button from './Button'
import ImagePlaceholder from './ImagePlaceholder'

/** Dettatura: 120ms di ritardo tra un blocco di testo e il successivo
 * (docs/design-system.md#movimento). */
const DICTATE_STEP_MS = 120

function dictateDelay(step: number) {
  return { animationDelay: `${step * DICTATE_STEP_MS}ms` }
}

export default function Hero() {
  return (
    <section id="top" aria-label="Apertura">
      {/* Pannello visivo */}
      <div className="relative min-h-[560px] w-full overflow-hidden bg-ink-800 sm:min-h-[640px] lg:min-h-[720px]">
        <ImagePlaceholder
          label="giocatori al buio, luce sui volti"
          className="absolute inset-0 h-full w-full"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-900/75 via-ink-900/15 to-ink-900/95"
        />

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between gap-10 px-5 py-8 sm:px-10 sm:py-12 lg:py-16">
          <p
            className="motion-safe:animate-dictate inline-block self-start border border-brass-500/70 px-4 py-2 font-almanac text-[11px] tracking-[0.16em] text-paper-100 sm:text-xs sm:tracking-kicker"
            style={dictateDelay(0)}
          >
            LOST ROOM · REAL LIFE GAME · CAGLIARI, SARDEGNA · DAL 2016
          </p>

          <h1
            className="motion-safe:animate-dictate max-w-[18ch] text-balance font-display text-[clamp(2.75rem,1.6rem+4vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.02em] text-paper-100 [text-shadow:0_2px_24px_rgb(20_17_15_/_0.55)]"
            style={dictateDelay(1)}
          >
            Da più di dieci anni vi portiamo a giocare{' '}
            <em className="font-display text-brass-500 italic">dove non ve lo aspettate.</em>
          </h1>
        </div>
      </div>

      {/* Pannello narrativo */}
      <div className="bg-ink-halo bg-ink-900 px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <p
              className="motion-safe:animate-dictate text-pretty text-body text-paper-100/85"
              style={dictateDelay(2)}
            >
              Siamo nati a Cagliari nel 2016 chiudendo persone consenzienti dentro le prime escape room piene di
              enigmi.
            </p>
            <p
              className="motion-safe:animate-dictate text-pretty text-body text-paper-100/85"
              style={dictateDelay(3)}
            >
              Poi, a un certo punto, le stanze hanno cominciato a starci strette.
            </p>
            <p
              className="motion-safe:animate-dictate text-pretty text-body text-paper-100/85"
              style={dictateDelay(4)}
            >
              Così abbiamo portato i nostri giochi fuori.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <p
              className="motion-safe:animate-dictate text-pretty font-display text-[clamp(1.375rem,1rem+1.2vw,1.75rem)] leading-[1.4] text-paper-100"
              style={dictateDelay(5)}
            >
              Oggi inventiamo giochi, storie ed esperienze immersive per persone, aziende, enti e territori. A
              Cagliari, in Sardegna, in Italia. E ovunque tu abbia il coraggio.
            </p>

            <div
              className="motion-safe:animate-dictate flex flex-col gap-3 sm:flex-row sm:flex-wrap"
              style={dictateDelay(6)}
            >
              <Button href="#format" variant="primary" tone="ink">
                Scopri cosa facciamo
              </Button>
              <Button href="#contatti" variant="secondary" tone="ink">
                Contattaci
              </Button>
            </div>

            <p
              className="motion-safe:animate-dictate border-t border-paper-100/20 pt-6 font-body text-[clamp(1.125rem,1rem+0.6vw,1.375rem)] leading-[1.5] text-brass-500 italic"
              style={dictateDelay(7)}
            >
              In questi 10 anni sono successe un sacco di cose. Ma noi siamo sempre le stesse brutte persone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
