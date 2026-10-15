document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================================================
     1. DATABASE DEI 10 NODI (IMMAGINI PER FILTRO + STUDIO + 3 TONI)
     ========================================================================== */
  const NODES_DATA = [
    {
      id: 'tipule',
      code: '01',
      title: 'Tipule Fest',
      isMain: true,
      color: '#FE76FE',
      xPct: 0.23,
      yPct: 0.30,
      roles: ['art-direction', 'graphic', 'video', 'pm'],
      connections: ['marsea', 'siamo', 'janaki'],
      thoughts: {
        playful: 'tipule fest — cambia identità ogni anno per chi non se n’è mai voluto andare.',
        invested: 'tipule fest — 800+ presenze, 48k views organiche (0€ adv), doppio palco a incastro e business plan 6.000€ con H2O APS.',
        fuckedup: 'tipule fest 2026 — lavorare sul fastidio visivo in rosa #FE76FE per scuotere l’estate salentina.'
      },
      copy: {
        playful: 'Per chi non se n’è mai voluto andare. Un festival gratuito nel borgo fortificato di Acaya che muta pelle ogni anno.',
        invested: 'Laboratorio di innovazione sociale e culturale nel Borgo di Acaya (LE) contro la diaspora artistica giovanile. 15+ artisti su 2 palchi coordinati (Main Stage + Palco 2 Jam Session / Spazio Agorà), 800+ partecipanti nella prima edizione e sostenibilità garantita tramite H2O APS.',
        fuckedup: 'Fare un festival gratuito in Puglia senza compromessi commerciali: nel 2026 abbiamo scelto il "fastidio visivo" e il rosa #FE76FE.'
      },
      mediaByRole: {
        'art-direction': [
          { tag: 'Art Direction', title: 'Identità Mutante 2026', img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Art Direction', title: 'Largo Castello Setup', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=80' }
        ],
        'graphic': [
          { tag: 'Graphic', title: 'Post "Siamo in ritardo"', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Graphic', title: 'Poster Tipule x Surf', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80' }
        ],
        'video': [
          { tag: 'Video', title: 'Reel Tipule x Surf', img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&auto=format&fit=crop&q=80' }
        ],
        'pm': [
          { tag: 'Project Mgmt', title: 'Business Plan 6k€ & 2 Palchi', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      interactiveType: 'tipule-editions',
      links: [
        { label: 'instagram @tipulefest ↗', url: 'https://www.instagram.com/tipulefest/' }
      ]
    },
    {
      id: 'marsea',
      code: '02',
      title: 'Marsea',
      isMain: true,
      color: '#5AD683',
      xPct: 0.50,
      yPct: 0.23,
      roles: ['art-direction', 'photo', 'graphic', 'video'],
      connections: ['tipule', 'janaki', 'morireperte'],
      thoughts: {
        playful: 'marsea — 4 parti del corpo e 4 duotone concatenati per ricomporre un’identità.',
        invested: 'marsea — direzione artistica seriale: viso (rosa-verde), mani (verde-blu), ombelico (blu-giallo), spalla (giallo-rosa) ed EP.',
        fuckedup: 'marsea — smontare l’immaginario dell’artista pezzo per pezzo senza mai ripetersi.'
      },
      copy: {
        playful: 'Un dialogo interno con la propria identità frammentata attraverso stelle, sole, luna e fiori. Ogni singolo isola un dettaglio anatomico in un loop cromatico continuo.',
        invested: 'Sistema visivo seriale per 4 singoli + EP: si parte dal viso/occhio con Rifiorire (rosa-verde), le mani per la luna (verde-blu), l’ombelico per il sole (blu-giallo), la spalla per le stelle (giallo-rosa) e la figura intera su bianco per l’EP finale.',
        fuckedup: 'La sfida di fare sempre qualcosa di nuovo a ogni singolo, usando il vincolo anatomico e cromatico per alzare costantemente il livello tecnico.'
      },
      mediaByRole: {
        'art-direction': [
          { tag: 'Art Direction', title: 'EP Identità Frammentata', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Art Direction', title: 'Rifiorire (Duotone Loop)', img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=500&auto=format&fit=crop&q=80' }
        ],
        'photo': [
          { tag: 'Photo', title: 'Shooting Naturale', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80' }
        ],
        'graphic': [
          { tag: 'Graphic', title: 'Caroselli Instagram', img: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=500&auto=format&fit=crop&q=80' }
        ],
        'video': [
          { tag: 'Video', title: 'Reel & Visual Canvas', img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      interactiveType: 'marsea-loop',
      links: []
    },
    {
      id: 'siamo',
      code: '03',
      title: 'SiamoUnMagazine',
      isMain: true,
      color: '#E82A1C',
      xPct: 0.78,
      yPct: 0.32,
      roles: ['copywriting', 'graphic', 'video', 'photo'],
      connections: ['tipule', '2colon', 'morireperte'],
      thoughts: {
        playful: 'siamounmagazine — 100+ creativi al lavoro per rendere l’industria musicale meno tossica.',
        invested: 'siamounmagazine — produzione multidisciplinare tra articoli, grafica, foto e video-interviste.',
        fuckedup: 'siamounmagazine — contro le dinamiche tossiche della discografia, sporcandosi le mani sul campo.'
      },
      copy: {
        playful: 'Accogliere gli stimoli cimentandosi in ruoli diversi dentro una community di oltre 100 creativi indipendenti.',
        invested: 'Attività trasversale di Copywriting, Graphic Design, Fotografia e Videomaking all’interno di Siamo Un Magazine, con focus sulla scena emergente e underground.',
        fuckedup: 'Lavorare in una rete di 100+ teste per rendere l’industria musicale un posto meno tossico e più autentico.'
      },
      mediaByRole: {
        'copywriting': [
          { tag: 'Copywriting', title: 'Articoli & Recensioni', img: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=80' }
        ],
        'graphic': [
          { tag: 'Graphic', title: 'Layout & Rubriche IG', img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=500&auto=format&fit=crop&q=80' }
        ],
        'photo': [
          { tag: 'Photo', title: 'Reportage & Ritratti', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80' }
        ],
        'video': [
          { tag: 'Video', title: 'Interviste Studio & Live', img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: []
    },
    {
      id: 'scroccup',
      code: '04',
      title: 'ScroccUp',
      isMain: true,
      color: '#F26432',
      xPct: 0.27,
      yPct: 0.72,
      roles: ['graphic', 'ui-ux'],
      connections: ['simulacra', 'sacraterra'],
      thoughts: {
        playful: 'scroccup — l’app di food-sharing che salva il frigo dei collegiali.',
        invested: 'scroccup — ricerca quantitativa, brand identity #F26432, prototipo Figma e video pitch Vimeo.',
        fuckedup: 'scroccup — trasformare lo "scrocco" universitario in un sistema anti-spreco.'
      },
      copy: {
        playful: 'L’app di food-sharing per i collegiali: condividi gli ingredienti in scadenza e cucina insieme.',
        invested: 'Progetto UX/UI e Brand Identity completo: analisi quantitativa nei collegi universitari, design system arancio #F26432, prototipo interattivo Figma e presentazione video su Vimeo.',
        fuckedup: 'Un’app contro lo spreco alimentare che parla finalmente la lingua vera degli studenti fuori sede.'
      },
      mediaByRole: {
        'graphic': [
          { tag: 'Graphic', title: 'Brand Identity #F26432', img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80' }
        ],
        'ui-ux': [
          { tag: 'UI/UX', title: 'Prototipo Figma', img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=500&auto=format&fit=crop&q=80' },
          { tag: 'UI/UX', title: 'Flussi & User Research', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: [
        { label: 'behance case study ↗', url: 'https://www.behance.net/gallery/252607759/SCROCCUP-LApp-di-FoodSharing-per-i-Collegiali' },
        { label: 'figma prototype ↗', url: 'https://www.figma.com/proto/f1GJ20X1AQEuw38pNFJIYU/PROTOTIPO_SCROCCUP?content-scaling=fixed&kind=proto&node-id=10-5976&page-id=1%3A3&scaling=scale-down&starting-point-node-id=10%3A5976' },
        { label: 'vimeo pitch ↗', url: 'https://vimeo.com/1209626682?fl=pl&fe=sh' }
      ]
    },
    {
      id: 'insincrono',
      code: '05',
      title: 'IN|SINCRONO',
      isMain: false,
      color: '#4A148C',
      xPct: 0.48,
      yPct: 0.54,
      roles: ['photo', 'art-direction'],
      connections: ['simulacra', 'marsea', 'janaki'],
      thoughts: {
        playful: 'in|sincrono — fotografia tradizionale fusa con media digitali audioreattivi.',
        invested: 'in|sincrono — ricerca post-internet e live art direction con collettivo elettronico sperimentale.',
        fuckedup: 'in|sincrono — far collidere lo scatto fotografico con le frequenze live.'
      },
      copy: {
        playful: 'Fusione tra fotografia tradizionale e media digitali fluidi e audioreattivi con il collettivo IN|SINCRONO.',
        invested: 'My signature style emerges from the fusion of traditional photography and fluid, audio-reactive digital media. Collaboration with IN|SINCRONO, rooted in post-internet aesthetics and experimental electronic music.',
        fuckedup: 'Tradurre la visione fotografica personale in live art direction ad alto impatto.'
      },
      mediaByRole: {
        'photo': [
          { tag: 'Photo', title: 'Post-Internet Aesthetics', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Photo', title: 'Live Electronic Visuals', img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&auto=format&fit=crop&q=80' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'Audio-Reactive Direction', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: []
    },
    {
      id: 'simulacra',
      code: '06',
      title: 'Simulacra',
      isMain: false,
      color: '#3D9DD5',
      xPct: 0.14,
      yPct: 0.54,
      roles: ['photo', 'art-direction'],
      connections: ['insincrono', 'scroccup'],
      thoughts: {
        playful: 'simulacra — abiti fatti di texture alimentari fotografati in un autolavaggio.',
        invested: 'simulacra — editorial shooting per tesi Fashion Design NABA ispirato a Lucrezio.',
        fuckedup: 'simulacra — cortocircuito sensoriale tra materia organica e car wash industriale.'
      },
      copy: {
        playful: 'Shooting editoriale per tesi NABA: abiti creati con texture di cibo dentro il gelo meccanico di un car wash.',
        invested: 'Editorial shooting for a Fashion Design thesis at NABA. Conceptual visual translation inspired by Lucretius’ simulacra, featuring garments crafted entirely from food textures inside a car wash.',
        fuckedup: 'Contrasto radicale: texture organiche e sensoriali sbattute dentro l’architettura aliena di un autolavaggio.'
      },
      mediaByRole: {
        'photo': [
          { tag: 'Photo', title: 'Car Wash Editorial I', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Photo', title: 'Sensory Food Textures', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'NABA Thesis Concept', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: []
    },
    {
      id: 'janaki',
      code: '07',
      title: 'Janaki',
      isMain: false,
      color: '#9575CD',
      xPct: 0.63,
      yPct: 0.47,
      roles: ['video'],
      connections: ['tipule', 'marsea', 'morireperte', 'insincrono'],
      thoughts: {
        playful: 'janaki — video per il singolo "Grafite" + live session di "Alibi" e "Antidoto".',
        invested: 'janaki — produzione e regia video per "Grafite", "Alibi" e "Antidoto".',
        fuckedup: 'janaki — camera viva e ravvicinata per catturare la tensione reale del live.'
      },
      copy: {
        playful: 'Trilogia video per Janaki: il singolo "Grafite" e le due live session di "Alibi" e "Antidoto".',
        invested: 'Progettazione e produzione video per il progetto musicale Janaki: visual per il singolo "Grafite" e ripresa/montaggio delle live session "Alibi" e "Antidoto".',
        fuckedup: 'Senza rete: catturare l’istante emotivo esatto durante le performance live.'
      },
      mediaByRole: {
        'video': [
          { tag: 'Video', title: 'Singolo "Grafite"', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Video', title: 'Live Session "Alibi"', img: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&auto=format&fit=crop&q=80' },
          { tag: 'Video', title: 'Live Session "Antidoto"', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: [
        { label: 'youtube: alibi live ↗', url: 'http://www.youtube.com/watch?v=FFXYVrovL18' },
        { label: 'youtube: antidoto live ↗', url: 'http://www.youtube.com/watch?v=KxIw-6WlX5w' }
      ]
    },
    {
      id: 'morireperte',
      code: '08',
      title: 'Morire per te',
      isMain: false,
      color: '#FF7043',
      xPct: 0.72,
      yPct: 0.68,
      roles: ['video', 'art-direction'],
      connections: ['janaki', 'siamo', 'marsea'],
      thoughts: {
        playful: 'morire per te — acoustic live session per Susanna Biollo & Dimaggio, in anteprima su Billboard.',
        invested: 'morire per te — direzione e montaggio al Guscio Studio (Milano), anteprima Billboard Italia.',
        fuckedup: 'morire per te — intimità acustica tra pianoforte, violoncello, chitarre e due voci.'
      },
      copy: {
        playful: 'Direzione e montaggio della live session acustica di Susanna Biollo e Dimaggio, uscita in anteprima su Billboard Italia.',
        invested: 'Regia e montaggio presso il Guscio Recording Studio di Milano per la versione acustica live di "Morire per te" (Susanna Biollo, Dimaggio), selezionata in anteprima da Billboard Italia.',
        fuckedup: 'Lasciare che i dettagli degli strumenti e gli sguardi in studio raccontino la canzone senza artifici.'
      },
      mediaByRole: {
        'video': [
          { tag: 'Video', title: 'Billboard Live Session', img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&auto=format&fit=crop&q=80' }
        ],
        'art-direction': [
          { tag: 'Art Direction', title: 'Guscio Studio Visuals', img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: [
        { label: 'youtube: morire per te ↗', url: 'http://www.youtube.com/watch?v=u_O86zbiH28' },
        { label: 'billboard italia premiere ↗', url: 'https://billboard.it/musica/pop/anteprima-live-session-morire-per-te-susanna-biollo-dimaggio/2026/06/17207243/' }
      ]
    },
    {
      id: 'sacraterra',
      code: '09',
      title: 'Sacra Terra',
      isMain: false,
      isTodo: true,
      color: '#C0CA33',
      xPct: 0.43,
      yPct: 0.82,
      roles: ['art-direction', 'graphic'],
      connections: ['scroccup', '2colon'],
      thoughts: {
        playful: 'sacra terra [in incubazione] — un community hub che dà valore all’essenza di ogni individuo.',
        invested: 'sacra terra [todo] — sviluppo branding per community hub incentrato sull’identità individuale.',
        fuckedup: 'sacra terra — sinapsi in formazione. identità visiva in arrivo.'
      },
      copy: {
        playful: '[Sinapsi in incubazione] Sacra Terra è un community hub che dà valore all’essenza di ogni individuo.',
        invested: '[In sviluppo] Progetto di Branding e identità visiva per il community hub Sacra Terra.',
        fuckedup: '[Work in progress] Costruire uno spazio reale e visivo dove l’essenza individuale non venga appiattita.'
      },
      mediaByRole: {
        'art-direction': [
          { tag: 'Branding // TODO', title: 'Community Hub Concept', img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=500&auto=format&fit=crop&q=80' }
        ],
        'graphic': [
          { tag: 'Branding // TODO', title: 'Visual Research', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: []
    },
    {
      id: '2colon',
      code: '10',
      title: '2:',
      isMain: false,
      isTodo: true,
      color: '#00ACC1',
      xPct: 0.85,
      yPct: 0.78,
      roles: ['graphic', 'copywriting', 'art-direction'],
      connections: ['siamo', 'sacraterra'],
      thoughts: {
        playful: '2: [in incubazione] — sfidare i linguaggi giornalistici per sfondare la parete dell’indifferenza.',
        invested: '2: [todo] — progetto redazionale, graphic design e branding per una nuova fruizione delle notizie.',
        fuckedup: '2: — abbattere l’anestesia verso le notizie e il sapere.'
      },
      copy: {
        playful: '[Sinapsi in incubazione] "2:" è un progetto redazionale che sfida i linguaggi giornalistici per sfondare la parete dell’indifferenza alle notizie e al sapere.',
        invested: '[In sviluppo] Graphic Design e Branding per "2:", format editoriale sperimentale.',
        fuckedup: '[Work in progress] Riprogettare il modo in cui le notizie colpiscono chi legge.'
      },
      mediaByRole: {
        'graphic': [
          { tag: 'Graphic // TODO', title: 'Editorial System', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&auto=format&fit=crop&q=80' }
        ],
        'copywriting': [
          { tag: 'Editorial // TODO', title: 'Nuovi Linguaggi', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=80' }
        ]
      },
      links: []
    }
  ];

  const SELF_CONCEPT_DATA = {
    code: '00',
    title: 'luccnt // consciousness',
    color: '#121212',
    roles: ['art-direction', 'graphic', 'ui-ux', 'photo', 'video', 'copywriting', 'pm'],
    copy: {
      playful: 'Io sono il progetto concettuale (non visivo) che connette questi 10 nodi tra Torino e il Salento.',
      invested: 'Lucrezia Conte (Luccnt) — Design e Comunicazione @ Politecnico di Torino & Presidente H2O APS. Art Direction, Visual Design, UX/UI, Fotografia, Video e Project Management.',
      fuckedup: 'Rifiuto i portfolio standard: linee pulite, rigore berlinese e contrasti pop quando tocchi le sinapsi.'
    },
    mediaByRole: {},
    links: [
      { label: 'contelucrezia.14@gmail.com ↗', url: 'mailto:contelucrezia.14@gmail.com' },
      { label: 'tipulefestival@gmail.com ↗', url: 'mailto:tipulefestival@gmail.com' }
    ]
  };

  /* ==========================================================================
     2. STATO & RIFERIMENTI DOM
     ========================================================================== */
  let currentMode = 'playful';
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
  const shapeStateLabel = document.getElementById('shapeStateLabel');

  /* ==========================================================================
     3. COSTRUZIONE NODI CON HOVER SOLO IMMAGINI (Filtrate per Mansione)
     ========================================================================== */
  function getThumbsForNode(node, filter) {
    if (filter !== 'all' && node.mediaByRole && node.mediaByRole[filter]) {
      return node.mediaByRole[filter];
    }
    const list = [];
    if (node.mediaByRole) {
      Object.keys(node.mediaByRole).forEach((k) => {
        node.mediaByRole[k].forEach((m) => list.push(m));
      });
    }
    return list.slice(0, 3);
  }

  function buildNodes() {
    nodesLayer.innerHTML = '';
    nodeElements = {};

    NODES_DATA.forEach((node) => {
      const el = document.createElement('div');
      el.className = `p-node ${node.isMain ? 'is-main' : ''} ${node.isTodo ? 'is-todo' : ''}`;
      el.style.setProperty('--node-pop', node.color);
      el.dataset.id = node.id;

      const thumbs = getThumbsForNode(node, currentFilter);
      const thumbsHtml = thumbs.map((t, i) => `
        <div class="fan-thumb" data-idx="${i}">
          <img src="${t.img}" alt="${t.title}" loading="lazy">
          <span class="fan-thumb-badge">${t.tag}</span>
        </div>
      `).join('');

      el.innerHTML = `
        <div class="img-fan">${thumbsHtml}</div>
        <div class="node-anchor">
          <span class="node-shape"></span>
          <div class="node-info">
            <span class="node-num">${node.code}</span>
            <span class="node-name">${node.title}</span>
          </div>
        </div>
      `;

      el.addEventListener('mouseenter', () => {
        thoughtStream.textContent = node.thoughts[currentMode];
      });

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
     4. MOTORE AUDIOREATTIVO AMBIENT + SUB-BASS
     ========================================================================== */
  let audioCtx = null;
  let analyser = null;
  let freqData = null;
  let isAudioActive = false;
  let synthNodes = [];

  const audioBtn = document.getElementById('audioToggle');
  const bgAudio = document.getElementById('bgAudio');
  const eqBars = document.querySelectorAll('#eqBars i');

  function startAmbientSynth() {
    const oscSub = audioCtx.createOscillator();
    const oscPad = audioCtx.createOscillator();
    const filter = audioCtx.createBiquadFilter();
    const gain = audioCtx.createGain();

    oscSub.type = 'sine';
    oscSub.frequency.value = 55;
    oscPad.type = 'triangle';
    oscPad.frequency.value = 110;

    filter.type = 'lowpass';
    filter.frequency.value = 220;
    gain.gain.value = 0.09;

    oscSub.connect(filter);
    oscPad.connect(filter);
    filter.connect(gain);
    gain.connect(analyser);
    analyser.connect(audioCtx.destination);

    oscSub.start();
    oscPad.start();
    synthNodes = [oscSub, oscPad];
  }

  function stopAmbientSynth() {
    synthNodes.forEach((n) => { try { n.stop(); } catch (e) {} });
    synthNodes = [];
  }

  audioBtn.addEventListener('click', async () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      freqData = new Uint8Array(analyser.frequencyBinCount);
    }
    if (audioCtx.state === 'suspended') await audioCtx.resume();

    isAudioActive = !isAudioActive;
    audioBtn.setAttribute('aria-pressed', isAudioActive ? 'true' : 'false');
    audioBtn.querySelector('.audio-lbl').textContent = isAudioActive ? 'sound: on' : 'sound: off';

    if (isAudioActive) {
      bgAudio.play().then(() => {
        if (!bgAudio._connected) {
          const src = audioCtx.createMediaElementSource(bgAudio);
          src.connect(analyser);
          analyser.connect(audioCtx.destination);
          bgAudio._connected = true;
        }
      }).catch(() => startAmbientSynth());
    } else {
      bgAudio.pause();
      stopAmbientSynth();
      eqBars.forEach((b) => (b.style.height = '3px'));
    }
  });

  /* ==========================================================================
     5. FISICA DEL CURSORE: SCIA CON FORMA MUTANTE + VENTAGLIO IMMAGINI
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

    cursorCoords.textContent = `x: ${String(Math.round(nx)).padStart(3, '0')} · y: ${String(Math.round(ny)).padStart(3, '0')}`;

    if (mouse.speed > 5) {
      const colors = ['#FE76FE', '#5AD683', '#E82A1C', '#F26432', '#3D9DD5'];
      trailPoints.push({
        x: nx,
        y: ny,
        size: Math.min(22, 6 + mouse.speed * 0.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0
      });
    }
  });

  function drawMorphShape(ctx, x, y, r, mode) {
    ctx.beginPath();
    if (mode === 'playful') {
      // Cerchio organico
      ctx.arc(x, y, r, 0, Math.PI * 2);
    } else if (mode === 'invested') {
      // Quadrato ortogonale
      ctx.rect(x - r, y - r, r * 2, r * 2);
    } else {
      // Diamante / Poligono tagliato (Fucked Up)
      ctx.moveTo(x, y - r * 1.3);
      ctx.lineTo(x + r * 1.1, y);
      ctx.lineTo(x, y + r * 1.3);
      ctx.lineTo(x - r * 1.1, y);
      ctx.closePath();
    }
  }

  function animate(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let bass = 0;
    if (isAudioActive && analyser && freqData) {
      analyser.getByteFrequencyData(freqData);
      bass = (freqData[1] + freqData[2]) / (2 * 255);
      eqBars.forEach((b, i) => {
        b.style.height = `${Math.max(2, ((freqData[i * 2 + 1] || 10) / 255) * 11)}px`;
      });
    }

    const magnetRadius = 135;

    NODES_DATA.forEach((node, idx) => {
      const item = nodeElements[node.id];
      if (!item) return;

      const fx = Math.sin(time * 0.001 + idx) * (3 + bass * 14);
      const fy = Math.cos(time * 0.0012 + idx) * (3 + bass * 14);

      const dx = mouse.x - item.baseX;
      const dy = mouse.y - item.baseY;
      const dist = Math.hypot(dx, dy);

      let tx = item.baseX + fx;
      let ty = item.baseY + fy;

      const thumbs = item.el.querySelectorAll('.fan-thumb');

      if (dist < magnetRadius && !item.el.classList.contains('dimmed')) {
        const pull = (1 - dist / magnetRadius) * 0.32;
        tx += dx * pull;
        ty += dy * pull;
        item.el.classList.add('magnet-locked');

        const baseAngle = Math.atan2(dy, dx);
        thumbs.forEach((thumb, tIdx) => {
          const offsetAngle = (tIdx - (thumbs.length - 1) / 2) * 0.48;
          const radius = 104 + tIdx * 8;
          const cx = Math.cos(baseAngle + offsetAngle) * radius;
          const cy = Math.sin(baseAngle + offsetAngle) * radius;
          const rot = (offsetAngle * 180) / Math.PI * 0.45;
          thumb.style.transform = `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) rotate(${rot}deg) scale(1)`;
        });
      } else {
        item.el.classList.remove('magnet-locked');
        thumbs.forEach((thumb) => {
          thumb.style.transform = 'translate(-50%, -50%) scale(0.45)';
        });
      }

      item.curX += (tx - item.curX) * 0.12;
      item.curY += (ty - item.curY) * 0.12;

      item.el.style.left = `${item.curX}px`;
      item.el.style.top = `${item.curY}px`;
    });

    // Linee di connessione Berlinesi (0.75px hairline)
    ctx.lineWidth = 0.85;
    NODES_DATA.forEach((node) => {
      const from = nodeElements[node.id];
      if (!from) return;

      node.connections.forEach((tid) => {
        const to = nodeElements[tid];
        if (!to) return;

        const mx = (from.curX + to.curX) / 2;
        const my = (from.curY + to.curY) / 2;
        const dm = Math.hypot(mouse.x - mx, mouse.y - my);

        let cx = mx;
        let cy = my;
        if (dm < 150) {
          const f = (1 - dm / 150) * 28;
          cx += (mx - mouse.x) * (f / 100);
          cy += (my - mouse.y) * (f / 100);
        }
        if (isAudioActive) {
          cy += Math.sin(time * 0.015 + mx) * (bass * 24);
        }

        ctx.beginPath();
        ctx.moveTo(from.curX, from.curY);
        ctx.quadraticCurveTo(cx, cy, to.curX, to.curY);
        ctx.strokeStyle = dm < 130 ? node.color : 'rgba(18, 18, 18, 0.14)';
        ctx.stroke();
      });
    });

    // Scia geometrica che cambia forma con lo Switch
    for (let i = trailPoints.length - 1; i >= 0; i--) {
      const p = trailPoints[i];
      p.life -= 0.04;
      if (p.life <= 0) {
        trailPoints.splice(i, 1);
        continue;
      }
      ctx.save();
      ctx.strokeStyle = p.color;
      ctx.lineWidth = 1;
      ctx.globalAlpha = p.life * 0.75;
      drawMorphShape(ctx, p.x, p.y, (p.size * p.life) / 2, currentMode);
      ctx.stroke();
      ctx.restore();
    }

    requestAnimationFrame(animate);
  }

  /* ==========================================================================
     6. FILTRI MANSIONE & SWITCH SEMAFORO (CAMBIO FORMA E PENSIERO)
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.flt');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');
      currentFilter = btn.dataset.role;
      document.body.dataset.filter = currentFilter;
      activeFilterLabel.textContent = `view: ${btn.textContent.toLowerCase()}`;

      buildNodes();
      NODES_DATA.forEach((node) => {
        const item = nodeElements[node.id];
        if (!item) return;
        const match = currentFilter === 'all' || node.roles.includes(currentFilter);
        item.el.classList.toggle('dimmed', !match);
      });
    });
  });

  const modeBtns = document.querySelectorAll('[data-set-mode]');
  const SHAPE_LABELS = {
    playful: 'shape: organic circle (playful)',
    invested: 'shape: orthogonal square (invested)',
    fuckedup: 'shape: sliced polygon (fucked up)'
  };
  const MODE_THOUGHTS = {
    playful: 'stato playful — forme circolari e navigazione visiva leggera.',
    invested: 'stato invested — geometria ortogonale, strategia, numeri e case study.',
    fuckedup: 'stato fucked up — poligoni tagliati, concetto crudo e sperimentazione.'
  };

  modeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modeBtns.forEach((b) => b.classList.remove('on'));
      btn.classList.add('on');
      currentMode = btn.dataset.setMode;
      document.body.dataset.mode = currentMode;
      shapeStateLabel.textContent = SHAPE_LABELS[currentMode];
      thoughtStream.textContent = MODE_THOUGHTS[currentMode];

      if (studyDrawer.getAttribute('aria-hidden') === 'false' && activeDrawerNode) {
        renderDrawerContent(activeDrawerNode);
      }
    });
  });

  /* ==========================================================================
     7. DRAWER DI STUDIO DEL PROGETTO
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
    dwId.textContent = `node // ${node.code}`;
    dwRoles.textContent = node.roles.join(' · ');

    const allMedia = [];
    if (node.mediaByRole) {
      Object.keys(node.mediaByRole).forEach((k) => {
        node.mediaByRole[k].forEach((m) => allMedia.push(m));
      });
    }

    let interactiveHtml = '';
    if (node.interactiveType === 'marsea-loop') {
      interactiveHtml = `
        <div class="study-module">
          <h4>loop anatomico &amp; duotone</h4>
          <div class="pill-row">
            <button type="button" class="s-pill active" data-bg="linear-gradient(90deg, #fce4ec, #e8f5e9)" data-txt="01. Rifiorire — Viso & Occhio // Duotone: Rosa → Verde">01. Viso</button>
            <button type="button" class="s-pill" data-bg="linear-gradient(90deg, #e8f5e9, #e3f2fd)" data-txt="02. La Luna — Mani // Duotone: Verde → Blu">02. Mani</button>
            <button type="button" class="s-pill" data-bg="linear-gradient(90deg, #e3f2fd, #fffde7)" data-txt="03. Il Sole — Ombelico // Duotone: Blu → Giallo">03. Ombelico</button>
            <button type="button" class="s-pill" data-bg="linear-gradient(90deg, #fffde7, #fce4ec)" data-txt="04. Le Stelle — Spalla // Duotone: Giallo → Rosa">04. Spalla</button>
            <button type="button" class="s-pill" data-bg="#ffffff" data-txt="05. EP Finale — Figura Intera // Bianco predominante con accenti cromatici sulle parti del corpo">05. EP</button>
          </div>
          <div class="s-preview" id="sPreview" style="background: linear-gradient(90deg, #fce4ec, #e8f5e9);">
            01. Rifiorire — Viso &amp; Occhio // Duotone: Rosa → Verde
          </div>
        </div>
      `;
    } else if (node.interactiveType === 'tipule-editions') {
      interactiveHtml = `
        <div class="study-module">
          <h4>mutazione annuale &amp; struttura</h4>
          <div class="pill-row">
            <button type="button" class="s-pill active" data-bg="#fdf2fd" data-txt="2026 (28 Agosto, Borgo di Acaya): Fastidio visivo #FE76FE, doppio palco a incastro (Main Stage + Palco 2 Jam Session/Agorà) e raccolta 6.000€ con H2O APS.">2026 // #FE76FE</button>
            <button type="button" class="s-pill" data-bg="#fffde7" data-txt="2025 (Edizione Pilota): 800+ partecipanti, 15+ artisti emergenti, 48k+ views organiche con 0€ di adv.">2025 // Pilota</button>
          </div>
          <div class="s-preview" id="sPreview" style="background: #fdf2fd;">
            2026 (28 Agosto, Borgo di Acaya): Fastidio visivo #FE76FE, doppio palco a incastro e raccolta 6.000€ con H2O APS.
          </div>
        </div>
      `;
    }

    const galleryHtml = allMedia.length
      ? `<div class="dw-gallery">
          ${allMedia.map((m) => `
            <figure class="dw-fig">
              <img src="${m.img}" alt="${m.title}" loading="lazy">
              <figcaption><b>${m.tag}</b>${m.title}</figcaption>
            </figure>
          `).join('')}
        </div>`
      : '';

    const linksHtml = (node.links && node.links.length)
      ? `<div class="dw-links">
          ${node.links.map((l) => `<a class="dw-a" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        </div>`
      : '';

    dwBody.innerHTML = `
      <h2 class="dw-title">${node.title}</h2>
      <p class="dw-copy">${node.copy[currentMode]}</p>
      ${interactiveHtml}
      ${galleryHtml}
      ${linksHtml}
    `;

    const pills = dwBody.querySelectorAll('.s-pill');
    const preview = dwBody.querySelector('#sPreview');
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

  document.getElementById('selfNodeBtn').addEventListener('click', () => {
    openStudyDrawer(SELF_CONCEPT_DATA);
  });

  /* ==========================================================================
     8. GENERATORE .ZIP INTEGRATO (Scarica tutta la cartella con 1 click)
     ========================================================================== */
  const exportZipBtn = document.getElementById('exportZipBtn');
  if (exportZipBtn) {
    exportZipBtn.addEventListener('click', async () => {
      if (typeof JSZip === 'undefined') {
        alert('Libreria JSZip non caricata. Verifica la connessione internet.');
        return;
      }
      exportZipBtn.textContent = 'packing...';
      const zip = new JSZip();
      const folder = zip.folder('luccnt-berlin-portfolio');
      folder.folder('assets');

      try {
        const [htmlRes, cssRes, jsRes] = await Promise.all([
          fetch('index.html').then((r) => r.text()).catch(() => document.documentElement.outerHTML),
          fetch('style.css').then((r) => r.text()).catch(() => ''),
          fetch('script.js').then((r) => r.text()).catch(() => '')
        ]);

        folder.file('index.html', htmlRes);
        folder.file('style.css', cssRes);
        folder.file('script.js', jsRes);
        folder.file('README.txt', 'Inserisci in /assets il file ambient-track.mp3 e le immagini dei tuoi progetti.');

        const blob = await zip.generateAsync({ type: 'blob' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'luccnt-berlin-portfolio.zip';
        a.click();
      } finally {
        exportZipBtn.textContent = '↓ .zip';
      }
    });
  }

  buildNodes();
  requestAnimationFrame(animate);
});