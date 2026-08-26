/**
 * Contenuti di una pagina format/verticale, dati in pasto a
 * <FormatPageTemplate>. Un file per pagina (es. app/format/adventure-night/
 * content.ts) esporta un oggetto di questo tipo: stessa struttura, stesso
 * meccanismo di incisioni, stesso layout — cambiano solo i valori.
 */

/** Riga di testo semplice, oppure un punto di enfasi: "display" per la frase
 * cardine (Bodoni più grande, nessun corsivo), "accent" per la battuta a
 * effetto in corsivo brass/seal — le due enfasi già in uso in tutto il
 * resto del sito (OurWay, Halloween, Contact…). `text` può contenere "\n"
 * per gli a-capo interni al paragrafo (equivalente ai <br/> manuali usati
 * altrove), senza aprire un nuovo blocco/paragrafo. */
export interface CopyLine {
  text: string
  type?: 'body' | 'display' | 'accent'
  tone?: 'brass' | 'seal'
}

/** Incisione decorativa parametrica (vedi Ornament.tsx). `contrast` sceglie
 * il trattamento colore in base allo sfondo su cui appoggia:
 * - "on-dark": inverte il nero in chiaro (fondo inchiostro/velluto)
 * - "on-light": lascia l'inchiostro originale, fuso con mix-blend-multiply
 *   (fondo carta)
 * - "plate": nessun filtro — per incisioni già a colori con un proprio
 *   fondo (es. la falena, una vera tavola naturalistica d'epoca), non le
 *   silhouette monocromatiche di mano/luna/occhio e affini. */
export interface OrnamentSpec {
  src: string
  width: number
  height: number
  contrast: 'on-dark' | 'on-light' | 'plate'
  mirror?: boolean
  alt?: string
}

export interface BignamiItem {
  label: string
  lines: CopyLine[]
  jumpLink?: { label: string; href: string }
  /** La voce "cercata di più" (di solito il prezzo): occupa l'intera riga
   * della griglia, fondo leggermente più scuro (paper-200) per distinguerla,
   * e le righe oltre la prima si dispongono in colonne invece che impilate
   * — non un caso hardcoded nel template, è un dato di questa voce. */
  highlight?: boolean
}

export interface Edition {
  year: string
  title: string
  location: string
  replicas: string
  players: string
  photo?: { src?: string; label: string }
  /** Retro della scheda: la card gira al passaggio del mouse (desktop con
   * hover reale) o al tap/click (touch e da tastiera) e mostra
   * l'approfondimento narrativo dell'edizione. Opzionale: senza `back` la
   * scheda resta semplicemente statica, front-only. */
  back?: {
    /** "2018 · CAGLIARI" — anno e location, sopra il titolo sul retro. */
    badge: string
    lines: CopyLine[]
  }
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CrossLink {
  name: string
  /** Riga breve sotto il titolo, solo per chi ne ha bisogno (es. Team
   * Building: una foto già "raccontata" da una battuta che prima stava in
   * overlay sulla foto stessa, spostata qui come testo normale). */
  tagline?: string
  cta: string
  href: string
  photo?: {
    src?: string
    label: string
    /** object-position CSS quando il soggetto della foto non è centrato
     * (es. una polaroid ruotata: va scelto un punto che eviti la cornice
     * bianca e la didascalia stampata nella foto). */
    objectPosition?: string
  }
}

export interface FormatPageContent {
  /** slug della pagina, es. "adventure-night" — usato per gli id univoci
   * quando il template genera più pagine sullo stesso dominio. */
  slug: string

  hero: {
    eyebrow: string
    title: string
    lead: string
    photo: { src?: string; label: string }
  }

  /** "Apertura" — le poche righe subito sotto l'hero, prima del sotto-menu. */
  opening: { lead: string; body: string; accent: string }

  bignami: {
    eyebrow: string
    title: string
    lead: string
    items: BignamiItem[]
    /** ponte finale verso le date reali (blocco essenziale, sempre in vista
     * — mai dietro l'expand: docs/design-system.md). */
    datesBridge: { lead: string; cta: { label: string; href: string } }
    ornament: OrnamentSpec
  }

  archivioIntro: { eyebrow: string; lead: string; accent: string }

  origin: {
    eyebrow: string
    heading: string
    photo: { src?: string; label: string }
    columns: [CopyLine[], CopyLine[]]
  }

  howToPlay: {
    eyebrow: string
    heading: string
    lines: CopyLine[]
    photo: { src?: string; label: string; caption: string }
    weather: { kicker: string; title: string; lines: CopyLine[]; ornament: OrnamentSpec }
  }

  universe: {
    eyebrow: string
    heading: string
    lines: CopyLine[]
    ornament: OrnamentSpec
  }

  editions: {
    eyebrow: string
    heading: string
    items: Edition[]
    closingOrnament: OrnamentSpec
  }

  stats: {
    eyebrow: string
    items: { value: string; label: string }[]
    quote: string
    ornament: OrnamentSpec
  }

  nextPlace: {
    id: string
    eyebrow: string
    heading: string
    ornament: OrnamentSpec
    lines: CopyLine[]
    cta: { label: string; href: string }
    backLink: { label: string; href: string }
  }

  faq: {
    heading: string
    /** Solo mentre le risposte sono ancora segnaposto — badge "testi in
     * arrivo" accanto al titolo. Omesso quando le risposte sono reali. */
    placeholderBadge?: string
    items: FaqItem[]
  }

  /** Video professionale che apre l'Archivio, subito dopo "Gira pagina" —
   * approfondimento, non informazione essenziale, per questo vive qui e non
   * nel Bignami. Opzionale: senza `archivioVideo` l'Archivio comincia
   * direttamente con "Come è nata". */
  archivioVideo?: { eyebrow: string; videoId: string; title: string }

  crossLinks: {
    heading: string
    items: CrossLink[]
  }
}
