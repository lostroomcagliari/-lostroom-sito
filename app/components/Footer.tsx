const NAV_LINKS = [
  { href: '#format', label: 'Format' },
  { href: '#eventi', label: 'Eventi' },
  { href: '#team-building', label: 'Team building' },
  { href: '#chi-siamo', label: 'Chi siamo' },
  { href: '#contatti', label: 'Contatti' },
]

// Placeholder: URL social e pagine legali reali da collegare quando disponibili.
const SOCIAL_LINKS = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'Facebook' },
  { href: '#', label: 'WhatsApp' },
]

const LEGAL_LINKS = [
  { href: '#', label: 'Privacy' },
  { href: '#', label: 'Cookie' },
]

export default function Footer() {
  return (
    <footer className="border-t border-paper-100/15 bg-ink-900 px-5 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="inline-block border border-brass-500/60 px-2.5 py-1.5">
            <span className="block font-almanac text-[11px] tracking-kicker text-paper-100">LOST ROOM</span>
          </div>
          <p className="mt-4 max-w-[34ch] text-pretty text-base text-paper-100/80">
            Giochi, storie ed esperienze dal 2016. Cagliari, Sardegna.
          </p>
          <p className="mt-3 max-w-[34ch] font-body text-[1.0625rem] leading-[1.5] text-brass-500 italic">
            Sembriamo buoni ma siamo cattivi. O forse era il contrario.
          </p>
        </div>

        <nav aria-label="Sezioni principali" className="flex flex-col gap-2.5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-almanac text-[13px] tracking-label text-paper-100/80 transition-colors duration-150 ease-out hover:text-paper-100"
            >
              {link.label}
            </a>
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

        <div className="flex flex-col justify-between gap-6 sm:col-span-2 lg:col-span-1">
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
          <p className="text-caption text-paper-300">© {new Date().getFullYear()} Lost Room</p>
        </div>
      </div>
    </footer>
  )
}
