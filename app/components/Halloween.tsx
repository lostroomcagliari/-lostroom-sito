import Image from 'next/image'
import Button from './Button'
import FramedKicker from './FramedKicker'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

const EDITIONS = ['2026', '2025', '2024', '2023', '2022']

/** Appuntamento annuale con Halloween + archivio edizioni 2022–2026. */
export default function Halloween() {
  return (
    <section id="halloween" aria-label="Halloween" className="relative overflow-hidden bg-ink-900 px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
      <div aria-hidden className="pointer-events-none absolute top-[6%] left-1/2 w-[min(20vw,220px)] opacity-[0.09] mix-blend-screen invert">
        <Image src="/ornaments/luna.png" alt="" width={446} height={443} className="h-auto w-full" />
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-16">
        <Reveal>
          <FramedKicker tone="ink">Il nostro appuntamento annuale con Halloween</FramedKicker>
          <h2 className="mt-5 max-w-[22ch] text-balance font-display text-[clamp(2rem,1.3rem+2.8vw,4.125rem)] leading-[1.05] text-paper-100">
            Ci sono persone normali che aspettano Natale.
          </h2>
          <p className="mt-4 max-w-[46ch] text-pretty text-body text-paper-100/80">
            Noi cominciamo a pensare ad Halloween con un anticipo francamente poco salutare.
          </p>
          <p className="mt-3 max-w-[46ch] text-pretty text-body text-paper-100/80">
            Ogni anno costruiamo una nuova esperienza.
            <br />
            Ogni anno promettiamo a noi stessi di organizzare qualcosa di più semplice.
            <br />
            <em className="text-brass-500 italic">Finora non ha funzionato.</em>
          </p>
          <Button href="#halloween" variant="primary" tone="ink" className="mt-6">
            Scopri Halloween con Lost Room
          </Button>
          <div className="mt-6 flex flex-wrap gap-2.5 font-almanac text-[12px] tracking-label">
            {EDITIONS.map((year) => (
              <a
                key={year}
                href="#halloween"
                className="border border-paper-100/35 px-3.5 py-1.5 text-paper-100/75 transition-colors duration-150 ease-out hover:border-brass-500 hover:text-paper-100"
              >
                {year}
              </a>
            ))}
          </div>
        </Reveal>

        <div className="relative aspect-[4/5] min-h-[260px]">
          <ImagePlaceholder label="edizione Halloween" className="absolute inset-0 h-full w-full" />
        </div>
      </div>
    </section>
  )
}
