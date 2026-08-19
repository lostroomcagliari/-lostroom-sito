const STATS = [
  { value: '2016', label: 'La prima porta chiusa' },
  { value: '+20.000', label: 'Persone hanno giocato con noi' },
  { value: '+200', label: 'Eventi organizzati' },
  { value: '4', label: 'Escape room create (2016–2020)' },
  { value: '3', label: 'Format proprietari' },
  { value: '+50', label: 'Aziende lavorano con noi' },
]

/** Numeri in stile registro/almanacco — niente card, solo un filetto sopra
 * e uno sotto (docs/design-system.md: mai il template "big number + card"). */
export default function Stats() {
  return (
    <section
      aria-label="Lost Room in numeri"
      className="bg-paper-lines bg-paper-100 px-5 pb-14 text-ink-900 sm:px-10 sm:pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t-2 border-ink-900 border-b border-ink-900/25 py-8 sm:grid-cols-3 sm:gap-x-8 lg:grid-cols-6 lg:py-10">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-[clamp(1.875rem,1.4rem+2vw,3rem)] leading-none text-ink-900">
                {stat.value}
              </div>
              <div className="mt-2 font-almanac text-[11px] leading-[1.4] tracking-label text-paper-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
