# Lost Room — Sito Istituzionale (lostroom.it)

## Contesto
Lost Room è uno studio di experience design (escape room, adventure night, cena con
delitto, mystery dinner, team building, addii al nubilato, eventi speciali) fondato a
Cagliari nel 2016 da Fausta Laddomada e Filippo Manca. Questo repository contiene il
nuovo sito su lostroom.it, che sostituisce il vecchio sito PHP (non più aggiornabile
per limiti di hosting Aruba).

## Ecosistema digitale collegato
- **lostroom.it** — questo sito. Sito istituzionale principale: TUTTI i format, eventi
  e landing page convogliano qui (in costruzione)
- **lostroom.studio** — sistema di appoggio tecnico, pagine interattive per team
  building (quiz live, classifiche). Non più sito vetrina. Non toccare in questo repo.
- **lostcase.it** — mystery dinner pubbliche, gioco di Cabras, futura destinazione dei
  giochi fisici retail (Drift, GDR, board game). Separato, non toccare in questo repo.

## Stack tecnico
- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy su Vercel
- Integrazione Brevo per raccolta lead/automazioni email (no sistema di prenotazione
  con gestione posti: non necessario, vedi funnel sotto)

## Architettura del sito
Vedi documento completo `Architettura_LostRoom_2026.md` per la struttura dettagliata
di tutte le pagine. Riepilogo sezioni principali:
`/format` · `/addii-al-nubilato` · `/team-building` · `/eventi-privati` · `/halloween`
(con sottopagine annuali 2022–2026) · `/progetti` (eventi-speciali, istituzionali,
progetti-pilota — una pagina dedicata per ogni singolo progetto, non un elenco unico)
· `/prossimi-eventi` (niente calendario tradizionale, vedi nota dedicata nel documento
architettura)

## Funnel di prenotazione (non cambia con il nuovo sito)
1. Partner esterno → bottone/link esterno, nessuno sviluppo
2. Prevendita diretta → form → Brevo (tag evento) → email automatica con coordinate
   di pagamento → cliente manda ricevuta bonifico via WhatsApp → conferma manuale

## Regole generali
- Non inventare mai contenuti/testi/dati: chiedere sempre se mancano informazioni reali
- **Sito completamente responsive**: ogni pagina, componente e layout deve funzionare
  correttamente su mobile, tablet e desktop. Priorità mobile-first nello sviluppo
  Tailwind (breakpoint standard: sm/md/lg/xl). Nessuna pagina va considerata
  completa finché non è verificata su almeno 3 dimensioni di schermo
- Componenti riutilizzabili per pagine simili (format, progetti, halloween annuali)
- Design system definito separatamente con Claude Design → tradurre in componenti
  Tailwind quando disponibile
- Font/palette/asset grafici: alcuni riferimenti visivi vengono da centurylibrary.com
  (font e ornamenti in stile vintage/pulp) — usare come ispirazione stilistica, non
  copiare asset protetti da licenza senza verificarne l'uso commerciale consentito

## SEO / migrazione
lostroom.it ha posizionamento storico forte su "addii al nubilato Cagliari" e "team
building Sardegna". Mappare URL vecchi → nuovi 1:1 dove possibile, redirect 301 dal
vecchio sito PHP.

---

## Tono di voce e identità di brand — LEGGERE SEMPRE PRIMA DI SCRIVERE QUALSIASI TESTO

**Regola non negoziabile: il sito non deve MAI sembrare scritto o progettato con
l'AI.** Niente delle solite impostazioni da "sito generico da escape room/team
building aziendale" — niente frasi fatte tipo "vivi un'esperienza indimenticabile",
niente struttura prevedibile a blocchi con emoji e checklist, niente tono neutro da
corporate copywriting. Se un testo generato suona come potrebbe stare su qualsiasi
altro sito di eventi, va riscritto. Attivare la skill di scrittura "impeccabile" per
il controllo qualità dei testi prima di considerarli definitivi.

**Chi siamo, in una frase:** siamo gli amici che ti portano a giocare dove non te lo
aspetti. Sembriamo buoni ma siamo cattivi (o viceversa).

**Personalità:**
- Autoironici e diretti, mai piatti
- Nerd e citazionisti — riferimenti trasparenti a Disney classico, stile MinaLima,
  Agatha Christie, Stephen King, Lost, Black Mirror, Stranger Things, Breaking Bad.
  L'intero universo Lost Room reinterpreta a modo suo narrazioni amate, non le imita
- Sarcastici ogni tanto, mai sopra le righe
- Aperti, inclusivi, estremamente relazionali — il gioco per Lost Room è prima di
  tutto relazione: con noi ti stupisci, ti diverti, ti senti tra amici, a volte ti
  facciamo anche spaventare. Questo è il cuore della brand identity, più di ogni
  altra cosa
- Due millennials che amano le storie e il gioco — questo è fondativo, non un
  vezzo di marketing

**Stile di scrittura:**
- Verboso ma scorrevole, come leggere un buon libro o seguire una sceneggiatura
  con dialoghi intelligenti — non frasi telegrafiche da landing page generica
- Battute intelligenti, a tratti sarcastiche, mai forzate
- Vintage, nostalgia, mistero come atmosfera — ma senza scadere nel gotico pesante

**Riferimenti visivi:** asset grafici (PNG/SVG) da centurylibrary.com verranno
caricati come riferimento per font e ornamenti in stile vintage/pulp — coerenti con
l'estetica vintage/nostalgia/mistero sopra descritta.

---

## Prossimi passi
1. Design system con Claude Design (palette, font, componenti base)
2. Prototipo Home + una pagina tipo (es. `/format/adventure-night`)
3. Costruzione componenti condivisi (header, footer, card evento, form di contatto)
