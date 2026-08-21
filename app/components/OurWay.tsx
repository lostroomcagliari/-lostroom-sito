import FramedKicker from './FramedKicker'
import Reveal from './Reveal'

/**
 * "Il nostro modo di fare le cose" — manifesto. Nel riferimento v2 questa
 * sezione ha un grande ornamento (falena) sfumato sullo sfondo: l'asset
 * trovato è un composito con un vecchio francobollo/busta visibile in
 * trasparenza, non utilizzabile — sezione senza ornamento finché non c'è
 * un file pulito.
 */
export default function OurWay() {
  return (
    <section aria-label="Il nostro modo di fare le cose" className="bg-ink-900 px-5 py-14 sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <FramedKicker tone="ink">Il nostro modo di fare le cose</FramedKicker>
          <h2 className="mt-5 max-w-[21ch] font-display text-[clamp(1.875rem,1.3rem+2.8vw,4.125rem)] leading-none text-paper-100">
            Artigiani dell&apos;ignoto e dell&apos;inaspettato.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-12 lg:gap-18">
          <Reveal delayMs={120} className="flex flex-col gap-4">
            <p className="text-pretty text-body text-paper-100/80">
              Non ci siamo mai sentiti propriamente dei game designer. Ci piace di più pensare che facciamo uno
              strano lavoro artigianale.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Prendiamo storie, luoghi, persone, enigmi, oggetti, tecnologia, teatro, psicologia, sociologia, logica
              e immaginazione e proviamo a capire cosa può succedere mettendo tutto insieme.
            </p>
            <p className="mt-1 font-display text-[clamp(1.25rem,1rem+0.8vw,1.75rem)] leading-[1.4] text-paper-100">
              Per noi il gioco è qualcosa di magico che succede tra le persone. E alle persone.
            </p>
          </Reveal>

          <Reveal
            delayMs={240}
            className="flex flex-col gap-4 border-t border-paper-100/40 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10 lg:pl-14"
          >
            <p className="text-pretty text-body leading-[1.75] text-paper-100/85">
              Qualcuno prende il comando, qualcuno lascia fare agli altri.
              <br />
              Qualcuno ha un&apos;intuizione.
              <br />
              Qualcuno osserva in silenzio e trova la soluzione.
              <br />
              Qualcuno sospetta della persona sbagliata per tutta la sera.
              <br />
              Qualcuno tradisce i propri amici per vincere.
              <br />
              Qualcuno si sacrifica per i propri amici.
              <br />
              Qualcuno scopre di essere molto più competitivo di quanto avesse sempre raccontato.
            </p>
            <p className="text-pretty text-body leading-[1.75] text-paper-100/85">
              A volte si vince, a volte si perde.
              <br />
              Sempre si impara qualcosa di nuovo, compreso che se si fallisce non succede niente.
            </p>
            <p className="font-body text-[clamp(1.1875rem,1rem+0.6vw,1.5rem)] text-seal-600 italic">
              È tutto perfettamente normale.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Il nostro lavoro è costruire le condizioni perché tutto questo succeda.
              <br />
              Perché divertirvi ci interessa moltissimo, ma non ci basta.
            </p>
            <p className="text-pretty text-body text-paper-100/80">
              Vogliamo che chi entra in una nostra esperienza abbia un mistero da scoprire, una decisione da
              prendere, un problema da risolvere, qualcuno con cui collaborare, una storia nella quale infilarsi,
              delle belle emozioni da vivere e delle nuove conoscenze da portare a casa.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-10 border-t border-paper-100/25 pt-7 sm:mt-14 sm:pt-9">
          <p className="max-w-[34ch] text-pretty font-display text-[clamp(1.375rem,1.1rem+1.4vw,2.5rem)] leading-[1.25] text-paper-100">
            Non vogliamo spettatori, perché non facciamo intrattenimento.{' '}
            <em className="text-brass-500 italic">Vogliamo complici, perché senza di voi non succede niente.</em>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
