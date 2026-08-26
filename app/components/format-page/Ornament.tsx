import Image from 'next/image'
import type { OrnamentSpec } from './types'

interface OrnamentProps {
  spec: OrnamentSpec
  /** "height": l'immagine riempie l'altezza del suo contenitore (riga
   * flex affiancata al testo) — w-auto, object-contain.
   * "width": l'immagine riempie la larghezza della sua colonna — l'uso più
   * comune (bussola, romano, la maggior parte dei casi). Il dimensionamento
   * vero e proprio resta comunque al chiamante, via il wrapper attorno a
   * questo componente: qui si sceglie solo la regola di adattamento. */
  fit?: 'height' | 'width'
  className?: string
}

/**
 * Incisione decorativa parametrica — slot riutilizzabile in ogni pagina
 * format/verticale. Il trattamento colore replica quello già in uso nel
 * resto del sito per le stesse incisioni monocromatiche (Button.tsx tone
 * "tertiary", StartingPoints.tsx, Halloween.tsx): "invert" le rende chiare
 * su fondo scuro, "mix-blend-multiply" le fonde con la carta. "plate" non
 * applica alcun filtro — per una tavola già a colori con un fondo proprio
 * (es. la falena), non per le silhouette nero-su-trasparente.
 *
 * Dimensione e posizione (riempire lo spazio disponibile, mai un ornamento
 * isolato nel vuoto) restano responsabilità del chiamante tramite il
 * wrapper: questo componente sceglie solo trattamento colore, specularità
 * e regola di adattamento (fit).
 */
export default function Ornament({ spec, fit = 'width', className = '' }: OrnamentProps) {
  const treatment =
    spec.contrast === 'on-dark' ? 'invert' : spec.contrast === 'on-light' ? 'mix-blend-multiply' : ''
  const sizing = fit === 'height' ? 'h-full w-auto object-contain' : 'h-auto w-full'

  return (
    <Image
      src={spec.src}
      alt={spec.alt ?? ''}
      width={spec.width}
      height={spec.height}
      className={`${sizing} ${treatment} ${spec.mirror ? '-scale-x-100' : ''} ${className}`}
    />
  )
}
