# Lost Room — Design System (riferimento rapido)

Fonte completa: `Lost_Room_Brand_System.pdf` (Manuale di Identità, edizione 2026).
Questo file è la versione compatta per consultazione rapida durante lo sviluppo.

## Colori (Tailwind — già in tailwind.config.ts)
- `ink` (900 #14110F, 800 #241E1A, 700 #3A3128) — sfondo principale, il buio in cui si gioca
- `paper` (100 #F1E7D3, 200 #E4D6BC, 300 #C4B393, 400 #7B6A50) — sfondo secondario, sezioni di lettura
- `brass` (500 #A97E3C) — accento primario: occhielli, filetti, link. MAI come testo <18px su inchiostro
- `seal` (600 #7B1D14) — accento d'azione: UNA sola CTA per schermata, mai decorativo
- `velvet` (700 #39463A) — terziario: fondi alternativi, massimo uno per pagina
- Proporzioni d'uso: 60% inchiostro · 28% carta · 6% ottone · 4% ceralacca · 2% velluto
- Contrasto: testo su ceralacca solo su carta (7.1:1)

## Font
- **display** (titoli): Bodoni Moda — weight 400, corsivo per la parte "che fa la battuta"
- **body** (corpo testo): EB Garamond — leading 1.6, misura ideale riga 62-68 caratteri
- **almanac** (etichette/citazioni): IM Fell English SC — SOLO per occhielli, numeri sezione, timbri, citazioni in corsivo. Mai per un paragrafo intero
- Tutti disponibili su Google Fonts, licenza OFL, integrare via `next/font/google`

## Gerarchia tipografica (desktop/mobile)
H1 84/44px · H2 52/34px · H3 34/26px · H4 24/21px · H5 18px (maiuscoletto) · H6 13px (kicker) · Body 19/17px · Caption 14px

## Stile grafico — regole rigide
- Bordi: SEMPRE spigolo vivo, `border-radius: 0`. Curve solo nei timbri
- Ornamenti (occhio, luna, mano, falena): UNO SOLO per sezione, mai come icone di lista, mai ripetuti a pattern, mai dentro bottoni/card
- Foto: vignettatura (buio ai bordi, luce sui volti), sfocature/mosso del momento di gioco restano
- Texture: righe carta 4px opacità 5% (sfondi chiari); doppio alone morbido su inchiostro (sfondi scuri) — MAI gradient generico

## Movimento — solo questi 3, non altri
1. **Sipario**: immagini si scoprono dall'alto verso il basso (clip-path, 900ms, ease-out)
2. **Dettatura**: testo hero si scrive per righe, 120ms di ritardo tra righe
3. **Oggetto fisico**: bottoni/ticket si abbassano di 2px al click, ombra si accorcia

## Griglia responsive
- Mobile (375px): 1 colonna, margini 20px, bottoni piena larghezza impilati min 48px
- Tablet (768px): 2 colonne, margini 40px, blocchi format sfalsati (seconda colonna -64px)
- Desktop (1440px): griglia 12 colonne, gutter 24px, contenuto max 1440px. Immagini possono uscire a bordo schermo, il testo mai

## Tone of voice — regole per i microcopy
- Diamo del **voi** al gruppo, del **tu** alla persona singola
- Niente punti esclamativi, niente emoji, niente "scopri di più"
- Il prezzo si scrive in una frase ("25€ a testa, 6 persone, 90 minuti"), mai come tag isolato su una card
- Ogni messaggio di stato/errore ammette qualcosa (un limite, un difetto) — mai neutro/robotico
- Bottone primario: ceralacca con ombra piena (`shadow-stamp`) — es. "SCOPRI COSA FACCIAMO"
- Bottone secondario: filetto/bordo, si riempie di inchiostro all'hover — es. "CONTATTACI"
- Bottone terziario: usa l'icona mano che indica, UNA sola volta per schermata

## Pattern trasversale — due livelli di profondità (OGNI pagina format)
Il sito è leggibile a due livelli, come i giochi Lost Room: chi vuole solo
l'informazione pratica la trova subito; chi vuole fermarsi trova le storie
dietro le storie. Applicare su OGNI pagina format:
- **Blocco essenziale**: sempre visibile, mai dietro un click/accordion —
  durata, prezzo (in una frase, mai come tag isolato — vedi Tone of voice),
  partecipanti, CTA di prenotazione
- **Sezioni di approfondimento**: espandibili (accordion o "leggi la storia"),
  opzionali — origine del format, aneddoti, foto d'archivio, retroscena
- Non nascondere MAI il blocco essenziale dentro un expand: è l'opposto del
  principio (chi ha fretta non deve cercare)

## Logo
- Versione primaria: targa su fondo inchiostro (cornice strappata è parte del logo, mai tagliata)
- Versione inversa: su carta, per stampe/ticket
- Timbro/monogramma "LR": solo sotto 48px o come sigillo (favicon, avatar social)
- Area di rispetto: X = altezza della lettera L, nessun testo/foto/bordo dentro quell'area
- Dimensione minima: 96px larghezza logo completo, 32px timbro
- Mai: ritagliare la cornice, aggiungere ombre/gradient/3D, appoggiare su foto senza plate scuro, cambiare font
