'use client'

import { useState, useSyncExternalStore } from 'react'
import Image from 'next/image'

const CONSENT_KEY = 'lr-video-consent'

// Nessun evento a cui iscriversi davvero (il consenso, una volta dato in
// questa sessione, resta in uno useState locale — vedi sotto): questo
// store esiste solo per leggere localStorage in modo sicuro per l'SSR,
// senza il classico "setState sincrono dentro un effect" che React
// sconsiglia (react-hooks/set-state-in-effect).
function subscribe() {
  return () => {}
}
function readStoredConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === '1'
  } catch {
    return false
  }
}
function noConsentOnServer() {
  return false
}

interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

/** Triangolo di play, un solo tratto — stessa famiglia delle icone busta/
 * cornetta nel Footer, non un'icona di libreria. */
function PlayIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden className="shrink-0">
      <path d="M1 1.5v23l20-11.5-20-11.5Z" fill="currentColor" />
    </svg>
  )
}

/**
 * Video YouTube con richiesta di consenso: nessun iframe/tracker di terze
 * parti carica finché la persona non clicca esplicitamente "Guarda il
 * video" — prima c'è solo un'anteprima statica (immagine, nessun cookie).
 * La scelta resta in localStorage, quindi non si ripete ai prossimi video
 * sulla stessa pagina o alla prossima visita dallo stesso browser.
 *
 * Dopo il consenso l'iframe punta a youtube-nocookie.com: la modalità a
 * privacy elevata di YouTube, che non imposta cookie di tracciamento
 * finché il video non viene effettivamente avviato.
 */
export default function YouTubeEmbed({ videoId, title, className = '' }: YouTubeEmbedProps) {
  const storedConsent = useSyncExternalStore(subscribe, readStoredConsent, noConsentOnServer)
  const [justClicked, setJustClicked] = useState(false)
  const consented = storedConsent || justClicked

  function grantConsent() {
    setJustClicked(true)
    try {
      localStorage.setItem(CONSENT_KEY, '1')
    } catch {
      // Storage non disponibile (navigazione privata, cookie bloccati): il
      // consenso vale comunque per questa sessione di pagina, via justClicked.
    }
  }

  return (
    <div className={`border border-brass-500/60 p-2 ${className}`}>
      <div className="relative aspect-video overflow-hidden bg-ink-800">
        {consented ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 1024px) 60vw, 90vw"
              className="object-cover"
            />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink-900/55" />
            <div aria-hidden className="pointer-events-none absolute inset-3 border border-brass-500/50 sm:inset-5" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <button
                type="button"
                onClick={grantConsent}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-paper-100 bg-seal-600 text-paper-100 shadow-[5px_5px_0_var(--color-brass-500)] transition-transform duration-150 ease-out active:translate-x-[2px] active:translate-y-[2px] active:shadow-[3px_3px_0_var(--color-brass-500)] motion-reduce:active:translate-x-0 motion-reduce:active:translate-y-0"
                aria-label={`Guarda il video: ${title}`}
              >
                <PlayIcon />
              </button>
              <p className="max-w-[46ch] text-pretty font-almanac text-[12px] tracking-label text-paper-100/75">
                Contenuto ospitato da YouTube (Google). Cliccando per guardarlo, vengono impostati cookie di terze
                parti.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
