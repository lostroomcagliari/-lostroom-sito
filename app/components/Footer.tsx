import Image from 'next/image'
import Link from 'next/link'

// Href assoluti ("/#…"): il footer vive anche sulle pagine format
// (/format/adventure-night e le prossime), non più solo in Home — vedi la
// stessa nota in Header.tsx.
const EXPLORE_LINKS = [
  { href: '/#format', label: 'Format' },
  { href: '/#addii', label: 'Addii al nubilato' },
  { href: '/#team-building', label: 'Team building' },
  { href: '/#eventi-privati', label: 'Eventi privati' },
  { href: '/#halloween', label: 'Halloween' },
  { href: '/#progetti', label: 'Progetti' },
]

const ABOUT_LINKS = [
  { href: '/#chi-siamo', label: 'Chi siamo' },
  { href: '/#eventi', label: 'Prossimi eventi' },
  { href: '/#contatti', label: 'Contatti' },
]

// Placeholder: URL social reali da collegare quando disponibili.
const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'WhatsApp' },
]

const LEGAL_LINKS = [
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Cookie' },
]

/** Busta — linea sola, stesso tratto sottile dei filetti del sito. */
function EnvelopeIcon() {
  return (
    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" aria-hidden className="shrink-0">
      <rect x="0.75" y="0.75" width="13.5" height="10.5" stroke="currentColor" strokeWidth="1" />
      <path d="M1 1.25 7.5 6.5 14 1.25" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}

/** Cornetta — linea sola. */
function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden className="shrink-0">
      <path
        d="M2 1.5c.6 2.3 1.5 4.2 3 5.7 1.5 1.5 3.4 2.4 5.7 3l1-1.9c-1.3-.5-2.3-.9-3-1.4l-1.2 1.1c-1.1-.7-1.9-1.5-2.6-2.6l1.1-1.2C5.5 3.6 5.1 2.6 4.6 1.3z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-paper-100/15 bg-ink-900">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:grid-cols-2 sm:px-10 sm:py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="w-[70px] mix-blend-screen">
            <Image src="/brand/logo.png" alt="Lost Room" width={512} height={512} className="h-auto w-full" />
          </div>
          <div className="mt-4 font-display text-2xl text-paper-100">LOST ROOM</div>
          <p className="mt-2.5 max-w-[34ch] text-pretty text-base text-paper-100/80">
            Giochi, storie ed esperienze dal 2016. Cagliari, Sardegna.
          </p>
          <p className="mt-3 max-w-[34ch] font-body text-[1.1875rem] leading-[1.5] text-brass-500 italic">
            Sembriamo buoni ma siamo cattivi. O forse era il contrario.
          </p>
          <div className="mt-4 flex flex-col gap-0.5 text-caption text-paper-300">
            <span>Lost Room di Filippo Manca</span>
            <span>Studio: Piazza del Carmine 22, Cagliari</span>
            <span>P. IVA 04185180926</span>
          </div>
        </div>

        <nav aria-label="Esplora" className="flex flex-col gap-2.5">
          {EXPLORE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Lo studio" className="flex flex-col gap-2.5">
          {ABOUT_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav aria-label="Social" className="flex flex-col gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-6 sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:info@lostroom.it"
              className="flex items-center gap-2 font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              <EnvelopeIcon />
              info@lostroom.it
            </a>
            <a
              href="tel:+390348384500"
              className="flex items-center gap-2 font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              <PhoneIcon />
              +39.348.0384500
            </a>
          </div>
          <nav aria-label="Legale" className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-almanac text-[12px] tracking-label text-paper-300 transition-colors duration-150 ease-out hover:text-paper-100"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-brass-500 px-5 py-3 text-center sm:px-10">
        <p className="text-caption text-ink-900">
          © {new Date().getFullYear()} Lost Room di Filippo Manca. Tutti i diritti riservati. Incisioni originali
          d&apos;epoca — Century Library.
        </p>
      </div>
    </footer>
  )
}
