import Image from 'next/image'
import Button from './Button'
import ImagePlaceholder from './ImagePlaceholder'
import Reveal from './Reveal'

/**
 * Fascia verticali su fondo velluto — l'unico bg-velvet-700 di tutta la
 * pagina (docs/design-system.md: terziario, massimo uno per pagina).
 */
export default function Verticals() {
  return (
    <section aria-label="Per cosa vuoi organizzare" className="bg-velvet-700 px-5 py-14 text-paper-100 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid items-start gap-6 border-b border-paper-100/30 pb-5 sm:grid-cols-[1fr_auto] sm:gap-10">
          <div>
            <p className="max-w-[26ch] text-balance font-body text-[clamp(1.5rem,1.1rem+1.8vw,2.75rem)] leading-[1.2] text-paper-100 italic">
              &quot;Ehi, cosa organizziamo stavolta?&quot;
            </p>
            <p className="mt-4 max-w-[58ch] text-pretty text-body text-paper-100/80">
              Non tutti arrivano da noi cercando un format o un evento specifico.
              <br />
              Spesso hanno solo un problema da risolvere: cosa possiamo fare per questa occasione?
              <br />
              A noi va benissimo, perché possiamo iniziare a pensarci insieme.
            </p>
          </div>
          {/* Falena nera, speculare al titolo: stessa riga, lato opposto,
              centrata nello spazio verticale libero (self-center: la riga
              è alta quanto la colonna testo, molto più alta dell'immagine).
              Larghezza a clamp() anziché fissa: la colonna è "auto" quindi
              un valore fisso squeezerebbe il testo sui viewport più stretti
              dove la sezione diventa a due colonne. */}
          <div className="hidden shrink-0 self-center sm:block">
            <span className="block w-[clamp(11rem,42vw,40.5rem)]">
              <Image
                src="/ornaments/falena-nera.png"
                alt=""
                width={2944}
                height={2111}
                className="h-auto w-full"
              />
            </span>
          </div>
        </Reveal>

        {/* Addii al nubilato */}
        <div id="addii" className="mt-10 grid items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <Reveal>
            <span className="font-almanac text-xs tracking-label text-paper-300">
              Team di amiche, conoscenti e persino nemiche
            </span>
            <h3 className="mt-3 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.05] text-paper-100">
              Addii al nubilato
            </h3>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Se ti hanno affidato l&apos;organizzazione dell&apos;addio al nubilato significa che qualcuno si fida
              moltissimo di te.
              <br />
              Oppure che tutte le altre si sono tirate indietro in tempo.
              <br />
              In entrambi i casi possiamo aiutarti.
            </p>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Niente programmi tutti uguali, niente imbarazzi obbligatori e nessuna necessità di umiliare
              pubblicamente la sposa per dimostrarle affetto.
              <br />
              A quello, eventualmente, pensiamo noi attraverso il gioco.
            </p>
            <Button href="#addii" variant="primary" tone="ink" className="mt-5">
              Scopri gli addii Lost Room
            </Button>
          </Reveal>
          <div className="relative">
            <ImagePlaceholder label="Addio al nubilato Lost Room, gruppo di amiche in gioco" src="/foto/nubilato.png" aspect="4 / 3" />
            <div aria-hidden className="pointer-events-none absolute inset-0 border-[14px] border-velvet-700" />
          </div>
        </div>

        {/* Team building */}
        <div id="team-building" className="mt-14 grid items-center gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <div className="relative sm:order-2">
            <ImagePlaceholder
              label="Team building Lost Room, colleghi al lavoro sotto pressione"
              src="/foto/team-building.png"
              aspect="5 / 4"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 border-[14px] border-velvet-700" />
          </div>
          <Reveal delayMs={120} className="sm:order-1">
            <span className="font-almanac text-xs tracking-label text-paper-300">Team aziendali</span>
            <h3 className="mt-3 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.05] text-paper-100">
              Team Building
            </h3>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Mettere 10, 20, 50 o 100 colleghi nella stessa stanza non crea automaticamente un team o
              un&apos;organizzazione.
            </p>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Dare loro un problema da risolvere, informazioni incomplete, poco tempo, obiettivi comuni e la
              necessità di parlarsi sul serio può invece produrre risultati interessanti.
            </p>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Progettiamo esperienze ludiche per aziende e gruppi di lavoro: dal team building puro alla formazione
              esperienziale, fino ai giochi costruiti intorno a obiettivi specifici.
            </p>
            <p className="mt-3 font-body text-[1.1875rem] text-paper-300 italic">
              E sì, devono anche divertirsi.
              <br />
              Altrimenti potevate fare una riunione.
            </p>
            <Button href="#team-building" variant="secondary" tone="ink" className="mt-5">
              Scopri il team building
            </Button>
          </Reveal>
        </div>

        {/* Eventi privati */}
        <div id="eventi-privati" className="mt-14 grid gap-8 border-t border-paper-100/25 pt-9 sm:grid-cols-2 sm:gap-10 lg:gap-14">
          <Reveal>
            <span className="font-almanac text-xs tracking-label text-paper-300">
              Feste di compleanno, laurea o serate alternative
            </span>
            <h3 className="mt-3 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.05] text-paper-100">
              Eventi privati
            </h3>
          </Reveal>
          <Reveal delayMs={120}>
            <p className="text-pretty text-base text-paper-100/85">
              Compleanni, lauree, feste, gruppi di amici e tutte quelle occasioni nelle quali:
              <br />
              <em className="font-body text-paper-300 italic">&quot;Andiamo semplicemente a cena?&quot;</em> non vi
              entusiasma abbastanza.
            </p>
            <p className="mt-3 text-pretty text-base text-paper-100/85">
              Possiamo aggiungere un omicidio.
              <br />
              Finto, naturalmente.
              <br />
              Oppure un mistero, una missione, una competizione o qualcosa che ancora non abbiamo inventato.
            </p>
            <Button href="#contatti" variant="secondary" tone="ink" className="mt-5">
              Organizza qualcosa
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
