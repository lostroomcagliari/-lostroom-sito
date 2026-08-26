import type { FormatPageContent } from '../../components/format-page/types'

/**
 * Contenuti reali di /format/adventure-night — testi approvati nel mockup
 * Claude Design "Lost Room - Adventure Night (standalone)" (docs/reference),
 * riportati parola per parola, incluse le 8 risposte FAQ e il testo di ogni
 * retro-scheda delle edizioni passate.
 */
const content: FormatPageContent = {
  slug: 'adventure-night',

  hero: {
    eyebrow: "UN FORMAT ORIGINALE LOST ROOM · GIOCO D'AZIONE · DAL 2018",
    title: 'Adventure Night',
    lead: 'Di notte. Con una torcia. Dove normalmente non giocheresti.',
    // Stessa foto e didascalia già usate per Adventure Night in
    // FormatSection.tsx (Home).
    photo: { src: '/foto/1.png', label: 'Adventure Night, squadra in esplorazione tra le rovine di notte' },
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

  archivioVideo: {
    eyebrow: 'ARCHIVIO · IL VIDEO',
    videoId: 'WICkuxj-4sk',
    title: 'Adventure Night a Nora — il video',
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
    photo: {
      src: '/foto/Adv-checkpoint.png',
      label: 'Checkpoint notturno tra gli scavi di Nora, lanterna e bauli di gioco davanti al mare',
      caption: 'Checkpoint',
    },
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
      {
        year: '2018',
        title: 'Villa di Tigellio',
        location: 'Cagliari',
        replicas: '15',
        players: '450',
        // Nessuna foto d'archivio ancora disponibile per questa edizione:
        // resta il segnaposto finché non arriva uno scatto reale.
        back: {
          badge: '2018 · Cagliari',
          lines: [
            {
              text: 'Un viaggio nel tempo ai primi del Novecento, dopo la campagna di scavi ottocentesca del canonico Giovanni Spano e prima della ripresa delle indagini negli anni Sessanta.',
            },
            {
              text: 'Gli scavi sono fermi da anni e nessuno sembra sapere davvero perché.\nQualcuno parla di misteriose presenze femminili. Qualcun altro di una maledizione.',
            },
            { text: 'Naturalmente siamo andati a controllare.', type: 'accent', tone: 'seal' },
          ],
        },
      },
      {
        year: '2019',
        title: 'Escape the Museum',
        location: "Galleria Comunale d'Arte e Giardini Pubblici, Cagliari",
        replicas: '3',
        players: '350',
        photo: {
          src: '/foto/Adv-Museum.png',
          label: 'Scena del crimine alla Escape the Museum, corpo e nastro della polizia davanti a una statua',
        },
        back: {
          badge: '2019 · Cagliari',
          lines: [
            { text: 'Una vera notte al museo.', type: 'accent', tone: 'seal' },
            {
              text: "Tra le opere della Collezione Ingrao sono nascosti codici e indizi lasciati da un esperto crittografo sulle tracce di un'organizzazione segreta.",
            },
            {
              text: "Da qualche parte c'è una bomba capace di colpire il centro di Cagliari.\nRestava soltanto da capire dove.",
            },
          ],
        },
      },
      {
        year: '2021',
        title: 'Molentargius',
        location: 'Parco Naturale Regionale Molentargius-Saline',
        replicas: '4',
        players: '400',
        photo: {
          src: '/foto/Adv-Molentargius.png',
          label: 'Polaroid della creatura di Molentargius, tenuta in mano al buio',
        },
        back: {
          badge: '2021 · Parco naturale',
          lines: [
            {
              text: "Un esperimento sfuggito di mano in un laboratorio all'altro capo del mondo, ha creato qualcosa che ora si aggira tra le zone umide della laguna.",
            },
            {
              text: "La missione è chiara: raccogliere le prove dell'esistenza della creatura e denunciare il caso.",
            },
          ],
        },
      },
      {
        year: '2022',
        title: 'SHARPER Night',
        location: 'Orto Botanico di Cagliari',
        replicas: '2',
        players: '400',
        photo: {
          src: '/foto/Adv_Sharper.png',
          label: "La valigetta con il conto alla rovescia di SHARPER Night, tra le piante dell'Orto Botanico",
        },
        back: {
          badge: '2022 · Orto botanico',
          lines: [
            {
              text: 'Durante la Notte Europea dei Ricercatori, uno scienziato pazzo rifiutato dalla comunità scientifica minaccia di diffondere un nuovo potentissimo virus.',
            },
            {
              text: "Per fermarlo bisogna superare una sequenza di enigmi legati a 20 ricerche reali dell'Università degli Studi di Cagliari.",
            },
            {
              text: 'Quella sera la ricerca scientifica non era qualcosa da ascoltare in uno stand. Era qualcosa da usare per salvare il mondo.',
              type: 'accent',
              tone: 'seal',
            },
          ],
        },
      },
      {
        year: '2024–2025',
        title: 'La maledizione di Noranji',
        location: 'Area Archeologica di Nora',
        replicas: '18',
        players: 'oltre 600',
        photo: { src: '/foto/Adv-Noranji.png', label: 'Creatura cornuta di Nora, La maledizione di Noranji' },
        back: {
          badge: '2024–2025 · Nora',
          lines: [
            {
              text: 'Durante una campagna di scavi viene ritrovata una scatola contenente un antico gioco da tavolo.\nAprirla, naturalmente, non era una buona idea.',
            },
            {
              text: 'Nora si trasforma in un gigantesco playground popolato da creature, avventurieri e prove da superare.',
            },
            {
              text: 'Per spezzare la maledizione esiste una sola possibilità:\ngiocare la partita fino alla fine.',
              type: 'accent',
              tone: 'seal',
            },
          ],
        },
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
    items: [
      {
        question: 'Serve esperienza con le escape room per partecipare?',
        answer:
          'No. Se hai già giocato qualche escape room riconoscerai alcune dinamiche, ma non è necessario avere esperienza. Gli enigmi sono pensati per essere affrontati in squadra e durante il percorso contano soprattutto osservazione, intuito, collaborazione e voglia di provare. Insomma: non serve essere escapers professionisti. Anche perché non esistono.',
      },
      {
        question: 'Fa paura?',
        answer:
          'Dipende un po\' dall\'edizione, ma in generale Adventure Night non è un\'esperienza horror. C\'è il buio, ci si muove con le torce, alcune storie possono avere atmosfere misteriose o inquietanti e ogni tanto può capitare qualche momento di tensione. Più che paura, cerchiamo quella sensazione in cui ti guardi intorno un po\' meglio del solito e pensi: "Ok. Ma cosa c\'è dietro quel cespuglio?" Se un\'edizione prevede contenuti più intensi, effetti a sorpresa o elementi che potrebbero non essere adatti a tutti, lo diciamo sempre prima della prenotazione.',
      },
      {
        question: 'Devo venire con una squadra già formata?',
        answer:
          'Non necessariamente. Puoi partecipare con il tuo team oppure, quando la formula dell\'evento lo prevede, iscriverti anche da solo o in pochi e giocare all\'interno di una squadra mista con altri partecipanti. Se invece un\'edizione richiede l\'iscrizione di una squadra completa, lo specifichiamo chiaramente prima della prenotazione.',
      },
      {
        question: 'Posso partecipare con i bambini?',
        answer:
          "Dipende dall'edizione, dalla location e dal tipo di percorso. Alcune Adventure Night sono adatte anche alle famiglie, altre prevedono un'età minima o richiedono che i minori partecipino insieme a un adulto. Ogni volta indichiamo chiaramente età consigliata, eventuali limiti e condizioni di partecipazione.",
      },
      {
        question: 'Serve essere allenati?',
        answer:
          'No, ma bisogna mettere in conto di camminare, stare in piedi e muoversi per buona parte della durata del gioco. La difficoltà fisica cambia molto in base alla location: un museo non è un parco naturale e un sito archeologico non è un giardino urbano. Se ci sono dislivelli, terreni irregolari, percorsi lunghi o altre condizioni particolari, lo segnaliamo prima.',
      },
      {
        question: 'Il gioco è accessibile a tutti?',
        answer:
          'Dipende soprattutto dal luogo che ospita l\'Adventure Night. Cerchiamo di rendere il percorso il più accessibile possibile, ma alcuni siti archeologici, parchi o spazi naturali possono avere barriere, terreni irregolari o zone non adatte a tutte le persone. Preferiamo dirlo chiaramente prima, piuttosto che promettere un\'accessibilità che la location non può garantire.',
      },
      {
        question: 'Cosa succede se piove?',
        answer:
          'Dipende dalla pioggia. Le Adventure Night si giocano anche con condizioni atmosferiche non perfette, purché siano sicure: fresco, vento, umidità o qualche goccia possono diventare parte dell\'avventura. Se invece il meteo può rappresentare un rischio per i partecipanti, l\'esperienza viene modificata, rinviata o sospesa. Il meteo, quando collabora, è uno dei nostri effetti speciali premium.',
      },
      {
        question: 'Come si prenota e cosa comprende il biglietto?',
        answer:
          "Cambia da un'edizione all'altra. Quando l'Adventure Night è a pagamento, nella pagina dell'evento trovi sempre prezzo, modalità di prenotazione e cosa comprende il ticket. In alcuni casi il biglietto include anche l'ingresso al sito o alla struttura che ospita il gioco. Quando invece l'evento fa parte di un progetto culturale, territoriale o istituzionale, la partecipazione può essere completamente gratuita.",
      },
    ],
  },

  crossLinks: {
    // "Gli altri format" non è più accurata: Addii al Nubilato è una
    // verticale commerciale, non un format. "Il resto del mondo Lost
    // Room" riprende la stessa espressione già usata in EditorialNote.tsx
    // ("c'è un po' tutto il mondo Lost Room") invece di inventarne una
    // nuova.
    heading: 'Il resto del mondo Lost Room',
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
        // La battuta stava in overlay sulla foto (una polaroid con
        // didascalia stampata sopra, coerente in Verticals.tsx ma non qui
        // dove le card devono restare uniformi): torna testo normale.
        // Foto: /foto/team-building.png è la polaroid intera (cornice +
        // didascalia stampate nel file, usata così com'è in Verticals.tsx);
        // team-building-photo.png è lo stesso scatto raddrizzato e
        // ritagliato sul solo gruppo, generato per questa card dove serve
        // una foto pulita in 3:4 senza cornice.
        tagline: 'E se ci fosse un attacco hacker con il team bloccato in ufficio?',
        cta: 'Scopri il team building',
        href: '/#team-building',
        photo: {
          src: '/foto/team-building-photo.png',
          label: 'Team building Lost Room, colleghi al lavoro sotto pressione',
          // Il gruppo al tavolo occupa il lato sinistro della foto: senza
          // spostare il punto di ritaglio, "object-cover" a 3:4 lo taglia
          // a metà e centra sul corridoio vuoto in mezzo.
          objectPosition: '20% center',
        },
      },
      {
        name: 'Addii al Nubilato',
        cta: 'Scopri gli addii Lost Room',
        href: '/#addii',
        // /foto/nubilato.png è la prima pagina di giornale intera, usata
        // così in Verticals.tsx; nubilato-photo.png è lo stesso scatto
        // raddrizzato e ritagliato sul solo gruppo, per questa card.
        photo: { src: '/foto/nubilato-photo.png', label: 'Addio al nubilato Lost Room, gruppo di amiche in gioco' },
      },
    ],
  },
}

export default content
