// Français. Partial by design — see src/i18n/index.ts. Anything omitted here
// renders in English, so translate top-down and ship whenever you like.
import type { Translation } from './types';

export const fr: Translation = {
  nav: {
    events: 'Événements',
    contact: 'Contact',
    about: 'À propos',
    blog: 'Blog',
    pratibha: 'Pratibha',
    home: 'Accueil',
    jango: 'Projet Jango',
  },

  ui: {
    languageLabel: 'Langue',
    menu: 'Menu',
    practiceWithMe: 'Pratiquer avec moi',
    getInTouch: 'Me contacter',
    readPramana: 'Lire PRĀMAṆA',
    readMore: 'Lire la suite',
    moreWriting: 'Autres textes',
    returnHome: 'Retour à l’accueil',
    donate: 'Faire un don',
    previous: '← Précédent',
    next: 'Suivant →',
    by: 'Par',
  },

  newsletter: {
    title: 'Lettres du chemin',
    intro:
      'Des nouvelles occasionnelles : événements, textes, et ce qui se déploie dans la pratique. Pas de marketing, seulement de la présence — désinscription à tout moment.',
    compactTitle: 'Rester en lien',
    emailPlaceholder: 'Votre e-mail',
    emailLabel: 'Adresse e-mail pour la newsletter',
    subscribe: 'S’inscrire',
    notice: 'Bientôt disponible — l’inscription sera active sous peu.',
    privacy: 'Nous n’envoyons que ce à quoi vous vous êtes inscrit. Désinscription à tout moment.',
  },

  footer: {
    tagline: 'Le feu de la révélation — une conscience éclatante pour la transformation matérielle.',
    person: 'Yoga avec Conor Byrnes',
    explore: 'Explorer',
    connect: 'Contact',
    rights: 'Agni Agama · Conor Byrnes Yoga. Tous droits réservés.',
  },

  home: {
    heroTagline: '– le feu de la révélation',
    heroSub: 'Une conscience éclatante pour la transformation matérielle',
    heroByline: 'Yoga, retraites & philosophie avec Conor Byrnes',
    practices: {
      will: { title: 'Vouloir' },
      know: { title: 'Connaître' },
      act: { title: 'Agir' },
    },
    offerings: {
      classes: { title: 'Cours collectifs' },
      workshops: { title: 'Ateliers' },
      retreats: { title: 'Retraites' },
      privates: { title: 'Cours particuliers' },
    },
    awakenTitle: 'Évoluer et s’éveiller',
  },

  about: {
    seoTitle: 'Conor Byrnes — Professeur de yoga',
    role: 'Professeur de yoga Jivamukti certifié avancé · Neuropsychologue · Paris',
    ctaJango: 'Le Projet Jango',
  },

  events: {
    seoTitle: 'Événements & retraites avec Conor Byrnes',
    heading: 'Événements',
    subheading: 'Retraites, formations & cérémonies à venir avec Conor Byrnes',
    regularTitle: 'Cours réguliers au Jivamukti Yoga Paris',
    privateTitle: 'Cours particuliers & accompagnement sur mesure',
    privateOutroHtml:
      'Pour toute demande de cours particuliers ou pour co-créer un programme sur mesure, merci de {link}.',
    privateOutroLink: 'me contacter directement',
  },

  contact: {
    seoTitle: 'Contacter Conor Byrnes',
    heading: 'Créons une expérience',
    form: {
      name: 'Nom',
      email: 'E-mail',
      interest: 'Qu’est-ce qui vous attire ?',
      interestPlaceholder: 'Une retraite, une pratique privée, une question…',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi…',
      ok: 'Merci — votre message est en route. Je vous réponds très bientôt.',
      error: 'Une erreur est survenue. Écrivez-moi directement par e-mail.',
    },
  },

  blog: {
    seoTitle: 'PRĀMAṆA — Blog de yoga & philosophie',
    heroHeading: 'PRĀMAṆA est un moyen de connaître, une façon de comprendre',
  },

  post: {
    onlyInEnglish: 'Cet essai n’est pas encore traduit — il apparaît ici en anglais.',
  },

  jango: {
    seoTitle: 'Le Projet Jango',
    marquee: '✩ Faire un don',
    heading: 'Communauté & compassion :',
    whyTitle: 'Pourquoi donner ?',
    missionTitle: 'Notre mission',
    mattersTitle: 'Pourquoi votre aide compte',
    branchesTitle: 'Trois branches',
    branches: {
      education: { title: 'Éducation', tag: 'Éveiller les jeunes esprits' },
      nutrition: { title: 'Nutrition', tag: 'Nourrir une croissance saine' },
      environment: { title: 'Environnement', tag: 'Préserver notre planète' },
    },
    ctaTitle: 'Soutenez notre croissance',
    ctaVisit: 'Visiter jangoproject.com',
  },

  pratibha: {
    eyebrow: 'Un manuscrit vivant de la sagesse du monde',
    lead:
      'Étudier une sagesse vivante, pas seulement un texte. De la source à la traduction, du commentaire à la pratique — et d’une tradition à l’autre.',
    open: 'Ouvrir Pratibha',
    whatIsIt: 'Qu’est-ce que c’est ?',
    introTitle: 'Une bibliothèque contemplative qui vous répond',
    layersEyebrow: 'Six couches, un passage',
    layersTitle: 'Lire sous tous les angles',
    layers: {
      original: { title: 'Original' },
      translation: { title: 'Traduction' },
      commentary: { title: 'Commentaire' },
      terms: { title: 'Termes clés' },
      resonances: { title: 'Résonances' },
      practice: { title: 'Pratique' },
    },
    tradEyebrow: 'Beaucoup de rivières, un seul océan',
    tradTitle: 'À travers les traditions',
    tradMore: '…et bien d’autres',
    companionTitle: 'Un compagnon d’étude, ancré dans les sources',
    companionCta: 'Commencer à lire',
    features: {
      read: { strong: 'Lecture' },
      chat: { strong: 'Chat d’étude' },
      paths: { strong: 'Parcours' },
      random: { strong: 'Aléatoire' },
      journal: { strong: 'Journal' },
      sources: { strong: 'Sources' },
    },
    ctaTitle: 'S’asseoir avec la sagesse des âges',
    ctaOpen: 'Ouvrir Pratibha →',
  },

  notFound: {
    seoTitle: 'Page introuvable',
    heading: 'Ce chemin s’est tu',
    lead:
      'La page que vous cherchez n’est pas ici — elle a peut-être été déplacée, ou le lien menait vers quelque chose qui n’existe plus.',
  },

  seo: {
    defaultTitle: 'Conor Byrnes Yoga — Agni Agama | Jivamukti, retraites & philosophie',
  },
};
