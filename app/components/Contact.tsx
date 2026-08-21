import Image from 'next/image'
import Button from './Button'
import Reveal from './Reveal'

/** "Hai qualcosa in mente?" — invito diretto a scrivere, non un form lungo. */
export default function Contact() {
  return (
    <section id="contatti" aria-label="Contatti" className="bg-paper-200 px-5 py-14 text-ink-900 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="w-14 sm:w-[74px]">
            <Image src="/ornaments/mano.png" alt="" width={1211} height={449} className="h-auto w-full mix-blend-multiply" />
          </div>
          <span className="mt-4 block font-almanac text-[13px] tracking-kicker text-brass-500">Contatti</span>
          <h2 className="mt-3 max-w-[14ch] text-balance font-display text-[clamp(2rem,1.4rem+2.6vw,4.125rem)] leading-none text-ink-900">
            Hai qualcosa in mente?
          </h2>
          <div className="mt-8 w-36 sm:w-48 lg:w-56">
            <Image src="/ornaments/falena-oro.png" alt="" width={2175} height={2042} className="h-auto w-full" />
          </div>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="text-pretty text-body text-ink-700">
            Puoi avere già un&apos;idea molto precisa.
            <br />
            Puoi sapere soltanto che devi organizzare qualcosa per trenta persone.
            <br />
            Puoi avere un luogo, un progetto, un gruppo di colleghi o un&apos;amica che si sposa.
            <br />
            Oppure puoi semplicemente scriverci:
          </p>
          <p className="mt-4 font-body text-[clamp(1.3125rem,1.1rem+0.6vw,1.75rem)] leading-[1.4] text-brass-500 italic">
            &quot;Ho avuto un&apos;idea strana.&quot;
          </p>
          <p className="mt-4 text-pretty text-body text-ink-700">
            È un ottimo modo per cominciare.
            <br />
            Raccontaci chi siete, quante persone siete e che cosa vorreste far succedere.
            <br />
            Al modo di complicarvi la vita penseremo insieme.
          </p>
          {/* Placeholder: qui andrà il form di contatto reale (o mailto/link
              WhatsApp) quando saranno decisi i dati di contatto veri —
              CLAUDE.md vieta di inventarli. */}
          <Button href="#contatti" variant="primary" tone="paper" className="mt-6">
            Parliamone
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
