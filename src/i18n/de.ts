// Deutsch. Partial by design — see src/i18n/index.ts. Anything omitted here
// renders in English, so translate top-down and ship whenever you like.
import type { Translation } from './types';

export const de: Translation = {
  nav: {
    events: 'Termine',
    contact: 'Kontakt',
    about: 'Über mich',
    blog: 'Blog',
    pratibha: 'Pratibha',
    home: 'Start',
    jango: 'Jango-Projekt',
  },

  ui: {
    languageLabel: 'Sprache',
    menu: 'Menü',
    practiceWithMe: 'Mit mir praktizieren',
    getInTouch: 'Schreib mir',
    readPramana: 'PRĀMAṆA lesen',
    readMore: 'Weiterlesen',
    moreWriting: 'Mehr Texte',
    returnHome: 'Zur Startseite',
    donate: 'Spenden',
    previous: '← Zurück',
    next: 'Weiter →',
    by: 'Von',
  },

  newsletter: {
    title: 'Briefe vom Weg',
    intro:
      'Gelegentliche Nachrichten zu Terminen, Texten und dem, was sich in der Praxis entfaltet. Kein Marketing, nur Präsenz — jederzeit abbestellbar.',
    compactTitle: 'In Verbindung bleiben',
    emailPlaceholder: 'Deine E-Mail',
    emailLabel: 'E-Mail-Adresse für den Newsletter',
    subscribe: 'Abonnieren',
    notice: 'Bald verfügbar — die Anmeldung wird in Kürze aktiv.',
    privacy: 'Wir senden nur das, wofür du dich angemeldet hast. Jederzeit abbestellbar.',
  },

  footer: {
    tagline: 'Das Feuer der Offenbarung — strahlendes Bewusstsein für materielle Transformation.',
    person: 'Yoga mit Conor Byrnes',
    explore: 'Entdecken',
    connect: 'Kontakt',
    rights: 'Agni Agama · Conor Byrnes Yoga. Alle Rechte vorbehalten.',
  },

  home: {
    heroTagline: '– das Feuer der Offenbarung',
    heroSub: 'Strahlendes Bewusstsein für materielle Transformation',
    heroByline: 'Yoga, Retreats & Philosophie mit Conor Byrnes',
    practices: {
      will: { title: 'Wollen' },
      know: { title: 'Erkennen' },
      act: { title: 'Handeln' },
    },
    offerings: {
      classes: { title: 'Offene Klassen' },
      workshops: { title: 'Workshops' },
      retreats: { title: 'Retreats' },
      privates: { title: 'Einzelstunden' },
    },
    awakenTitle: 'Wachsen und erwachen',
  },

  about: {
    seoTitle: 'Conor Byrnes — Yogalehrer',
    role: 'Advanced Certified Jivamukti-Yogalehrer · Neuropsychologe · Paris',
    ctaJango: 'Das Jango-Projekt',
  },

  events: {
    seoTitle: 'Termine & Retreats mit Conor Byrnes',
    heading: 'Termine',
    subheading: 'Kommende Retreats, Ausbildungen & Zeremonien mit Conor Byrnes',
    regularTitle: 'Regelmäßige Klassen im Jivamukti Yoga Paris',
    privateTitle: 'Einzelstunden & individuelle Begleitung',
    privateOutroHtml:
      'Für Einzelstunden oder ein gemeinsam entwickeltes Programm {link}.',
    privateOutroLink: 'schreibe mir direkt',
  },

  contact: {
    seoTitle: 'Conor Byrnes kontaktieren',
    heading: 'Lass uns etwas erschaffen',
    form: {
      name: 'Name',
      email: 'E-Mail',
      interest: 'Was zieht dich an?',
      interestPlaceholder: 'Ein Retreat, Einzelstunden, eine Frage…',
      message: 'Deine Nachricht',
      send: 'Nachricht senden',
      sending: 'Senden…',
      ok: 'Danke — deine Nachricht ist unterwegs. Ich melde mich bald.',
      error: 'Etwas ist schiefgelaufen. Schreib mir gern direkt eine E-Mail.',
    },
  },

  blog: {
    seoTitle: 'PRĀMAṆA — Blog über Yoga & Philosophie',
    heroHeading: 'PRĀMAṆA ist ein Mittel des Erkennens, ein Weg des Verstehens',
  },

  post: {
    onlyInEnglish: 'Dieser Essay ist noch nicht übersetzt — er erscheint hier auf Englisch.',
  },

  jango: {
    seoTitle: 'Das Jango-Projekt',
    marquee: '✩ Jetzt spenden',
    heading: 'Gemeinschaft & Mitgefühl:',
    whyTitle: 'Warum geben?',
    missionTitle: 'Unsere Mission',
    mattersTitle: 'Warum deine Hilfe zählt',
    branchesTitle: 'Drei Zweige',
    branches: {
      education: { title: 'Bildung', tag: 'Junge Menschen stärken' },
      nutrition: { title: 'Ernährung', tag: 'Gesundes Wachstum nähren' },
      environment: { title: 'Umwelt', tag: 'Unseren Planeten bewahren' },
    },
    ctaTitle: 'Unterstütze unser Wachstum',
    ctaVisit: 'jangoproject.com besuchen',
  },

  pratibha: {
    eyebrow: 'Ein lebendiges Manuskript der Weisheit der Welt',
    lead:
      'Lebendige Weisheit studieren, nicht nur Text. Von der Quelle zur Übersetzung, vom Kommentar zur Praxis — und von einer Tradition zur nächsten.',
    open: 'Pratibha öffnen',
    whatIsIt: 'Was ist das?',
    introTitle: 'Eine kontemplative Bibliothek, die antwortet',
    layersEyebrow: 'Sechs Ebenen, eine Passage',
    layersTitle: 'Von allen Seiten lesen',
    layers: {
      original: { title: 'Original' },
      translation: { title: 'Übersetzung' },
      commentary: { title: 'Kommentar' },
      terms: { title: 'Schlüsselbegriffe' },
      resonances: { title: 'Resonanzen' },
      practice: { title: 'Praxis' },
    },
    tradEyebrow: 'Viele Flüsse, ein Ozean',
    tradTitle: 'Durch die Traditionen',
    tradMore: '…und mehr',
    companionTitle: 'Ein Studienbegleiter, in den Quellen verankert',
    companionCta: 'Lesen beginnen',
    features: {
      read: { strong: 'Lesen' },
      chat: { strong: 'Studien-Chat' },
      paths: { strong: 'Pfade' },
      random: { strong: 'Zufall' },
      journal: { strong: 'Journal' },
      sources: { strong: 'Quellen' },
    },
    ctaTitle: 'Sitze mit der Weisheit der Zeitalter',
    ctaOpen: 'Pratibha öffnen →',
  },

  notFound: {
    seoTitle: 'Seite nicht gefunden',
    heading: 'Dieser Pfad ist still geworden',
    lead:
      'Die gesuchte Seite gibt es hier nicht — vielleicht wurde sie verschoben, oder der Link führte zu etwas, das nicht mehr existiert.',
  },

  seo: {
    defaultTitle: 'Conor Byrnes Yoga — Agni Agama | Jivamukti, Retreats & Philosophie',
  },
};
