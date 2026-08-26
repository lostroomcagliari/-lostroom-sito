import type { FormatPageContent } from '../../components/format-page/types'

/**
 * Contenuti reali di /format/adventure-night — testi approvati nel mockup
 * Claude Design "Lost Room - Adventure Night (standalone)" (docs/reference),
 * riportati parola per parola. Le uniche eccezioni sono segnalate inline:
 * le 4 risposte FAQ restano il segnaposto già presente nel mockup originale
 * (in attesa dei testi definitivi — CLAUDE.md vieta di inventarli).
 */
const content: FormatPageContent = {
  slug: 'adventure-night',

  hero: {
    eyebrow: "UN FORMAT ORIGINALE LOST ROOM · GIOCO D'AZIONE · DAL 2018",
    title: 'Adventure Night',
    lead: 'Di notte. Con una torcia. Dove normalmente non giocheresti.',
    photo: { label: "Foto d'apertura — squadra con torce, notte, luogo reale" },
  },

  opening: {
    lead: 'Musei, siti archeologici, parchi naturali, giardini e luoghi culturali diventano per una notte il terreno di una missione da portare a termine.',
    body: 'Si gioca in squadra, ci si muove con mappe e torce, si attraversano checkpoint, si risolvono enigmi, si cercano dettagli e si incontrano personaggi.',
    accent: 'Più o meno quello che succede in una escape room. Solo che il soffitto è il cielo stellato.',
  },

  bignami: {
    eyebrow: 'SETTE RISPOSTE, NESSUN CLICK',
    title: 'Il bignami',
    lead: 'Per chi vuole andare dritto al sodo.',
    items: [
      {
        label: 'Durata',
        lines: [{ text: 'In genere tra 75 e 120 minuti, a seconda del luogo e dell’avventura.', type: 'display' }],
      },
      {
        label: 'Quante persone',
        lines: [
          {
            text: 'Adventure Night nasce per far giocare molte persone contemporaneamente (da 15 a oltre 200), suddivise in squadre.',
            type: 'display',
          },
          { text: 'La capienza cambia da un’edizione all’altra perché dipende dagli spazi, dai percorsi e dalle caratteristiche della location.' },
        ],
      },
      {
        label: 'Dove',
        lines: [
          {
            text: 'In luoghi che abbiano una storia da raccontare e abbastanza spazio da esplorare: siti archeologici, musei, parchi, giardini, spazi naturali e luoghi culturali.',
            type: 'display',
          },
          { text: 'Ogni Adventure Night viene progettata appositamente per il luogo che la ospita, nel rispetto delle sue caratteristiche e dei suoi vincoli.' },
        ],
      },
      {
        label: 'A chi è adatta',
        lines: [
          { text: 'A chi ama esplorare, muoversi, osservare, scoprire luoghi, risolvere enigmi e vivere avventure.', type: 'display' },
          { text: 'È il format giusto per chi vuole sentirsi dentro una missione più che assistere a qualcosa che succede.' },
          { text: 'Non servono particolari competenze. Serve essere curiosi e avere voglia di guardarsi intorno un po’ meglio del solito.' },
        ],
      },
      {
        label: 'Come si gioca',
        lines: [
          { text: 'In squadra, di notte, con torcia e mappa.', type: 'display' },
          { text: 'Si segue un percorso prestabilito per portare a termine una missione.' },
        ],
        jumpLink: { label: 'Come si gioca davvero ↓', href: '#come-si-gioca-davvero' },
      },
      {
        label: 'Cosa serve',
        lines: [
          { text: 'Abbigliamento comodo, scarpe adatte al luogo, torce, cellulari carichi e voglia di esplorare.', type: 'display' },
          { text: 'Mappe e altri eventuali strumenti di gioco vengono forniti da noi oppure indicati chiaramente prima dell’evento.' },
          { text: 'Se una location presenta requisiti particolari di accessibilità, percorrenza o abbigliamento, lo diciamo sempre prima della prenotazione.' },
        ],
      },
      {
        label: 'Quanto costa?',
        highlight: true,
        lines: [
          { text: 'Dipende da come nasce l’Adventure Night.' },
          { text: 'Quando viene realizzata all’interno di un progetto culturale, territoriale o istituzionale, la partecipazione per il pubblico può essere anche completamente gratuita.' },
          { text: 'Quando invece è organizzata come evento a pagamento, viene definito un ticket che comprende sia l’ingresso alla location sia la partecipazione al gioco.' },
          { text: 'Il prezzo cambia quindi in base al luogo, al progetto e alla formula scelta. Quando c’è una data in programma, trovi sempre il costo indicato chiaramente prima di prenotare.' },
        ],
      },
    ],
    datesBridge: {
      lead: 'Le date aperte al pubblico cambiano ogni anno: quando ce n’è una, la trovi qui con costo e location.',
      cta: { label: 'Vedi le prossime date', href: '/#eventi' },
    },
    ornament: {
      src: '/ornaments/falenagialloblu.png',
      width: 3317,
      height: 3502,
      contrast: 'plate',
      mirror: true,
    },
  },

  archivioIntro: {
    eyebrow: "DA QUI IN GIÙ, L'ARCHIVIO",
    lead: 'Fin qui il necessario.',
    accent: 'Sotto ci sono le storie dietro le storie.',
  },

  origin: {
    eyebrow: 'ARCHIVIO · COME È NATA',
    heading: 'Tutto è cominciato da alcune stanze a cielo aperto.',
    photo: { label: "Foto d'archivio — gli scavi della Villa di Tigellio, 2018" },
    columns: [
      [
        { text: 'Nel 2018 ci contattano per organizzare una Cena con Delitto alla Villa di Tigellio, a Cagliari.\nL’idea sulla carta funzionava.\nLa logistica, un po’ meno.' },
        {
          text: 'Come spesso succede, è stato il sopralluogo a cambiare tutto.\nScendiamo tra gli scavi e guardiamo i resti delle antiche strutture murarie della domus romana.\nSembravano stanze.\nE lì arriva la domanda.',
        },
        { text: 'E se facessimo un’escape room dentro un sito archeologico che, in fondo, le stanze le aveva già?', type: 'accent' },
        { text: 'Solo che il soffitto sarebbe stato il cielo. E avremmo potuto giocare di notte, con le torce.' },
        {
          text: 'Da lì è nata Adventure Night: un gioco che ti riporta immediatamente a quando avevi nove anni, le ginocchia sbucciate, una torcia in mano e abbastanza curiosità — e incoscienza — da voler sapere cosa c’è dietro quel cespuglio.',
          type: 'display',
        },
      ],
      [
        { text: 'A quel punto abbiamo capito che lo stesso principio poteva funzionare in luoghi completamente diversi, purché avessero qualcosa da raccontare e uno spazio da esplorare.' },
        { text: 'Negli anni Adventure Night è entrata in siti archeologici, musei, parchi naturali, giardini e luoghi culturali molto diversi tra loro.' },
        { text: 'E abbiamo imparato una cosa importante: lavorare in questi spazi significa riuscire a far convivere immaginazione e realtà.' },
        {
          text: 'Ci sono storie vere da rispettare, luoghi da tutelare, persone da far muovere in sicurezza, regole da seguire, contenuti scientifici da trattare con cura e sensibilità, specie botaniche e animali da non disturbare e autorizzazioni che esistono per ottime ragioni.',
        },
        { text: 'Il gioco deve funzionare dentro tutto questo. Non nonostante tutto questo.', type: 'display' },
        {
          text: 'È probabilmente la parte del lavoro che si vede meno.\nEd è quella che ci permette, da anni, di lavorare in sintonia con chi gestisce gli spazi e continuare a giocare in posti in cui normalmente nessuno penserebbe di farlo.',
        },
      ],
    ],
  },

  howToPlay: {
    eyebrow: 'ARCHIVIO · IL GIOCO DA DENTRO',
    heading: 'Come si gioca davvero',
    lines: [
      { text: 'Puoi iscriverti con il tuo team di escapers oppure entrare in una squadra mista e ritrovarti a giocare insieme a persone che fino a pochi minuti prima non conoscevi.' },
      { text: 'All’inizio ricevete una missione, una mappa e quello che vi serve.\nPoi si parte.' },
      {
        text: 'Il percorso è organizzato in checkpoint. A ogni tappa può aspettarvi qualcosa di diverso: un enigma, una prova fisica, un particolare da individuare, qualcosa da trovare oppure un personaggio con cui capire come interagire.',
      },
      { text: 'Chi ha già giocato un’escape room riconoscerà diverse dinamiche: osservare, collegare informazioni, collaborare, tentare, sbagliare e riprovare.' },
      { text: 'La differenza è che qui non siete chiusi in una stanza.', type: 'display' },
      { text: 'Siete fuori, di notte, con una torcia in mano, una mappa da seguire e un luogo reale tutto intorno.' },
      { text: 'E il luogo non è semplicemente uno sfondo, è tutto: profumi, suoni, atmosfera.', type: 'accent' },
      { text: 'Ci si muove rispettando gli spazi che attraversiamo e, quando giochiamo in ambienti naturali, anche le specie botaniche e animali che li abitano.' },
    ],
    photo: { label: 'Foto — un checkpoint, torce sul dettaglio', caption: 'Checkpoint' },
    weather: {
      kicker: 'LA VARIABILE CHE NON POSSIAMO PROGRAMMARE',
      title: 'Il meteo.',
      lines: [
        { text: 'Le Adventure Night si giocano con tutte le condizioni atmosferiche che permettono di farlo in sicurezza. Solo se il tempo comporta un rischio reale, ci fermiamo.' },
        { text: 'Ma il fresco, il vento, l’umidità o qualche goccia di pioggia?\nQuelli possono diventare parte dell’avventura.' },
        {
          text: 'In un mondo in cui vogliamo controllare ogni cosa e pensiamo che la pioggia possa rovinare qualunque esperienza, noi abbiamo imparato il contrario: il meteo, quando collabora, è un effetto speciale premium.',
          type: 'accent',
        },
      ],
      ornament: { src: '/ornaments/ombrello.png', width: 2178, height: 2349, contrast: 'on-dark' },
    },
  },

  universe: {
    eyebrow: "ARCHIVIO · L'UNIVERSO NARRATIVO",
    heading: 'Ogni Adventure Night ha il suo mondo',
    lines: [
      { text: 'Non basta mettere alcuni enigmi lungo un percorso.\nAdventure Night è un’esperienza immersiva e ogni edizione vive dentro un universo narrativo tutto suo.' },
      {
        text: 'Può essere un mistero storico, un thriller, una storia di fantascienza, un’avventura, un horror o qualcosa che mescola abbastanza generi da rendere complicato decidere in quale scaffale metterlo.',
      },
      { text: 'Per noi la cosa importante è un’altra:\nquando giochi, devi avere la sensazione di essere entrato davvero in quella storia.', type: 'display' },
      {
        text: 'Ed è qui per noi la parte più divertente di questo lavoro. Oltre ovviamente a regalarvi con la complicità del buio, qualche spavento improvviso ogni tanto.',
        type: 'accent',
      },
    ],
    ornament: { src: '/ornaments/bussola.png', width: 674, height: 675, contrast: 'on-dark' },
  },

  editions: {
    eyebrow: 'ARCHIVIO · CINQUE EDIZIONI, 2018 → 2025',
    heading: 'Le notti che abbiamo attraversato, le avventure che abbiamo vissuto.',
    items: [
      { year: '2018', title: 'Villa di Tigellio', location: 'Cagliari', replicas: '15', players: '450' },
      {
        year: '2019',
        title: 'Escape the Museum',
        location: "Galleria Comunale d'Arte e Giardini Pubblici, Cagliari",
        replicas: '3',
        players: '350',
      },
      {
        year: '2021',
        title: 'Molentargius',
        location: 'Parco Naturale Regionale Molentargius-Saline',
        replicas: '4',
        players: '400',
      },
      { year: '2022', title: 'SHARPER Night', location: 'Orto Botanico di Cagliari', replicas: '2', players: '400' },
      {
        year: '2024–2025',
        title: 'La maledizione di Noranji',
        location: 'Area Archeologica di Nora',
        replicas: '18',
        players: 'oltre 600',
      },
    ],
    closingOrnament: { src: '/ornaments/romano.png', width: 1210, height: 2442, contrast: 'on-dark' },
  },

  stats: {
    eyebrow: 'FINORA',
    items: [
      { value: '42', label: 'Repliche' },
      { value: '2.200+', label: 'Partecipazioni' },
      { value: '5', label: 'Mondi completamente diversi' },
    ],
    quote:
      'Su tutte le persone che a un certo punto, ogni anno, hanno chiesto: “Ma siamo sicuri che dobbiamo andare proprio lì al buio?”, preferiamo non esprimerci.',
    ornament: { src: '/ornaments/binocolo.png', width: 1059, height: 1943, contrast: 'on-light' },
  },

  nextPlace: {
    id: 'contatti',
    eyebrow: 'PER CHI GESTISCE UN LUOGO',
    heading: 'E il prossimo posto?',
    ornament: { src: '/ornaments/posto.png', width: 1115, height: 2235, contrast: 'on-light' },
    lines: [
      {
        text: 'Adventure Night nasce dal 2018 per portare il gioco dentro luoghi che hanno qualcosa da raccontare e in cui, in genere, non è consentito giocare.',
      },
      { text: 'Se gestisci un sito culturale, un museo, un parco, uno spazio naturale o un territorio e mentre leggevi hai pensato «qui così potrebbe funzionare», raccontaci dove.' },
      { text: 'Non sappiamo ancora che cosa ci faremo.\nEd è esattamente il punto più divertente da cui partire.', type: 'accent', tone: 'seal' },
    ],
    cta: { label: 'Ho avuto un’idea strana', href: '/#contatti' },
    backLink: { label: '↑ Torna al bignami', href: '#bignami' },
  },

  faq: {
    heading: 'Domande frequenti',
    placeholderBadge: 'Segnaposto — testi in arrivo',
    items: [
      {
        question: 'Serve esperienza con le escape room per partecipare?',
        answer:
          '[Testo segnaposto — in attesa della risposta definitiva. Questo paragrafo esiste solo per mostrare spaziatura, misura di riga e animazione di apertura del componente.]',
      },
      {
        question: 'Posso partecipare da solo o con i bambini?',
        answer: '[Testo segnaposto — in attesa della risposta definitiva.]',
      },
      {
        question: 'Cosa succede se piove?',
        answer: '[Testo segnaposto — in attesa della risposta definitiva.]',
      },
      {
        question: 'Come si prenota e cosa comprende il biglietto?',
        answer: '[Testo segnaposto — in attesa della risposta definitiva.]',
      },
    ],
  },

  crossLinks: {
    heading: 'Gli altri format Lost Room',
    items: [
      {
        name: 'Cena con Delitto',
        cta: 'Entra nella storia',
        href: '/#format',
        // Stessa foto e didascalia già usate per Cena con Delitto in
        // FormatSection.tsx (Home) — un solo scatto reale, non uno per
        // sezione.
        photo: { src: '/foto/2.png', label: 'Scena del delitto Lost Room, vista dall’alto delle scale' },
      },
      {
        name: 'Mystery Dinner',
        cta: 'Inizia a indagare',
        href: '/#format',
        photo: { src: '/foto/3.png', label: 'Prove sul tavolo di una Mystery Dinner Lost Room' },
      },
      {
        name: 'Team Building',
        cta: 'Scopri il team building',
        href: '/#team-building',
        photo: { src: '/foto/team-building.png', label: 'Team building Lost Room, colleghi al lavoro sotto pressione' },
      },
    ],
  },
}

export default content
