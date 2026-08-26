'use client'

import { useState } from 'react'
import type { FaqItem } from './types'

/**
 * Accordion FAQ — apertura singola (aprirne una chiude l'altra), coerente
 * con il mockup di riferimento. A differenza di Bignami/Archivio qui
 * nascondere la risposta dietro un click è corretto: la FAQ è
 * approfondimento supplementare, non il blocco essenziale (durata, prezzo,
 * partecipanti, prenotazione vivono già in vista in "Il bignami").
 */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="border-t border-paper-100/25">
      {items.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.question} className="border-b border-paper-100/25">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex min-h-12 w-full items-baseline gap-4 py-4 text-left transition-colors duration-150 ease-out hover:text-brass-500"
            >
              <span aria-hidden className={`shrink-0 text-brass-500 transition-transform duration-300 ease-out ${open ? 'rotate-90' : ''}`}>
                ✳︎
              </span>
              <span className="flex-1 font-display text-[clamp(1.1875rem,1rem+0.6vw,1.5rem)] leading-[1.3] text-paper-100">
                {item.question}
              </span>
              <span aria-hidden className="shrink-0 font-almanac text-xl text-brass-500">
                {open ? '–' : '+'}
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-[60ch] pb-5 pl-8 text-pretty text-base text-paper-100/70">{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
