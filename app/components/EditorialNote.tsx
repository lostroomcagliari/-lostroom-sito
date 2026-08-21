import Reveal from './Reveal'

/**
 * "Una nota prima di iniziare" — dichiara il principio dei due livelli di
 * lettura del sito (essenziale sempre in vista, approfondimento opzionale).
 * Testo esatto fornito dal cliente, non riformulare. Kicker "Prima di
 * andare avanti" e dimensioni allineate alla sezione Contatti su richiesta.
 */
export default function EditorialNote() {
  return (
    <section
      aria-label="Una nota prima di iniziare"
      className="bg-paper-lines bg-paper-100 px-5 py-14 text-ink-900 sm:px-10 sm:py-20 lg:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-12 lg:gap-12">
        {/* flex-col: la colonna occupa l'intera altezza della riga grid
            (allineata alla colonna testo, molto più alta) così il blocco
            chiavi sotto può usare flex-1 per prendersi tutto lo spazio
            verticale libero e centrarcisi dentro. Mano rimossa: le chiavi
            restano l'unico ornamento della colonna, quindi possono
            occupare più spazio di quando dovevano dividerlo. */}
        <div className="flex flex-col lg:col-span-4">
          <Reveal>
            <span className="font-almanac text-[13px] tracking-kicker text-brass-500">Prima di andare avanti</span>
            <h2 className="mt-3 text-balance font-display text-[clamp(2rem,1.4rem+2.6vw,4.125rem)] leading-[1.05] text-ink-900">
              Una nota prima di iniziare
            </h2>
          </Reveal>
          {/* Le "due chiavi di lettura" del titolo: essenziale vs
              approfondimento. SVG già in brass-500, niente mix-blend. Tag
              HTML nativo anziché next/image: l'ottimizzatore rifiuta gli SVG
              senza dangerouslyAllowSVG in next.config, e un vettore non ne
              trae comunque beneficio. Larghezza a clamp() anziché fissa: la
              colonna (col-span-4 di 12) si restringe parecchio appena sopra
              lg, un valore fisso pensato per lo schermo largo qui andrebbe
              in overflow. */}
          <Reveal delayMs={120} className="flex flex-1 items-center justify-center py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ornaments/chiavi-di-lettura.svg"
              alt=""
              width={700}
              height={1000}
              className="h-auto w-[clamp(11rem,30vw,30rem)]"
            />
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-7 lg:col-start-6">
          <Reveal className="flex flex-col gap-5">
            <p className="text-pretty text-body text-ink-700">Ai nostri eventi ce lo dicono spesso:</p>
            <p className="text-pretty font-body text-[1.25rem] leading-[1.5] text-ink-700 italic">
              &quot;Uff, ma quanto c&apos;è da leggere nei vostri giochi?&quot;
            </p>
            <p className="font-display text-[clamp(1.5rem,1.2rem+1vw,2rem)] leading-[1.15] text-brass-500 italic">
              Parecchio.
            </p>
          </Reveal>

          <Reveal delayMs={120} className="flex flex-col gap-5">
            <p className="text-pretty text-body text-ink-700">
              Per noi è uno dei modi in cui si entra davvero dentro quello che sta succedendo. Ma puoi anche non
              leggere tutto e arrivare comunque alla fine del gioco.
            </p>
            <p className="text-pretty text-body text-ink-700">Questo sito funziona più o meno allo stesso modo.</p>
          </Reveal>

          <Reveal delayMs={240}>
            <p className="text-pretty text-body text-ink-700">
              Se vuoi sapere subito come funziona un evento, quanto dura, per chi è e cosa devi fare per partecipare,
              troverai sempre le informazioni essenziali in evidenza. Niente cacce al tesoro per scoprire il prezzo o
              capire dove prenotare. Quelle le facciamo altrove.
            </p>
          </Reveal>

          <Reveal delayMs={360}>
            <p className="text-pretty text-body text-ink-700">
              Se invece hai voglia di fermarti un po&apos;, qui dentro ci sono anche le storie dietro le storie: come
              sono nati i nostri format, cosa è successo durante certi eventi, le idee che hanno funzionato, quelle
              che ci sono sfuggite di mano, vecchie fotografie, dettagli di progetto e piccole cose che continuiamo a
              ricordare anni dopo.
            </p>
          </Reveal>

          <Reveal delayMs={480} className="flex flex-col gap-5">
            <p className="text-pretty text-body text-ink-700">
              Insomma, c&apos;è un po&apos; tutto il mondo Lost Room.
            </p>
            <p className="text-pretty text-body text-ink-700">
              Puoi usare questo sito come un bignami e andare dritto al sodo.
            </p>
            <p className="text-pretty text-body text-ink-700">Oppure puoi perdertici dentro.</p>
            <p className="text-pretty text-body text-ink-700">
              Abbiamo cercato di costruirlo bene per entrambe le esperienze, esattamente come uno dei nostri giochi:
              puoi prendere solo quello che ti serve, oppure andare a caccia di dettagli, storie e cose che magari
              ricordi di aver già visto o sentito. O che stai scoprendo oggi per la prima volta.
            </p>
            <p className="border-t border-ink-900/15 pt-5 font-body text-[clamp(1.125rem,1rem+0.5vw,1.375rem)] leading-[1.5] text-brass-500 italic">
              A te, lettore e giocatore, la scelta. Come sempre.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
