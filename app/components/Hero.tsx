import Image from 'next/image'
import Button from './Button'
import FramedKicker from './FramedKicker'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

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
        {/* Wrapper assoluto separato: ImagePlaceholder ha già "relative" in
            base, dargli anche "absolute" via className fa vincere
            "relative" nella cascata di Tailwind e collassa il div ad
            altezza 0 (invisibile con un placeholder a tinta unita, fatale
            con un'immagine fill vera). */}
        <div className="absolute inset-0">
          <ImagePlaceholder
            label="Evento Lost Room in notturna, partecipanti mascherati tra le luci"
            src="/foto/hero.png"
            className="h-full w-full"
            sizes="100vw"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-900/75 via-ink-900/15 to-ink-900/95"
        />
        {/* Cornice ottone, sopra il gradiente perché resti leggibile anche
            nella parte più scura della vignettatura. */}
        <div aria-hidden className="pointer-events-none absolute inset-3 border border-brass-500/70 sm:inset-5" />

        <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between gap-10 px-5 py-8 sm:px-10 sm:py-12 lg:py-16">
          <FramedKicker tone="ink" className="motion-safe:animate-dictate self-start" style={dictateDelay(0)}>
            LOST ROOM · REAL LIFE GAME · CAGLIARI, SARDEGNA · DAL 2016
          </FramedKicker>

          <h1
            className="motion-safe:animate-dictate text-balance font-display text-[clamp(2.75rem,1.6rem+4vw,5.25rem)] leading-[0.98] font-normal tracking-[-0.02em] text-paper-100 [text-shadow:0_2px_24px_rgb(20_17_15_/_0.55)]"
            style={dictateDelay(1)}
          >
            Da più di dieci anni vi facciamo giocare{' '}
            <em className="font-display text-brass-500 italic">come non ve lo aspettate.</em>
          </h1>
        </div>
      </div>

      {/* Pannello narrativo — sotto la prima schermata: Dettatura triggerata
          allo scroll (Reveal), non più al mount come nel pannello visivo
          sopra (quello resta dictateDelay perché è già visibile al
          caricamento, prima che si possa scrollare). */}
      <div className="bg-ink-halo bg-ink-900 px-5 py-12 sm:px-10 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Reveal>
              <p className="text-pretty text-body text-paper-100/85">
                Siamo nati a Cagliari nel 2016 rinchiudendo persone consenzienti dentro le prime escape room piene di
                enigmi.
              </p>
            </Reveal>
            <Reveal delayMs={120} className="flex items-center gap-4">
              <span className="w-14 shrink-0 sm:w-[74px]">
                <Image src="/ornaments/mano.png" alt="" width={1211} height={449} className="h-auto w-full invert" />
              </span>
              <p className="text-pretty text-body text-paper-100/85">
                Poi, a un certo punto, le stanze hanno cominciato a starci strette.
              </p>
            </Reveal>
            <Reveal delayMs={240}>
              <p className="text-pretty text-body text-paper-100/85">Così abbiamo portato i nostri giochi fuori.</p>
            </Reveal>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal delayMs={120}>
              <p className="text-pretty font-display text-[clamp(1.375rem,1rem+1.2vw,1.75rem)] leading-[1.4] text-paper-100">
                Oggi inventiamo giochi, storie ed esperienze immersive per persone, aziende, enti e territori. A
                Cagliari, in Sardegna, in Italia. E ovunque tu abbia il coraggio.
              </p>
            </Reveal>

            <Reveal delayMs={240} className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#format" variant="primary" tone="ink">
                Scopri cosa facciamo
              </Button>
              <Button href="#progetti" variant="secondary" tone="ink">
                Guarda i nostri progetti
              </Button>
            </Reveal>

            <Reveal delayMs={360}>
              <p className="border-t border-paper-100/20 pt-6 font-body text-[clamp(1.125rem,1rem+0.6vw,1.375rem)] leading-[1.5] text-brass-500 italic">
                In questi 10 anni sono successe tantissime cose. Ma noi siamo rimaste sempre le stesse brutte
                persone.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
