document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. DATABASE DEI 10 NODI (PROGETTI + STUDIO + 3 TONI DI VOCE + FILTRI)
     ========================================================================== */
  const NODES_DATA = [
    {
      id: 'tipule',
      code: '01 // MAIN HUB',
      title: 'TIPULE FEST',
      isMain: true,
      color: '#FE76FE',
      xPct: 0.24,
      yPct: 0.30,
      roles: ['art-direction', 'graphic', 'video', 'pm'],
      connections: ['marsea', 'siamo', 'janaki'],
      thoughts: {
        playful: 'Un festival gratis in Salento per chi non se n’è mai voluto andare. Sì, cambiamo faccia ogni anno.',
        invested: '800+ presenze al debutto, 48k+ views organiche con 0€ ADV, 2 palchi a incastro e modello H2O APS a budget 6.000€.',
        fuckedup: 'Nel 2026 abbiamo lavorato sul fastidio visivo: tipografia sbattuta a tutto schermo contro l’immobilismo estivo.'
      },
      copy: {
        playful: 'Per chi non se n’è mai voluto andare. Un festival gratuito nel borgo fortificato di Acaya che cambia identità visiva ogni anno per dare fastidio alla solita estate salentina.',
        invested: 'Laboratorio di innovazione sociale e culturale nel Borgo di Acaya (LE) contro la diaspora artistica giovanile. Strutturato su 2 palchi coordinati (Main Stage + Palco 2 Jam Session / Spazio Agorà) per annullare i tempi morti, con oltre 15 artisti, 800+ partecipanti nella prima edizione e sostenibilità garantita tramite H2O APS.',
        fuckedup: 'Fare un festival gratis in Puglia senza vendere un rene: nella prima edizione abbiamo acceso la miccia, nel 2026 abbiamo scelto il "fastidio visivo" con tipografia compressa a tutto schermo e zero compromessi sulla linea artistica.'
      },
      outputsByRole: {
        'art-direction': [
          { tag: 'Art Direction', title: 'Mutazione 2025 → 2026', desc: 'Identità cangiante annuale: dal lancio pilota al "fastidio visivo" 2026 in rosa #FE76FE e tipografia full-bleed.' },
          { tag: 'Art Direction', title: 'Ecosistema Largo Castello', desc: 'Direzione visiva e segnaletica per Doppio Palco, Spazio Agorà e area artigiani.' }
        ],
        'graphic': [
          { tag: 'Visual & Graphic', title: 'Campagna "Siamo in ritardo / Che Palle"', desc: 'Caroselli IG ad alto contrasto tipografico pensati per interrompere lo scroll passivo.' },
          { tag: 'Visual & Graphic', title: 'Locandina Tipule x Surf', desc: 'Poster e declinazione grafica per lo spin-off al Surf Bar.' }
        ],
        'video': [
          { tag: 'Video', title: 'Reel Tipule x Surf', desc: 'Montaggio serrato e ritmo visivo per il lancio dell’evento.' },
          { tag: 'Video', title: 'Teaser "Vecchi che fanno cose"', desc: 'Short video ironici di annuncio lineup radicata nel territorio.' }
        ],
        'pm': [
          { tag: 'Project Management', title: 'Business Plan & Pitch 6.000€', desc: 'Allocazione budget (Service 2k€, Direzione Artistica 3k€, Allestimenti, Sicurezza) e breakeven con H2O APS.' },
          { tag: 'Project Management', title: 'Architettura Doppio Palco', desc: 'Incastro di 15+ rider tecnici tra Main Stage e Jam Session senza tempi morti.' }
        ]
      },
      interactiveType: 'tipule-editions',
      links: [
        { label: 'Instagram @tipulefest ↗', url: 'https://www.instagram.com/tipulefest/' }
      ]
    },
    {
      id: 'marsea',
      code: '02 // MAIN HUB',
      title: 'MARSEA',
      isMain: true,
      color: '#5AD683',
      xPct: 0.52,
      yPct: 0.24,
      roles: ['art-direction', 'photo', 'graphic', 'video'],
      connections: ['tipule', 'janaki', 'morireperte'],
      thoughts: {
        playful: 'Smontare un’artista pezzo per pezzo (letteralmente: occhio, mani, ombelico, spalla) e ricomporla in un EP.',
        invested: 'Sistema seriale per 4 singoli + EP: catena cromatica duotone concatenata e progressione anatomica.',
        fuckedup: 'Vietato fare la solita cover con la faccia al centro e il font grazioso. Ogni uscita doveva alzare l’asticella tecnica.'
      },
      copy: {
        playful: 'Un dialogo interno con la propria identità frammentata. 4 singoli, 4 parti del corpo, 4 duotone incatenati tra loro fino al bianco totale dell’EP.',
        invested: 'Direzione artistica integrale per il percorso discografico di Marsea. L’identità viene esplorata tramite gli archetipi di rinascita, luna, sole e stelle: ogni singolo isola un dettaglio anatomico e passa il testimone cromatico al successivo in un loop continuo.',
        fuckedup: 'La vera sfida è stata imporsi una gabbia concettuale ferrea — cambiare sempre pur restando nello stesso universo — costringendosi a sperimentare tecniche nuove a ogni release.'
      },
      outputsByRole: {
        'art-direction': [
          { tag: 'Art Direction', title: 'Il Loop Duotone & Anatomico', desc: 'Rosa-Verde (Occhio) → Verde-Blu (Mani) → Blu-Giallo (Ombelico) → Giallo-Rosa (Spalla) → Bianco + Accenti (EP).' }
        ],
        'photo': [
          { tag: 'Photo', title: 'Shooting Naturali & Frammenti', desc: 'Sessioni fotografiche organiche focalizzate sulla fisicità e sul dettaglio epidermico.' }
        ],
        'graphic': [
          { tag: 'Visual & Graphic', title: 'Caroselli Narrativi IG', desc: 'Impaginati social che traducono il dialogo interiore dei brani in sequenze visive.' }
        ],
        'video': [
          { tag: 'Video', title: 'Reel & Visual Loop', desc: 'Contenuti verticali e canvas in movimento per accompagnare l’uscita dei singoli.' }
        ]
      },
      interactiveType: 'marsea-loop',
      links: []
    },
    {
      id: 'siamo',
      code: '03 // MAIN HUB',
      title: 'SIAMOUNMAGAZINE',
      isMain: true,
      color: '#E82A1C',
      xPct: 0.77,
      yPct: 0.34,
      roles: ['copywriting', 'graphic', 'video', 'photo'],
      connections: ['tipule', '2colon', 'morireperte'],
      thoughts: {
        playful: '100+ creativi in fissa con la musica che provano a disintossicare l’industria.',
        invested: 'Produzione editoriale cross-mediale: articoli, interviste, shooting e grafiche in un network di oltre 100 professionisti.',
        fuckedup: 'L’industria musicale è piena di plastica e marchette. Qui ci sporchiamo le mani in 4 ruoli diversi per raccontare chi spacca davvero.'
      },
      copy: {
        playful: 'Un calderone di oltre 100 teste creative. Scrivo articoli, scatto foto, monto video e impagino grafiche per raccontare la scena musicale senza filtri.',
        invested: 'All’interno della redazione di Siamo Un Magazine opero in modo trasversale tra Copywriting, Graphic Design, Fotografia e Videomaking, accogliendo stimoli continui in una community impegnata a rendere il settore musicale meno tossico e più meritocratico.',
        fuckedup: 'Saltare dalla scrittura di un pezzo sull’UK clubbing al set fotografico di un live fino all’impaginazione grafica: zero compartimenti stagni, solo fame di cultura reale.'
      },
      outputsByRole: {
        'copywriting': [
          { tag: 'Copywriting', title: 'Articoli & Approfondimenti Scena', desc: 'Analisi verticali, recensioni e interviste su musica underground, indie, rap ed elettronica.' }
        ],
        'graphic': [
          { tag: 'Visual & Graphic', title: 'Caroselli & Layout Editoriali', desc: 'Progettazione grafica per rubriche social e approfondimenti testuali.' }
        ],
        'photo': [
          { tag: 'Photo', title: 'Ritratti & Reportage Live', desc: 'Fotografia sul campo e ritrattistica per gli artisti intervistati dalla redazione.' }
        ],
        'video': [
          { tag: 'Video', title: 'Video Interviste & Format', desc: 'Ripresa e montaggio di format video (Mushroom Studio, Lamamma, vox pop).' }
        ]
      },
      links: []
    },
    {
      id: 'scroccup',
      code: '04 // MAIN HUB',
      title: 'SCROCCUP',
      isMain: true,
      color: '#F26432',
      xPct: 0.28,
      yPct: 0.72,
      roles: ['graphic', 'ui-ux'],
      connections: ['simulacra', 'sacraterra'],
      thoughts: {
        playful: 'Trasformare l’arte universitaria dello "scroccare" in un’app di food-sharing per collegiali.',
        invested: 'Case study UX/UI completa su Behance + Prototipo Figma interattivo + Video pitch su Vimeo.',
        fuckedup: 'Basta app contro lo spreco alimentare che sembrano disegnate da un ministero. L’abbiamo chiamata ScroccUp.'
      },
      copy: {
        playful: 'L’app di food-sharing pensata per i collegiali: condividi quello che ti avanza in frigo prima che scada, salva la cena al vicino di stanza e azzera gli sprechi.',
        invested: 'Progetto completo di Brand Identity e UX/UI Design basato su ricerca quantitativa tra gli studenti universitari a Torino. Include architettura dell’informazione, design system arancio #F26432 ad alta leggibilità, prototipo navigabile su Figma e video di presentazione.',
        fuckedup: 'Abbiamo preso il frigo semivuoto dei fuori sede e il concetto tabù dello "scrocco" per farne un ecosistema di community gamificato, diretto e visivamente pop.'
      },
      outputsByRole: {
        'graphic': [
          { tag: 'Visual & Graphic', title: 'Brand Identity & Naming', desc: 'Sistema visivo pop #F26432, tone of voice irriverente e presentazione Behance.' }
        ],
        'ui-ux': [
          { tag: 'UI/UX', title: 'Prototipo Interattivo Figma', desc: 'Flussi completi di onboarding, caricamento dispensa, match tra collegiali e ritiro.' },
          { tag: 'UI/UX', title: 'User Research & Video Pitch', desc: 'Analisi dei bisogni nei collegi e storytelling funzionale su Vimeo.' }
        ]
      },
      links: [
        { label: 'Behance Case Study ↗', url: 'https://www.behance.net/gallery/252607759/SCROCCUP-LApp-di-FoodSharing-per-i-Collegiali' },
        { label: 'Prototipo Figma ↗', url: 'https://www.figma.com/proto/f1GJ20X1AQEuw38pNFJIYU/PROTOTIPO_SCROCCUP?content-scaling=fixed&kind=proto&node-id=10-5976&page-id=1%3A3&scaling=scale-down&starting-point-node-id=10%3A5976' },
        { label: 'Video Vimeo ↗', url: 'https://vimeo.com/1209626682?fl=pl&fe=sh' }
      ]
    },
    {
      id: 'insincrono',
      code: '05 // SATELLITE',
      title: 'IN|SINCRONO',
      isMain: false,
      color: '#6A1B9A',
      xPct: 0.48,
      yPct: 0.56,
      roles: ['photo', 'art-direction'],
      connections: ['simulacra', 'marsea', 'janaki'],
      thoughts: {
        playful: 'Fotografia tradizionale fusa con media digitali fluidi e musica elettronica sperimentale.',
        invested: 'Ricerca visiva tra fotografia, estetica post-internet e live art direction audioreattiva.',
        fuckedup: 'Quando la foto statica non basta più e devi farla collidere con il suono elettronico dal vivo.'
      },
      copy: {
        playful: 'Fusione tra fotografia tradizionale e media digitali fluidi e audioreattivi insieme al collettivo elettronico IN|SINCRONO.',
        invested: 'La collaborazione con IN|SINCRONO — collettivo radicato nell’estetica post-internet e nella musica elettronica sperimentale — ha catalizzato la mia cifra stilistica: tradurre la fotografia in live art direction consapevole e ad alto impatto.',
        fuckedup: 'Portare la ricerca fotografica dentro un ecosistema clubbing post-internet dove suono, glitch e luce dialogano dal vivo.'
      },
      outputsByRole: {
        'photo': [
          { tag: 'Photo', title: 'Post-Internet Live Photography', desc: 'Scatti ibridati con estetica digitale fluida e sperimentazione elettronica.' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'Audio-Reactive Visual Research', desc: 'Traduzione della visione fotografica in direzione artistica live.' }
        ]
      },
      links: []
    },
    {
      id: 'simulacra',
      code: '06 // SATELLITE',
      title: 'SIMULACRA',
      isMain: false,
      color: '#3D9DD5',
      xPct: 0.14,
      yPct: 0.54,
      roles: ['photo', 'art-direction'],
      connections: ['insincrono', 'scroccup'],
      thoughts: {
        playful: 'Abiti fatti di texture alimentari fotografati dentro un autolavaggio industriale. Lucrezio approverebbe.',
        invested: 'Shooting editoriale per tesi Fashion Design NABA: contrasto radicale tra texture organiche e spazio industriale.',
        fuckedup: 'Mettere vestiti commestibili e sensoriali sotto i rulli di un car wash. Cortocircuito visivo puro.'
      },
      copy: {
        playful: 'Shooting editoriale per una tesi di Fashion Design NABA: abiti creati con texture di cibo portati dentro il gelo industriale di un autolavaggio.',
        invested: 'Traduzione visiva concettuale ispirata ai "simulacra" di Lucrezio. Gli abiti, realizzati interamente con texture alimentari ed elementi sensoriali, entrano in collisione con un ambiente alieno e meccanico: un car wash.',
        fuckedup: 'Organico contro sintetico: esaltare la materia deperibile del cibo sbattendola tra schiuma chimica, lamiere bagnate e neon di un autolavaggio.'
      },
      outputsByRole: {
        'photo': [
          { tag: 'Photo', title: 'Car Wash Editorial Shooting', desc: 'Ritratti e dettagli materici ad alto contrasto tra texture organiche e architettura industriale.' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'Lucretius’ Simulacra Concept', desc: 'Costruzione del cortocircuito sensoriale location/styling per tesi NABA.' }
        ]
      },
      links: []
    },
    {
      id: 'janaki',
      code: '07 // SATELLITE',
      title: 'JANAKI',
      isMain: false,
      color: '#B388FF',
      xPct: 0.64,
      yPct: 0.48,
      roles: ['video'],
      connections: ['tipule', 'marsea', 'morireperte', 'insincrono'],
      thoughts: {
        playful: 'Un singolo ("Grafite") e due live session ("Alibi" e "Antidoto") dove la camera respira insieme alla musica.',
        invested: 'Produzione video per il singolo "Grafite" e regia/riprese delle live session "Alibi" e "Antidoto".',
        fuckedup: 'Catturare la tensione emotiva di "Alibi" e "Antidoto" dal vivo senza far sembrare il video un saggio scolastico.'
      },
      copy: {
        playful: 'Trilogia video per Janaki: il visual del singolo "Grafite" e le due live session intime e taglienti di "Alibi" e "Antidoto".',
        invested: 'Progettazione e realizzazione video per il progetto musicale R&B/Elettronico Janaki: produzione del video per il singolo "Grafite" e direzione delle performance dal vivo per "Alibi" e "Antidoto".',
        fuckedup: 'Nelle live session non puoi barare in post-produzione: o becchi l’istante esatto in cui la voce si spezza, o hai perso.'
      },
      outputsByRole: {
        'video': [
          { tag: 'Video', title: 'Singolo "Grafite"', desc: 'Video ufficiale per l’uscita del brano Grafite.' },
          { tag: 'Video', title: 'Live Session "Alibi"', desc: 'Performance live su YouTube: tensione vocale e camera ravvicinata.' },
          { tag: 'Video', title: 'Live Session "Antidoto"', desc: 'Performance live su YouTube: intimità sonora e dinamica di gruppo.' }
        ]
      },
      links: [
        { label: 'YouTube: Alibi Live Session ↗', url: 'http://www.youtube.com/watch?v=FFXYVrovL18' },
        { label: 'YouTube: Antidoto Live Session ↗', url: 'http://www.youtube.com/watch?v=KxIw-6WlX5w' }
      ]
    },
    {
      id: 'morireperte',
      code: '08 // SATELLITE',
      title: 'MORIRE PER TE',
      isMain: false,
      color: '#FF8A65',
      xPct: 0.72,
      yPct: 0.68,
      roles: ['video', 'art-direction'],
      connections: ['janaki', 'siamo', 'marsea'],
      thoughts: {
        playful: 'Direzione e montaggio al Guscio Recording Studio di Milano per Susanna Biollo e Dimaggio. Finita in anteprima su Billboard.',
        invested: 'Direzione e montaggio della Acoustic Live Session "Morire per te" (Susanna Biollo, Dimaggio), pubblicata in anteprima su Billboard Italia.',
        fuckedup: 'Pianoforte, violoncello, chitarre, due voci e una grana visiva calda che ti trascina dentro lo studio.'
      },
      copy: {
        playful: 'Acoustic live session girata al Guscio Recording Studio di Milano per Susanna Biollo e Dimaggio, uscita in anteprima nazionale su Billboard Italia.',
        invested: 'Direzione e montaggio (con assistenza video di Massimo Pedone) per la live session acustica di "Morire per te" di Susanna Biollo e Dimaggio, accompagnati da pianoforte, violoncello e chitarre. Selezionata in anteprima da Billboard Italia.',
        fuckedup: 'Stare stretti sui dettagli degli strumenti, sugli sguardi tra Susanna e Dimaggio e lasciare che l’imperfezione analogica dell’inquadratura amplifichi il pezzo.'
      },
      outputsByRole: {
        'video': [
          { tag: 'Video', title: 'Acoustic Live Session (Guscio Studio)', desc: 'Direzione e montaggio del video ufficiale con anteprima su Billboard Italia.' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'Estetica Lo-Fi / Warm Studio', desc: 'Scelta del taglio fotografico intimo, grana morbida e regia in presa diretta.' }
        ]
      },
      links: [
        { label: 'YouTube: Morire per te Live ↗', url: 'http://www.youtube.com/watch?v=u_O86zbiH28' },
        { label: 'Anteprima Billboard Italia ↗', url: 'https://billboard.it/musica/pop/anteprima-live-session-morire-per-te-susanna-biollo-dimaggio/2026/06/17207243/' }
      ]
    },
    {
      id: 'sacraterra',
      code: '09 // SINAPSI IN INCUBAZIONE',
      title: 'SACRA TERRA',
      isMain: false,
      isTodo: true,
      color: '#CDDC39',
      xPct: 0.43,
      yPct: 0.82,
      roles: ['art-direction', 'graphic'],
      connections: ['scroccup', '2colon'],
      thoughts: {
        playful: 'Spoiler: stiamo costruendo un community hub che rimette al centro l’essenza di ogni individuo.',
        invested: 'In sviluppo: Branding e identità per Sacra Terra, community hub orientato alla valorizzazione dell’individuo.',
        fuckedup: 'Sinapsi in formazione. Niente anticipazioni bruciate prima del tempo, ma il branding darà una scossa.'
      },
      copy: {
        playful: '[WORK IN PROGRESS] Sacra Terra è un community hub che dà valore all’essenza di ogni individuo. Stiamo forgiando l’identità visiva.',
        invested: '[IN INCUBAZIONE] Progetto di Branding e Art Direction per Sacra Terra: costruzione di uno spazio e di un linguaggio identitario capace di valorizzare l’unicità individuale dentro una dimensione collettiva.',
        fuckedup: '[SPOILER AL 30%] Un community hub che rifiuta l’omologazione. Torna tra poco per vedere il sistema visivo definitivo.'
      },
      outputsByRole: {
        'art-direction': [
          { tag: 'Branding // TODO', title: 'Visione & Posizionamento Hub', desc: 'Architettura valoriale centrata sull’essenza dell’individuo.' }
        ],
        'graphic': [
          { tag: 'Branding // TODO', title: 'Sistema Visivo in sviluppo', desc: 'Costruzione del marchio e della grammatica cromatica.' }
        ]
      },
      links: []
    },
    {
      id: '2colon',
      code: '10 // SINAPSI IN INCUBAZIONE',
      title: '2:',
      isMain: false,
      isTodo: true,
      color: '#00E5FF',
      xPct: 0.85,
      yPct: 0.78,
      roles: ['graphic', 'copywriting', 'art-direction'],
      connections: ['siamo', 'sacraterra'],
      thoughts: {
        playful: 'Due punti ("2:"). Un progetto redazionale per prendere a spallate l’indifferenza verso le notizie.',
        invested: 'In sviluppo: Graphic Design e Branding per "2:", format editoriale che rinnova i linguaggi giornalistici.',
        fuckedup: 'La gente scorre le notizie come se fossero carta da parati. "2:" nasce per sfondare quella parete di anestesia.'
      },
      copy: {
        playful: '[WORK IN PROGRESS] "2:" è un progetto redazionale che sfida i linguaggi giornalistici tradizionali per abbattere il muro dell’indifferenza.',
        invested: '[IN INCUBAZIONE] Progettazione di Branding e Graphic Design editoriale per "2:": un nuovo dispositivo d’informazione pensato per riattivare l’attenzione critica verso le notizie e il sapere.',
        fuckedup: '[SPOILER AL 30%] Il giornalismo classico parla da solo davanti allo specchio. Con "2:" ribaltiamo impaginazione e tono per costringerti a sentire.'
      },
      outputsByRole: {
        'graphic': [
          { tag: 'Graphic // TODO', title: 'Design Editoriale D’Urto', desc: 'Sperimentazione tipografica e layout pensati contro l’assuefazione da feed.' }
        ],
        'copywriting': [
          { tag: 'Editorial // TODO', title: 'Nuovi Linguaggi Giornalistici', desc: 'Ricerca sul formato di sintesi e approfondimento.' }
        ]
      },
      links: []
    }
  ];

  // Nodo Concettuale Personale (Punto 5: Tu come progetto concettuale, non visivo)
  const SELF_CONCEPT_DATA = {
    code: '00 // PROGETTO CONCETTUALE',
    title: 'LUCCNT // COSCIENZA',
    color: '#00E676',
    roles: ['art-direction', 'graphic', 'ui-ux', 'photo', 'video', 'copywriting', 'pm'],
    copy: {
      playful: 'Niente foto in posa con le braccia incrociate. Io sono il sistema operativo che tiene insieme questi 10 nodi tra Torino e il Salento. Muovo cose, scrivo cose, dirigo set e incastro budget.',
      invested: 'Lucrezia Conte (Luccnt) — Design e Comunicazione @ Politecnico di Torino & Presidente di H2O APS. Lavoro come sistema ibrido tra Art Direction, Visual Design, UX/UI, Fotografia, Videomaking e Project Management culturale.',
      fuckedup: 'Mi annoia fare una cosa sola e mi annoiano i siti vetrina tutti uguali. Uso la griglia per non impazzire e i colori pop per dare fastidio.'
    },
    links: [
      { label: 'Scrivi a contelucrezia.14@gmail.com ↗', url: 'mailto:contelucrezia.14@gmail.com' },
      { label: 'Tipule Festival Mail ↗', url: 'mailto:tipulefestival@gmail.com' }
    ]
  };

  /* ==========================================================================
     2. STATO DELL'ECOSISTEMA
     ========================================================================== */
  let currentMode = 'playful'; // 'playful' | 'invested' | 'fuckedup'
  let currentFilter = 'all';
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, vx: 0, vy: 0, speed: 0 };
  let trailPoints = [];
  let nodeElements = {};

  const stage = document.getElementById('mindStage');
  const nodesLayer = document.getElementById('nodesLayer');
  const canvas = document.getElementById('synapseCanvas');
  const ctx = canvas.getContext('2d');
  const thoughtStream = document.getElementById('thoughtStream');
  const cursorCoords = document.getElementById('cursorCoords');
  const activeFilterLabel = document.getElementById('activeFilterLabel');

  /* ==========================================================================
     3. RENDER DEI NODI E DEL VENTAGLIO MAGNETICO (C)
     ========================================================================== */
  function getCardsForNodeAndFilter(node, filter) {
    if (filter !== 'all' && node.outputsByRole[filter]) {
      return node.outputsByRole[filter];
    }
    // Se 'all', prendi il primo output di ogni ruolo del progetto (max 3 per il ventaglio)
    const allCards = [];
    Object.keys(node.outputsByRole).forEach((r) => {
      node.outputsByRole[r].forEach((c) => allCards.push(c));
    });
    return allCards.slice(0, 3);
  }

  function buildNodes() {
    nodesLayer.innerHTML = '';
    nodeElements = {};

    NODES_DATA.forEach((node) => {
      const el = document.createElement('div');
      el.className = `p-node ${node.isMain ? 'is-main' : ''} ${node.isTodo ? 'is-todo' : ''}`;
      el.style.setProperty('--node-pop', node.color);
      el.dataset.id = node.id;

      const cards = getCardsForNodeAndFilter(node, currentFilter);
      const activeRoleText = currentFilter === 'all'
        ? node.roles.join(' · ')
        : `FOCUS // ${currentFilter.toUpperCase()}`;

      const fanCardsHtml = cards.map((c, idx) => `
        <div class="fan-card" data-fan-idx="${idx}">
          <span class="fan-card-tag">${c.tag}</span>
          <div class="fan-card-title">${c.title}</div>
          <div class="fan-card-desc">${c.desc}</div>
        </div>
      `).join('');

      el.innerHTML = `
        <div class="fan-deck">${fanCardsHtml}</div>
        <div class="node-core">
          <div class="node-kicker">
            <span>${node.code}</span>
            <span>●</span>
          </div>
          <div class="node-title">${node.title}</div>
          <div class="node-active-role">${activeRoleText}</div>
        </div>
      `;

      // Hover: aggiorna Luc's Inner Thoughts
      el.addEventListener('mouseenter', () => {
        setThought(node.thoughts[currentMode]);
      });

      // Click: apre la Scheda Studio completa
      el.addEventListener('click', () => {
        openStudyDrawer(node);
      });

      nodesLayer.appendChild(el);
      nodeElements[node.id] = {
        data: node,
        el,
        baseX: 0,
        baseY: 0,
        curX: 0,
        curY: 0
      };
    });

    layoutNodes();
  }

  function layoutNodes() {
    const rect = stage.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    NODES_DATA.forEach((node) => {
      const item = nodeElements[node.id];
      if (!item) return;
      item.baseX = rect.width * node.xPct;
      item.baseY = rect.height * node.yPct;
      if (item.curX === 0 && item.curY === 0) {
        item.curX = item.baseX;
        item.curY = item.baseY;
      }
    });
  }

  window.addEventListener('resize', layoutNodes);

  /* ==========================================================================
     4. MOTORE AUDIOREATTIVO (Web Audio API + Sintetizzatore Ambient Fallback)
     ========================================================================== */
  let audioCtx = null;
  let analyser = null;
  let freqData = null;
  let isAudioActive = false;
  let synthNodes = [];

  const audioBtn = document.getElementById('audioToggle');
  const bgAudio = document.getElementById('bgAudio');
  const eqBars = document.querySelectorAll('#eqBars i');

  function startAmbientSynthFallback() {
    // Genera un tappeto Ambient + Sub-Bass morbido se il file mp3 non è ancora presente
    const oscSub = audioCtx.createOscillator();
    const oscPad1 = audioCtx.createOscillator();
    const oscPad2 = audioCtx.createOscillator();
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    const masterGain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    oscSub.type = 'sine';
    oscSub.frequency.value = 55; // A1 sub bass

    oscPad1.type = 'triangle';
    oscPad1.frequency.value = 110;

    oscPad2.type = 'sine';
    oscPad2.frequency.value = 164.81; // E3 fifth

    lfo.type = 'sine';
    lfo.frequency.value = 0.35; // respiro lento ambient
    lfoGain.gain.value = 180;

    filter.type = 'lowpass';
    filter.frequency.value = 260;

    masterGain.gain.value = 0.12;

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    oscSub.connect(filter);
    oscPad1.connect(filter);
    oscPad2.connect(filter);
    filter.connect(masterGain);
    masterGain.connect(analyser);
    analyser.connect(audioCtx.destination);

    oscSub.start();
    oscPad1.start();
    oscPad2.start();
    lfo.start();

    synthNodes = [oscSub, oscPad1, oscPad2, lfo];
  }

  function stopAmbientSynthFallback() {
    synthNodes.forEach((n) => {
      try { n.stop(); } catch (e) {}
    });
    synthNodes = [];
  }

  audioBtn.addEventListener('click', async () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      freqData = new Uint8Array(analyser.frequencyBinCount);
    }

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    isAudioActive = !isAudioActive;
    audioBtn.setAttribute('aria-pressed', isAudioActive ? 'true' : 'false');
    audioBtn.querySelector('.audio-lbl').textContent = isAudioActive ? 'AUDIO // REACTIVE ON' : 'AUDIO // OFF';

    if (isAudioActive) {
      // Prova a riprodurre la traccia del tuo amico; se non carica, attiva il synth ambient integrato
      bgAudio.play().then(() => {
        if (!bgAudio._connected) {
          const src = audioCtx.createMediaElementSource(bgAudio);
          src.connect(analyser);
          analyser.connect(audioCtx.destination);
          bgAudio._connected = true;
        }
      }).catch(() => {
        startAmbientSynthFallback();
      });
      setThought('Audio attivo: le sinapsi ora respirano sulle frequenze basse.');
    } else {
      bgAudio.pause();
      stopAmbientSynthFallback();
      eqBars.forEach((b) => (b.style.height = '3px'));
    }
  });

  /* ==========================================================================
     5. LOOP FISICO: SCIA CINETICA (B) + MAGNETISMO & VENTAGLIO (C) + AUDIO
     ========================================================================== */
  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    const nx = e.clientX - rect.left;
    const ny = e.clientY - rect.top;

    mouse.vx = nx - mouse.x;
    mouse.vy = ny - mouse.y;
    mouse.speed = Math.hypot(mouse.vx, mouse.vy);
    mouse.x = nx;
    mouse.y = ny;

    cursorCoords.textContent = `X: ${String(Math.round(nx)).padStart(4, '0')} // Y: ${String(Math.round(ny)).padStart(4, '0')} // VEL: ${mouse.speed.toFixed(1)}`;

    // Aggiungi punto alla Scia Cinetica Pop (Meccanica B)
    if (mouse.speed > 4) {
      const palette = ['#FE76FE', '#5AD683', '#E82A1C', '#F26432', '#3D9DD5'];
      trailPoints.push({
        x: nx,
        y: ny,
        vx: mouse.vx * 0.2,
        vy: mouse.vy * 0.2,
        size: Math.min(34, 8 + mouse.speed * 0.45),
        color: palette[Math.floor(Math.random() * palette.length)],
        life: 1.0
      });
    }
  });

  function animateEcosystem(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 1. Calcolo energia Audio (Bassi e Medi)
    let bassEnergy = 0;
    let midEnergy = 0;
    if (isAudioActive && analyser && freqData) {
      analyser.getByteFrequencyData(freqData);
      bassEnergy = (freqData[1] + freqData[2] + freqData[3]) / (3 * 255);
      midEnergy = (freqData[8] + freqData[12] + freqData[16]) / (3 * 255);

      eqBars.forEach((bar, i) => {
        const val = freqData[i * 3 + 1] || 20;
        bar.style.height = `${Math.max(3, (val / 255) * 14)}px`;
      });
    }

    // 2. Aggiorna posizione Nodi (Attrazione Magnetica C + Fluttuazione Ambient)
    const magnetRadius = currentMode === 'fuckedup' ? 190 : 145;

    NODES_DATA.forEach((node, idx) => {
      const item = nodeElements[node.id];
      if (!item) return;

      const floatX = Math.sin(time * 0.0012 + idx) * (4 + bassEnergy * 18);
      const floatY = Math.cos(time * 0.0015 + idx * 1.3) * (4 + midEnergy * 18);

      const dx = mouse.x - item.baseX;
      const dy = mouse.y - item.baseY;
      const dist = Math.hypot(dx, dy);

      let targetX = item.baseX + floatX;
      let targetY = item.baseY + floatY;

      const fanCards = item.el.querySelectorAll('.fan-card');

      if (dist < magnetRadius && !item.el.classList.contains('dimmed')) {
        // Aggancio Magnetico (C)
        const pull = (1 - dist / magnetRadius) * 0.38;
        targetX += dx * pull;
        targetY += dy * pull;
        item.el.classList.add('magnet-locked');

        // Ruota e apri a ventaglio le card in base all'angolo del cursore attorno al pin
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = angleRad * (180 / Math.PI);

        fanCards.forEach((card, cIdx) => {
          const spread = (cIdx - (fanCards.length - 1) / 2) * 28;
          const distOut = 128 + cIdx * 12;
          const cardAngle = (angleDeg + spread) * (Math.PI / 180);
          const cx = Math.cos(cardAngle) * distOut;
          const cy = Math.sin(cardAngle) * distOut;
          card.style.transform = `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) rotate(${spread * 0.35}deg) scale(1)`;
        });
      } else {
        item.el.classList.remove('magnet-locked');
        fanCards.forEach((card) => {
          card.style.transform = 'translate(-50%, -50%) scale(0.4) rotate(0deg)';
        });
      }

      item.curX += (targetX - item.curX) * 0.14;
      item.curY += (targetY - item.curY) * 0.14;

      const scaleBoost = 1 + bassEnergy * 0.08;
      item.el.style.left = `${item.curX}px`;
      item.el.style.top = `${item.curY}px`;
      item.el.style.transform = `translate(-50%, -50%) scale(${scaleBoost.toFixed(3)})`;
    });

    // 3. Disegna Corde Sinaptiche Elastiche (Si flettono col cursore e vibrano con l'audio)
    ctx.lineWidth = currentMode === 'fuckedup' ? 2.2 : 1.4;

    NODES_DATA.forEach((node) => {
      const fromItem = nodeElements[node.id];
      if (!fromItem) return;

      node.connections.forEach((targetId) => {
        const toItem = nodeElements[targetId];
        if (!toItem) return;

        const mx = (fromItem.curX + toItem.curX) / 2;
        const my = (fromItem.curY + toItem.curY) / 2;

        // Flessione elastica al passaggio del cursore
        const dMouse = Math.hypot(mouse.x - mx, mouse.y - my);
        let ctrlX = mx;
        let ctrlY = my;

        if (dMouse < 180) {
          const bend = (1 - dMouse / 180) * (currentMode === 'fuckedup' ? 75 : 42);
          ctrlX += (mx - mouse.x) * (bend / 100);
          ctrlY += (my - mouse.y) * (bend / 100);
        }

        // Vibrazione audioreattiva sulla corda
        if (isAudioActive) {
          ctrlY += Math.sin(time * 0.02 + mx) * (bassEnergy * 35);
        }

        ctx.beginPath();
        ctx.moveTo(fromItem.curX, fromItem.curY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, toItem.curX, toItem.curY);
        ctx.strokeStyle = dMouse < 150 ? node.color : 'rgba(10, 10, 10, 0.22)';
        ctx.stroke();
      });
    });

    // 4. Disegna Scia Cinetica Pop del Cursore (Meccanica B)
    for (let i = trailPoints.length - 1; i >= 0; i--) {
      const p = trailPoints[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= currentMode === 'fuckedup' ? 0.025 : 0.045;

      if (p.life <= 0) {
        trailPoints.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.fillStyle = p.color;
      ctx.strokeStyle = '#0a0a0a';
      ctx.lineWidth = 1.5;
      ctx.globalAlpha = p.life;
      const s = p.size * p.life;
      ctx.fillRect(p.x - s / 2, p.y - s / 2, s, s);
      ctx.strokeRect(p.x - s / 2, p.y - s / 2, s, s);
      ctx.restore();
    }

    requestAnimationFrame(animateEcosystem);
  }

  /* ==========================================================================
     6. FILTRI MANSIONE (Cambia cosa mostra ogni pin in tempo reale - Punto 1.3)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.flt');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');

      currentFilter = btn.dataset.role;
      document.body.dataset.filter = currentFilter;
      activeFilterLabel.textContent = btn.textContent.trim();

      // Ricostruisce le card del ventaglio per mostrare solo gli output della mansione scelta
      buildNodes();

      NODES_DATA.forEach((node) => {
        const item = nodeElements[node.id];
        if (!item) return;
        const match = currentFilter === 'all' || node.roles.includes(currentFilter);
        item.el.classList.toggle('dimmed', !match);
      });

      setThought(
        currentFilter === 'all'
          ? 'Mappa completa attiva: tutti i 10 nodi sono in tensione.'
          : `Filtro [${currentFilter.toUpperCase()}] attivo: i pin ora mostrano solo gli output di questa mansione.`
      );
    });
  });

  /* ==========================================================================
     7. SWITCH SEMAFORO: PLAYFUL / INVESTED / FUCKED UP (Punto 2.3 & 6)
     ========================================================================== */
  const modeBtns = document.querySelectorAll('[data-set-mode]');

  const MODE_THOUGHTS = {
    playful: 'Modalità 🟢 PLAYFUL: gira tra i pin, gioca con il magnetismo del cursore e goditi il viaggio.',
    invested: 'Modalità 🟡 INVESTED: numeri, strategia, business plan, ricerca UX e risultati concreti. Zero fuffa.',
    fuckedup: 'Modalità 🔴 FUCKED UP: il dietro le quinte crudo, il fastidio visivo e le sfide che ci hanno tolto il sonno.'
  };

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeBtns.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');

      currentMode = btn.dataset.setMode;
      document.body.dataset.mode = currentMode;
      setThought(MODE_THOUGHTS[currentMode]);

      // Se c'è un drawer progetto aperto, aggiorna in tempo reale il copy nella nuova modalità
      if (studyDrawer.getAttribute('aria-hidden') === 'false' && activeDrawerNode) {
        renderDrawerContent(activeDrawerNode);
      }
    });
  });

  function setThought(text) {
    thoughtStream.textContent = text;
  }

  /* ==========================================================================
     8. DRAWER DI STUDIO DEL PROGETTO (Con Moduli Interattivi Marsea & Tipule)
     ========================================================================== */
  const studyDrawer = document.getElementById('studyDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const dwId = document.getElementById('dwId');
  const dwRoles = document.getElementById('dwRoles');
  const dwBody = document.getElementById('dwBody');
  let activeDrawerNode = null;

  function openStudyDrawer(node) {
    activeDrawerNode = node;
    studyDrawer.style.setProperty('--drawer-pop', node.color);
    studyDrawer.setAttribute('aria-hidden', 'false');
    renderDrawerContent(node);
  }

  function renderDrawerContent(node) {
    dwId.textContent = node.code;
    dwRoles.textContent = node.roles.map((r) => r.toUpperCase()).join(' // ');

    const modeBadge = {
      playful: '🟢 VERSIONE PLAYFUL // DRITTO AL PUNTO',
      invested: '🟡 VERSIONE INVESTED // STRATEGIA & STUDIO',
      fuckedup: '🔴 VERSIONE FUCKED UP // DIETRO LE QUINTE CRUDO'
    }[currentMode];

    // Raccoglie gli output (filtrati o completi)
    let outputsList = [];
    if (node.outputsByRole) {
      Object.keys(node.outputsByRole).forEach((roleKey) => {
        node.outputsByRole[roleKey].forEach((item) => outputsList.push(item));
      });
    }

    // Costruzione modulo interattivo speciale per MARSEA (Loop Anatomico/Duotone)
    let specialWidgetHtml = '';
    if (node.interactiveType === 'marsea-loop') {
      specialWidgetHtml = `
        <div class="interactive-study-box">
          <h4>STUDIO INTERATTIVO // IL LOOP ANATOMICO &amp; DUOTONE</h4>
          <div class="loop-pills">
            <button type="button" class="loop-pill active" data-bg="linear-gradient(90deg, #FE76FE, #5AD683)" data-txt="1. RIFIORIRE — Parte del corpo: VISO & OCCHIO // Duotone: ROSA → VERDE">01. Viso / Occhio</button>
            <button type="button" class="loop-pill" data-bg="linear-gradient(90deg, #5AD683, #3F78FF)" data-txt="2. LA LUNA — Parte del corpo: MANI // Duotone: VERDE → BLU">02. Mani (Luna)</button>
            <button type="button" class="loop-pill" data-bg="linear-gradient(90deg, #3F78FF, #FFD600)" data-txt="3. IL SOLE — Parte del corpo: OMBELICO // Duotone: BLU → GIALLO">03. Ombelico (Sole)</button>
            <button type="button" class="loop-pill" data-bg="linear-gradient(90deg, #FFD600, #FE76FE)" data-txt="4. LE STELLE — Parte del corpo: SPALLA // Duotone: GIALLO → ROSA">04. Spalla (Stelle)</button>
            <button type="button" class="loop-pill" data-bg="#FFFFFF" data-txt="5. EP FINALE — FIGURA INTERA // Predominante Bianca con accenti cromatici sulle 4 parti del corpo.">05. Figura Intera (EP)</button>
          </div>
          <div class="loop-preview" id="loopPreview" style="background: linear-gradient(90deg, #FE76FE, #5AD683);">
            1. RIFIORIRE — Parte del corpo: VISO &amp; OCCHIO // Duotone: ROSA → VERDE
          </div>
        </div>
      `;
    } else if (node.interactiveType === 'tipule-editions') {
      specialWidgetHtml = `
        <div class="interactive-study-box">
          <h4>MUTAZIONE IDENTITÀ ANNUALE &amp; ARCHITETTURA</h4>
          <div class="loop-pills">
            <button type="button" class="loop-pill active" data-bg="#FE76FE" data-txt="EDIZIONE 2026 (28 Agosto, Borgo di Acaya): Lavoro sul 'fastidio visivo' con tipografia compressa a tutto schermo, Doppio Palco a incastro (Main Stage + Palco 2 Jam Session/Agorà) e raccolta fondi 6.000€ con H2O APS.">2026 // FASTIDIO VISIVO (#FE76FE)</button>
            <button type="button" class="loop-pill" data-bg="#FFD600" data-txt="EDIZIONE PILOTA 2025: 800+ partecipanti, 15+ artisti sul palco, 48k+ visualizzazioni social con 0€ di sponsorizzate e 81% reach su non-follower.">2025 // EDIZIONE PILOTA (800+ PAX)</button>
          </div>
          <div class="loop-preview" id="loopPreview" style="background: #FE76FE;">
            EDIZIONE 2026 (28 Agosto, Borgo di Acaya): Lavoro sul 'fastidio visivo' con tipografia compressa a tutto schermo, Doppio Palco a incastro e raccolta fondi 6.000€ con H2O APS.
          </div>
        </div>
      `;
    }

    const outputsHtml = outputsList.length
      ? `
        <div>
          <h4 style="font-family:var(--mono);font-size:0.75rem;margin-bottom:10px;">OUTPUT PER MANSIONE //</h4>
          <div class="dw-outputs-grid">
            ${outputsList.map((o) => `
              <div class="dw-output-card">
                <b>${o.tag}</b>
                <h5>${o.title}</h5>
                <p>${o.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      `
      : '';

    const linksHtml = (node.links && node.links.length)
      ? `
        <div class="dw-ext-links">
          ${node.links.map((l) => `<a class="dw-link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        </div>
      `
      : '';

    dwBody.innerHTML = `
      <h2 class="dw-title">${node.title}</h2>
      <div class="dw-voice-box">
        <span class="dw-voice-label">${modeBadge}</span>
        <p class="dw-voice-copy">${node.copy[currentMode]}</p>
      </div>
      ${specialWidgetHtml}
      ${outputsHtml}
      ${linksHtml}
    `;

    // Attiva i bottoni interattivi dello studio (se presenti)
    const pills = dwBody.querySelectorAll('.loop-pill');
    const preview = dwBody.querySelector('#loopPreview');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('active'));
        pill.classList.add('active');
        if (preview) {
          preview.style.background = pill.dataset.bg;
          preview.textContent = pill.dataset.txt;
        }
      });
    });
  }

  function closeDrawer() {
    studyDrawer.setAttribute('aria-hidden', 'true');
    activeDrawerNode = null;
  }

  drawerClose.addEventListener('click', closeDrawer);
  drawerBackdrop.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Bottone "LUCCNT // CONSCIOUSNESS" in alto a sinistra (Punto 5: Tu come progetto concettuale)
  document.getElementById('selfNodeBtn').addEventListener('click', () => {
    openStudyDrawer(SELF_CONCEPT_DATA);
  });

  /* ==========================================================================
     9. AVVIO SISTEMA
     ========================================================================== */
  buildNodes();
  requestAnimationFrame(animateEcosystem);
});