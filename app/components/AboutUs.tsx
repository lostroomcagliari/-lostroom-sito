import Button from './Button'
import FramedKicker from './FramedKicker'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

/** "Chi c'è dietro Lost Room" — ritratti placeholder di Fausta e Filippo. */
export default function AboutUs() {
  return (
    <section id="chi-siamo" aria-label="Chi c'è dietro Lost Room" className="bg-ink-900 px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-3.5">
          {/* self-start su entrambi: senza, il grid a 2 colonne stira i
              wrapper all'altezza della riga e l'etichetta "bottom-0" finisce
              ancorata al bordo stirato, non al bordo reale della foto. Lo
              sfalsamento viene solo da mt-* su Filippo, stessa tecnica per
              entrambi invece di self-end + margin-bottom mescolati. */}
          <div className="relative self-start border border-brass-500/60 p-2">
            <ImagePlaceholder
              label="Ritratto di Fausta Laddomada"
              src="/team/fausta.png"
              aspect="3 / 4"
              hideCaption
              framed
              sizes="(min-width: 1024px) 22vw, 45vw"
            />
            <div className="absolute bottom-2 left-2 bg-ink-900 px-2.5 py-1.5 font-almanac text-[11px] tracking-label text-brass-500">
              Fausta
            </div>
          </div>
          <div className="relative self-start border border-brass-500/60 p-2 sm:mt-10">
            <ImagePlaceholder
              label="Ritratto di Filippo Manca"
              src="/team/filippo.png"
              aspect="3 / 4"
              hideCaption
              framed
              sizes="(min-width: 1024px) 22vw, 45vw"
            />
            <div className="absolute bottom-2 left-2 bg-ink-900 px-2.5 py-1.5 font-almanac text-[11px] tracking-label text-brass-500">
              Filippo
            </div>
          </div>
        </div>

        <Reveal>
          <FramedKicker tone="ink">Chi c&apos;è dietro Lost Room</FramedKicker>
          <h2 className="mt-4 max-w-[22ch] text-balance font-display text-[clamp(2rem,1.3rem+2.6vw,3.875rem)] leading-[1.05] text-paper-100">
            Qualcuno ci ha definiti &quot;geni del male&quot;.
          </h2>
          <div className="mt-5 flex flex-col gap-4">
            <p className="text-pretty text-body text-paper-100/80">
              Non abbiamo mai capito se fosse un complimento. Abbiamo deciso di sì.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Siamo Fausta Laddomada e Filippo Manca.
              <br />
              Due millennials cresciuti con una quantità poco ragionevole di libri, giochi, film, serie TV,
              videogiochi e misteri.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Ci piace ancora giocare.
              <br />
              Ci piace sentirci ancora un po&apos; bambini.
              <br />
              Ci piacciono le persone, le mappe, le storie nelle quali qualcosa non torna, gli oggetti che sembrano
              provenire da un altro tempo, le torce che illuminano un dettaglio nel buio e le porte che
              probabilmente non dovremmo aprire.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Siamo due persone talmente curiose da essere al contempo appassionati di tecnologia e innovazione e
              affascinati da tutto quello che arriva dal passato.
              <br />
              Per questo nei nostri giochi possono convivere tecnologia e carta, QR code e vecchi documenti,
              meccaniche nuove e storie che sembrano essere state raccontate cento anni fa.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Nel 2016 abbiamo aperto Lost Room come escape room a Cagliari.
              <br />
              Da allora inventiamo modi sempre nuovi di mettere le persone nei guai.
              <br />
              <em className="text-brass-500 italic">Per gioco, naturalmente.</em>
            </p>
          </div>
          <Button href="#chi-siamo" variant="primary" tone="ink" className="mt-6">
            Conosci le brutte persone
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
