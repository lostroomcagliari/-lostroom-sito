/**
 * Sorgente unica dei tre format Lost Room, usata sia dal dropdown "Format"
 * dell'header sia dai link "Gli altri format" a fondo pagina — così un
 * format che passa da "in arrivo" a pubblicato si aggiorna in un solo
 * punto, non in ogni componente che lo linka.
 *
 * `href: null` = pagina non ancora costruita: il nome compare comunque nei
 * menu (va "predisposto fin da ora", non nascosto), ma senza link a una
 * rotta che darebbe 404.
 */
export interface FormatNavEntry {
  slug: string
  name: string
  href: string | null
}

export const FORMAT_NAV: FormatNavEntry[] = [
  { slug: 'adventure-night', name: 'Adventure Night', href: '/format/adventure-night' },
  { slug: 'cena-con-delitto', name: 'Cena con Delitto', href: null },
  { slug: 'mystery-dinner', name: 'Mystery Dinner', href: null },
]
