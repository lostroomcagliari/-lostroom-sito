import Link from 'next/link'
import Button from '../Button'
import FramedKicker from '../FramedKicker'
import ImagePlaceholder from '../ImagePlaceholder'
import Reveal from '../Reveal'
import YouTubeEmbed from '../YouTubeEmbed'
import CopyBlock from './CopyBlock'
import EditionCard from './EditionCard'
import Faq from './Faq'
import Ornament from './Ornament'
import SubNav from './SubNav'
import type { FormatPageContent } from './types'

/** Dettatura al mount per l'hero (sopra la prima schermata: scatta subito,
 * non allo scroll — docs/design-system.md#movimento, stessa ricetta di
 * Hero.tsx in Home). Sotto la prima schermata si passa a <Reveal>. */
const DICTATE_STEP_MS = 120
function dictateDelay(step: number) {
  return { animationDelay: `${step * DICTATE_STEP_MS}ms` }
}

/**
 * Template condiviso di tutte le pagine format (Adventure Night, Cena con
 * Delitto, Mystery Dinner) e delle verticali commerciali. Riceve l'intero
 * contenuto come dati (vedi types.ts) — nessun testo hardcoded qui dentro:
 * una nuova pagina si costruisce scrivendo un nuovo content.ts e passandolo
 * a questo stesso componente, non riscrivendo il layout.
 *
 * Struttura (principio bignami/archivio, docs/design-system.md): Hero →
 * Apertura → sotto-nav di salto → Il bignami (blocco essenziale, sempre in
 * vista) → L'archivio (approfondimento narrativo) → FAQ → altri format.
 */
export default function FormatPageTemplate({ content }: { content: FormatPageContent }) {
  const {
    hero,
    opening,
    bignami,
    archivioIntro,
    archivioVideo,
    origin,
    howToPlay,
    universe,
    editions,
    stats,
    nextPlace,
    faq,
    crossLinks,
  } = content

  return (
    <>
      {/* ══ HERO ══ */}
      <section aria-label={`Apertura — ${hero.title}`}>
        <div className="relative min-h-[460px] w-full overflow-hidden bg-ink-800 sm:min-h-[560px] lg:min-h-[640px]">
          <div className="absolute inset-0">
            <ImagePlaceholder
              label={hero.photo.label}
              src={hero.photo.src}
              className="h-full w-full"
              sizes="100vw"
              hideCaption
              imageClassName="filter-vintage"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-900/75 via-ink-900/15 to-ink-900/95"
          />
          <div aria-hidden className="pointer-events-none absolute inset-3 border border-brass-500/70 sm:inset-5" />

          <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between gap-8 px-5 py-8 sm:px-10 sm:py-12 lg:py-16">
            <FramedKicker tone="ink" className="motion-safe:animate-dictate self-start" style={dictateDelay(0)}>
              {hero.eyebrow}
            </FramedKicker>
            <div>
              <h1
                className="motion-safe:animate-dictate text-balance font-display text-[clamp(2.5rem,1.5rem+3.6vw,4.75rem)] leading-[0.98] font-normal tracking-[-0.02em] text-paper-100 [text-shadow:0_2px_24px_rgb(20_17_15_/_0.55)]"
                style={dictateDelay(1)}
              >
                {hero.title}
              </h1>
              <p
                className="motion-safe:animate-dictate mt-4 max-w-[24ch] font-display text-[clamp(1.25rem,1rem+1vw,1.875rem)] leading-[1.2] text-paper-100"
                style={dictateDelay(2)}
              >
                {hero.lead}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ APERTURA — cos'è, in quattro righe ══ */}
      <section aria-label="Cos'è, in breve" className="bg-ink-900 px-5 py-10 sm:px-10 sm:py-14">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 sm:gap-14">
          <Reveal>
            <p className="max-w-[30ch] text-pretty font-display text-[clamp(1.3125rem,1.1rem+1vw,1.875rem)] leading-[1.4] text-paper-100">
              {opening.lead}
            </p>
          </Reveal>
          <Reveal delayMs={120} className="flex flex-col gap-4">
            <p className="max-w-[46ch] text-pretty text-body text-paper-100/80">{opening.body}</p>
            <p className="max-w-[34ch] text-pretty font-body text-[clamp(1.25rem,1rem+0.7vw,1.6875rem)] italic leading-[1.4] text-brass-500">
              {opening.accent}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ SOTTO-NAVIGAZIONE — il meccanismo bignami/archivio ══ */}
      <SubNav label={hero.title} ctaLabel="Portatela qui" ctaHref={`#${nextPlace.id}`} />

      {/* ══ IL BIGNAMI ══ */}
      <section
        id="bignami"
        aria-label={bignami.title}
        className="scroll-mt-[150px] bg-paper-lines bg-paper-100 px-5 py-14 text-ink-900 sm:px-10 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex flex-wrap items-end gap-5 border-b-2 border-ink-900 pb-3.5">
            <div>
              <div className="font-almanac text-[13px] tracking-kicker text-seal-600">{bignami.eyebrow}</div>
              <h2 className="mt-3 font-display text-[clamp(1.875rem,1.4rem+2.4vw,3.875rem)] leading-none text-ink-900">
                {bignami.title}
              </h2>
            </div>
            <p className="mb-1.5 ml-auto font-body text-[clamp(1.1875rem,1rem+0.6vw,1.5rem)] italic text-paper-400">
              {bignami.lead}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-px border border-ink-900/25 bg-ink-900/25 sm:grid-cols-2 lg:grid-cols-3">
            {bignami.items.map((item, i) => (
              <Reveal
                key={item.label}
                delayMs={Math.min(i, 4) * 100}
                className={`p-6 ${item.highlight ? 'bg-paper-200 sm:col-span-2 lg:col-span-3' : 'bg-paper-100'}`}
              >
                <div className="flex items-baseline gap-2.5">
                  <span aria-hidden className="text-xs text-seal-600">
                    ✳
                  </span>
                  <h3 className="font-almanac text-[14px] tracking-kicker text-seal-600">{item.label}</h3>
                </div>
                {item.highlight ? (
                  <div className="mt-3.5">
                    <p className="max-w-[22ch] font-display text-[clamp(1.375rem,1.1rem+0.8vw,1.875rem)] leading-[1.25] text-ink-900">
                      {item.lines[0]?.text}
                    </p>
                    {item.lines.length > 1 && (
                      <div className="mt-3 grid gap-3.5 sm:grid-cols-3">
                        {item.lines.slice(1).map((line, li) => (
                          <p key={li} className="text-base text-ink-700">
                            {line.text}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <CopyBlock lines={item.lines} bg="light" className="mt-3.5 gap-2.5" />
                )}
                {item.jumpLink && (
                  <a
                    href={item.jumpLink.href}
                    className="mt-3.5 inline-flex min-h-11 items-center border-b border-seal-600/40 pb-1 font-almanac text-[13px] tracking-label text-seal-600 transition-colors duration-150 ease-out hover:border-ink-900 hover:text-ink-900"
                  >
                    {item.jumpLink.label}
                  </a>
                )}
              </Reveal>
            ))}
          </div>

          {/* ponte finale verso le date reali — resta sempre in vista */}
          <Reveal delayMs={200} className="mt-8 flex flex-wrap items-center gap-8 border-t border-ink-900/25 pt-6">
            <div className="min-w-0 flex-1 basis-[300px]">
              <p className="max-w-[44ch] text-pretty text-base text-ink-700">{bignami.datesBridge.lead}</p>
              <Button href={bignami.datesBridge.cta.href} variant="secondary" tone="paper" className="mt-4">
                {bignami.datesBridge.cta.label}
              </Button>
            </div>
            <div className="flex min-w-0 flex-1 basis-[200px] justify-center">
              <Ornament spec={bignami.ornament} fit="height" className="max-h-[220px]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ GIRA PAGINA — transizione bignami → archivio ══ */}
      <div id="archivio" aria-hidden="true" className="scroll-mt-[150px] bg-ink-900 px-5 py-12 text-center sm:py-16">
        <Reveal className="mx-auto max-w-[760px]">
          <div className="flex items-center gap-4 text-brass-500">
            <span className="h-px flex-1 bg-linear-to-r from-transparent to-brass-500/60" />
            <span aria-hidden>✳︎</span>
            <span className="h-px flex-1 bg-linear-to-l from-transparent to-brass-500/60" />
          </div>
          <div className="mt-5 font-almanac text-[13px] tracking-kicker text-brass-500">{archivioIntro.eyebrow}</div>
          <p className="mt-4 font-display text-[clamp(1.5rem,1.1rem+1.8vw,2.75rem)] leading-[1.15] text-paper-100">
            {archivioIntro.lead} <em className="text-brass-500 italic">{archivioIntro.accent}</em>
          </p>
        </Reveal>
      </div>

      {/* ══ IL VIDEO — apre l'Archivio, prima di "come è nata" ══ */}
      {archivioVideo && (
        <div className="bg-ink-900 px-5 pb-10 sm:px-10 sm:pb-16">
          <Reveal className="mx-auto max-w-[880px]">
            <div className="mb-4 text-center font-almanac text-[13px] tracking-kicker text-brass-500">
              {archivioVideo.eyebrow}
            </div>
            <YouTubeEmbed videoId={archivioVideo.videoId} title={archivioVideo.title} />
          </Reveal>
        </div>
      )}

      {/* ══ ARCHIVIO 01 — come è nata ══ */}
      <section aria-label={origin.heading} className="bg-ink-900 pb-10 sm:pb-16">
        <div className="relative">
          <ImagePlaceholder label={origin.photo.label} src={origin.photo.src} aspect="16 / 8" sizes="100vw" hideCaption />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink-900/45 via-ink-900/10 to-ink-900/90"
          />
          <div className="absolute inset-x-5 bottom-5 sm:inset-x-10 sm:bottom-8">
            <div className="font-almanac text-xs tracking-label text-brass-500">{origin.eyebrow}</div>
            <h2 className="mt-3 max-w-[26ch] text-balance font-display text-[clamp(1.75rem,1.3rem+2.2vw,3.875rem)] leading-[1.05] text-paper-100">
              {origin.heading}
            </h2>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1440px] gap-10 px-5 sm:grid-cols-2 sm:gap-16 sm:px-10">
          <Reveal>
            <CopyBlock lines={origin.columns[0]} bg="dark" />
          </Reveal>
          <Reveal delayMs={120} className="border-t border-paper-100/20 pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10 lg:pl-14">
            <CopyBlock lines={origin.columns[1]} bg="dark" />
          </Reveal>
        </div>
      </section>

      {/* ══ ARCHIVIO 02 — come si gioca davvero ══ */}
      <section
        id="come-si-gioca-davvero"
        aria-label={howToPlay.heading}
        className="scroll-mt-[150px] bg-ink-900 px-5 py-14 sm:px-10 sm:py-20"
      >
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="flex flex-wrap items-end gap-5 border-b-2 border-paper-100/55 pb-3.5">
            <h2 className="font-display text-[clamp(1.75rem,1.3rem+2vw,3.625rem)] leading-none text-paper-100">
              {howToPlay.heading}
            </h2>
            <span className="ml-auto font-almanac text-[13px] tracking-label text-brass-500">{howToPlay.eyebrow}</span>
          </Reveal>

          <div className="mt-9 grid gap-10 sm:grid-cols-2 sm:gap-16">
            <Reveal>
              <CopyBlock lines={howToPlay.lines} bg="dark" />
            </Reveal>
            <Reveal delayMs={120} className="relative self-start">
              <ImagePlaceholder
                label={howToPlay.photo.label}
                src={howToPlay.photo.src}
                aspect="4 / 5"
                hideCaption
                imageClassName="filter-vintage"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_42%,transparent_32%,rgb(20_17_15/0.66)_100%)]"
              />
            </Reveal>
          </div>

          {/* il meteo — riga a piena larghezza, incisione affiancata al testo */}
          <Reveal delayMs={200} className="mt-10 border border-brass-500/40 p-[5px]">
            <div className="flex flex-wrap items-center gap-8 border-[3px] border-double border-brass-500/35 p-6 sm:p-9">
              <div className="min-w-0 flex-1 basis-[340px]">
                <div className="font-almanac text-xs tracking-kicker text-brass-500">✳ {howToPlay.weather.kicker} ✳</div>
                <p className="mt-3.5 font-display text-[clamp(1.625rem,1.2rem+1.6vw,2.5rem)] leading-[1.2] text-paper-100">
                  {howToPlay.weather.title}
                </p>
                <CopyBlock lines={howToPlay.weather.lines} bg="dark" className="mt-3" />
              </div>
              <div className="flex min-w-0 flex-1 basis-[180px] justify-center">
                <Ornament spec={howToPlay.weather.ornament} fit="height" className="max-h-[240px]" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ ARCHIVIO 03 — l'universo narrativo (velvet, unica sezione della pagina) ══ */}
      <section aria-label={universe.heading} className="bg-velvet-700 px-5 py-14 text-paper-100 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal className="flex h-full flex-col">
            <div className="font-almanac text-[13px] tracking-kicker text-paper-300">{universe.eyebrow}</div>
            <h2 className="mt-3.5 max-w-[20ch] text-balance font-display text-[clamp(1.75rem,1.3rem+2vw,3.625rem)] leading-[1.05] text-paper-100">
              {universe.heading}
            </h2>
            {/* flex-1 + items-center: la bussola non resta ancorata subito
                sotto il titolo, si centra nello spazio verticale che resta
                libero fino in fondo alla colonna (spesso più alta del testo
                a sinistra, colonna del testo a destra è tipicamente più
                lunga). */}
            <div className="mt-8 flex flex-1 items-center">
              <div className="w-full max-w-[380px]">
                <Ornament spec={universe.ornament} fit="width" />
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <CopyBlock lines={universe.lines} bg="velvet" />
          </Reveal>
        </div>
      </section>

      {/* ══ ARCHIVIO 04 — le edizioni ══ */}
      <section id="edizioni" aria-label={editions.heading} className="scroll-mt-[150px] bg-ink-900 px-5 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="border-b-2 border-paper-100/55 pb-3.5">
            <div className="font-almanac text-[13px] tracking-kicker text-brass-500">{editions.eyebrow}</div>
            <h2 className="mt-3 max-w-[30ch] text-balance font-display text-[clamp(1.625rem,1.2rem+1.8vw,3.25rem)] leading-[1.05] text-paper-100">
              {editions.heading}
            </h2>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {editions.items.map((edition, i) => (
              <Reveal key={edition.year + edition.title} delayMs={Math.min(i, 4) * 100}>
                <EditionCard edition={edition} />
              </Reveal>
            ))}
            {/* incisione decorativa: chiude la fila cronologica invece di
                lasciare l'ultima cella vuota o forzare una sesta scheda
                inventata. */}
            <Reveal delayMs={400} className="flex min-h-[280px] items-center justify-center p-4">
              <Ornament spec={editions.closingOrnament} fit="height" className="max-h-[420px]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FINORA — numeri ══ */}
      <section aria-label="Finora" className="bg-paper-lines bg-paper-100 px-5 py-12 text-ink-900 sm:px-10 sm:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-10 sm:gap-16">
          <Reveal className="min-w-0 flex-1 basis-[420px]">
            <div className="font-almanac text-[13px] tracking-kicker text-seal-600">{stats.eyebrow}</div>
            <div className="mt-4 flex flex-wrap gap-8 border-t-2 border-ink-900 border-b border-ink-900/30 py-6">
              {stats.items.map((stat) => (
                <div key={stat.label} className="flex-1 basis-[160px]">
                  <div className="font-display text-[clamp(2rem,1.6rem+1.6vw,3.25rem)] leading-none text-ink-900">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 font-almanac text-[12px] tracking-label text-paper-400">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-[44ch] text-pretty font-body text-[clamp(1.1875rem,1rem+0.6vw,1.625rem)] italic leading-[1.4] text-seal-600">
              {stats.quote}
            </p>
          </Reveal>
          <Reveal delayMs={150} className="flex min-w-0 flex-1 basis-[150px] justify-center">
            <Ornament spec={stats.ornament} fit="height" className="max-h-[260px]" />
          </Reveal>
        </div>
      </section>

      {/* ══ E IL PROSSIMO POSTO — CTA per chi gestisce un luogo ══ */}
      <section
        id={nextPlace.id}
        aria-label={nextPlace.heading}
        className="scroll-mt-[150px] bg-paper-200 px-5 py-14 text-ink-900 sm:px-10 sm:py-20"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-2 sm:gap-16">
          <Reveal className="flex h-full flex-col">
            <div className="font-almanac text-[13px] tracking-kicker text-seal-600">{nextPlace.eyebrow}</div>
            <h2 className="mt-3.5 max-w-[16ch] font-display text-[clamp(1.875rem,1.4rem+2.4vw,4.125rem)] leading-none text-ink-900">
              {nextPlace.heading}
            </h2>
            {/* Mappamondo: unica incisione del template a dimensione
                contenuta, non "riempi lo spazio" — deve restare vicino al
                blocco di testo, non torreggiare sopra il link qui sotto.
                flex-1 + items-center: si centra nello spazio verticale
                libero sotto il titolo (la colonna a destra, con
                paragrafi/CTA/link, è tipicamente più alta). */}
            <div className="mt-6 flex flex-1 items-center">
              <div className="w-28 sm:w-32">
                <Ornament spec={nextPlace.ornament} fit="width" />
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <CopyBlock lines={nextPlace.lines} bg="light" />
            <Button href={nextPlace.cta.href} variant="primary" tone="paper" className="mt-6">
              {nextPlace.cta.label}
            </Button>
            <a
              href={nextPlace.backLink.href}
              className="mt-4 inline-flex min-h-11 items-center border-b border-paper-400/50 pb-0.5 font-almanac text-[13px] tracking-label text-paper-400 transition-colors duration-150 ease-out hover:border-ink-900 hover:text-ink-900"
            >
              {nextPlace.backLink.label}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section id="faq" aria-label={faq.heading} className="scroll-mt-[150px] bg-ink-900 px-5 py-14 sm:px-10 sm:py-20">
        <div className="mx-auto max-w-[920px]">
          <Reveal className="flex flex-wrap items-end gap-4 border-b-2 border-paper-100/55 pb-3.5">
            <h2 className="font-display text-[clamp(1.75rem,1.3rem+1.8vw,3.375rem)] leading-none text-paper-100">
              {faq.heading}
            </h2>
            {faq.placeholderBadge && (
              <span className="ml-auto border border-seal-600/50 bg-seal-600/15 px-3 py-1.5 font-almanac text-[12px] tracking-label text-seal-600">
                {faq.placeholderBadge}
              </span>
            )}
          </Reveal>
          <div className="mt-8">
            <Faq items={faq.items} />
          </div>
        </div>
      </section>

      {/* ══ ALTRI FORMAT — il template si richiude sul sistema ══ */}
      <section aria-label={crossLinks.heading} className="bg-ink-900 px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="border-b border-paper-100/25 pb-3 font-almanac text-[13px] tracking-kicker text-brass-500">
            {crossLinks.heading}
          </Reveal>
          {/* 2 colonne sotto, 4 in fila solo da lg in su: sotto lg quattro
              card 3:4 non hanno spazio per restare leggibili affiancate. */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {crossLinks.items.map((link, i) => (
              <Reveal key={link.name} delayMs={i * 100}>
                <div className="relative border border-brass-500/60 p-2">
                  <ImagePlaceholder
                    label={link.photo?.label ?? link.name}
                    src={link.photo?.src}
                    aspect="3 / 4"
                    framed
                    imageClassName="filter-vintage"
                    imageStyle={link.photo?.objectPosition ? { objectPosition: link.photo.objectPosition } : undefined}
                  />
                </div>
                <h3 className="mt-3.5 font-display text-[clamp(1.1875rem,1rem+0.6vw,1.75rem)] text-paper-100">
                  {link.name}
                </h3>
                <Link
                  href={link.href}
                  className="mt-2.5 inline-flex min-h-11 items-center border-b border-brass-500/45 pb-1 font-almanac text-[13px] tracking-label text-brass-500 transition-colors duration-150 ease-out hover:border-paper-100 hover:text-paper-100"
                >
                  {link.cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
