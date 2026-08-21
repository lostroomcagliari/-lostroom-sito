import Image from 'next/image'
import Reveal from './Reveal'

const STATS = [
  { value: '2016', label: 'La prima porta chiusa' },
  { value: '+30.000', label: 'Persone hanno giocato con noi' },
  { value: '+300', label: 'Eventi organizzati' },
  { value: '4', label: 'Escape room create (2016–2020)' },
  { value: '3', label: 'Format originali proprietari' },
  { value: '+50', label: 'Aziende lavorano con noi' },
]

/**
 * "Da una stanza a tutto il resto" — foto di transizione, racconto in due
 * colonne e la fascia numeri, tutti nella stessa sezione paper come nel
 * riferimento v2 (prima era solo la fascia numeri, da qui il nome nuovo).
 */
export default function RoomToEverything() {
  return (
    <section aria-label="Da una stanza a tutto il resto" className="bg-paper-lines bg-paper-100 text-ink-900">
      {/* Pellicola: loop orizzontale continuo, non il Sipario delle altre
          foto — parte già in scorrimento al caricamento, indipendente
          dallo scroll (docs/design-system.md#movimento, eccezione mirata).
          Due copie affiancate in un contenitore largo il doppio: animando
          translateX da 0 a -50% ci si sposta esattamente della larghezza
          di una copia, quindi il raccordo è invisibile (la copia 2 finisce
          esattamente dove la copia 1 era partita). Cornice e scritta sono
          incise nella foto stessa: scorrono con tutto il resto, nessun
          elemento fisso sopra. */}
      <div className="relative h-[min(62vh,620px)] min-h-[300px] overflow-hidden bg-ink-800">
        <div className="motion-safe:animate-filmstrip absolute inset-y-0 left-0 flex w-max">
          {[0, 1].map((i) => (
            <Image
              key={i}
              src="/foto/da-una-stanza.png"
              alt={
                i === 0 ? 'Da una sola stanza, a tutto il resto: collage di luoghi ed eventi Lost Room' : ''
              }
              aria-hidden={i === 1}
              width={3200}
              height={800}
              className="h-full w-auto shrink-0"
            />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 py-9 sm:px-10 sm:py-14 lg:py-20">
        <Reveal>
          <h2 className="max-w-[26ch] text-balance font-display text-[clamp(1.75rem,1.3rem+2.2vw,3.625rem)] leading-[1.04] text-ink-900">
            Pensavamo di costruire stanze.{' '}
            <em className="text-brass-500 italic">In realtà stavamo imparando a costruire esperienze.</em>
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-16">
          <Reveal delayMs={120} className="flex flex-col gap-4">
            <p className="text-pretty text-body text-ink-700">
              Le nostre prime storie avevano quattro pareti, una porta chiusa e sessanta minuti per trovare il modo
              di uscire.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Poi abbiamo cominciato a chiederci cosa sarebbe successo togliendo le pareti.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Sono arrivate le Adventure Night, le Cene con Delitto, le Mystery Dinner, i team building, gli eventi
              speciali, le esperienze nei luoghi culturali e nei festival, i progetti con enti e territori.
            </p>
          </Reveal>
          <Reveal delayMs={240} className="flex flex-col gap-4">
            <p className="text-pretty text-body text-ink-700">
              Abbiamo giocato dentro ville, musei, siti archeologici, parchi, ristoranti, aziende, scuole,
              università, giardini, per strada, in spiaggia, in campagna e in luoghi in cui probabilmente nessuno
              aveva mai osato organizzare (o neanche mai pensato) un gioco prima di noi.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Con poche persone e con centinaia di persone contemporaneamente.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Negli anni sono cambiati i numeri, la tecnologia e anche le cose che sappiamo fare.
            </p>
            <p className="mt-1 font-body text-[clamp(1.1875rem,1rem+0.6vw,1.5625rem)] leading-[1.5] text-brass-500 italic">
              Non è mai cambiato il motivo per cui le facciamo: essere noi i primi a divertirci con voi.
            </p>
          </Reveal>
        </div>

        <Reveal
          delayMs={360}
          className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t-2 border-ink-900 border-b border-ink-900/25 py-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:py-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-[clamp(1.875rem,1.4rem+2vw,3rem)] leading-none text-ink-900">
                {stat.value}
              </div>
              <div className="mt-1 max-w-[13ch] font-almanac text-[11px] leading-[1.35] tracking-[0.06em] text-paper-400">
                {stat.label}
              </div>
            </div>
          ))}
        </Reveal>

        {/* Contrappunto ironico ai "numeroni": una nota a margine, non un
            settimo KPI — per questo fuori dalla fascia (Reveal a parte,
            un solo filo di testo) invece che dentro la griglia insieme
            agli altri sei. */}
        <Reveal delayMs={420} className="mt-6">
          <span className="font-almanac text-[13px] tracking-kicker text-brass-500">Enigmi e jumpscare</span>
          <p className="mt-1 text-sm text-ink-700">Non li abbiamo contati. Era meglio così.</p>
        </Reveal>
      </div>
    </section>
  )
}
