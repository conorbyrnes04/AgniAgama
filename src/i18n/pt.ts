// Português (Brasil). Partial by design — see src/i18n/index.ts. Anything
// omitted here renders in English, so translate top-down and ship any time.
import type { Translation } from './types';

export const pt: Translation = {
  nav: {
    events: 'Eventos',
    contact: 'Contato',
    about: 'Sobre',
    blog: 'Blog',
    pratibha: 'Pratibha',
    home: 'Início',
    jango: 'Projeto Jango',
  },

  ui: {
    languageLabel: 'Idioma',
    menu: 'Menu',
    practiceWithMe: 'Pratique comigo',
    getInTouch: 'Fale comigo',
    readPramana: 'Ler PRĀMAṆA',
    readMore: 'Leia mais',
    moreWriting: 'Mais textos',
    returnHome: 'Voltar ao início',
    donate: 'Doar',
    previous: '← Anterior',
    next: 'Próximo →',
    by: 'Por',
  },

  footer: {
    tagline: 'O fogo da revelação — consciência brilhante para a transformação material.',
    person: 'Yoga com Conor Byrnes',
    explore: 'Explorar',
    connect: 'Contato',
    rights: 'Agni Agama · Conor Byrnes Yoga. Todos os direitos reservados.',
  },

  home: {
    heroTagline: '– o fogo da revelação',
    heroSub: 'Consciência brilhante para a transformação material',
    heroByline: 'Yoga, retiros e filosofia com Conor Byrnes',
    practices: {
      will: { title: 'Querer' },
      know: { title: 'Conhecer' },
      act: { title: 'Agir' },
    },
    offerings: {
      classes: { title: 'Aulas abertas' },
      workshops: { title: 'Workshops' },
      retreats: { title: 'Retiros' },
      privates: { title: 'Aulas particulares' },
    },
    awakenTitle: 'Evoluir e despertar',
  },

  about: {
    seoTitle: 'Conor Byrnes — Professor de yoga',
    role: 'Professor de Jivamukti Yoga certificado avançado · Neuropsicólogo · Paris',
    ctaJango: 'O Projeto Jango',
  },

  events: {
    seoTitle: 'Eventos e retiros com Conor Byrnes',
    heading: 'Eventos',
    subheading: 'Próximos retiros, formações e cerimônias com Conor Byrnes',
    regularTitle: 'Aulas regulares no Jivamukti Yoga Paris',
    privateTitle: 'Aulas particulares e acompanhamento personalizado',
    privateOutroHtml:
      'Para saber mais sobre aulas particulares ou criar um programa sob medida, {link}.',
    privateOutroLink: 'fale comigo diretamente',
  },

  contact: {
    seoTitle: 'Contato com Conor Byrnes',
    heading: 'Vamos criar uma experiência',
    form: {
      name: 'Nome',
      email: 'E-mail',
      interest: 'O que te atrai?',
      interestPlaceholder: 'Um retiro, prática particular, uma pergunta…',
      message: 'Sua mensagem',
      send: 'Enviar mensagem',
      sending: 'Enviando…',
      ok: 'Obrigado — sua mensagem está a caminho. Responderei em breve.',
      error: 'Algo deu errado. Por favor, escreva direto para o meu e-mail.',
    },
  },

  blog: {
    seoTitle: 'PRĀMAṆA — Blog de yoga e filosofia',
    heroHeading: 'PRĀMAṆA é um meio de conhecer, um modo de compreender',
  },

  post: {
    onlyInEnglish: 'Este ensaio ainda não foi traduzido — aparece aqui em inglês.',
  },

  jango: {
    seoTitle: 'O Projeto Jango',
    marquee: '✩ Doe hoje',
    heading: 'Comunidade e compaixão:',
    whyTitle: 'Por que doar?',
    missionTitle: 'Nossa missão',
    mattersTitle: 'Por que sua ajuda importa',
    branchesTitle: 'Três frentes',
    branches: {
      education: { title: 'Educação', tag: 'Fortalecendo mentes jovens' },
      nutrition: { title: 'Nutrição', tag: 'Nutrindo um crescimento saudável' },
      environment: { title: 'Meio ambiente', tag: 'Preservando nosso planeta' },
    },
    ctaTitle: 'Apoie nosso crescimento',
    ctaVisit: 'Visitar jangoproject.com',
  },

  pratibha: {
    eyebrow: 'Um manuscrito vivo da sabedoria do mundo',
    lead:
      'Estude sabedoria viva, não apenas texto. Da fonte à tradução, do comentário à prática — e de uma tradição a outra.',
    open: 'Abrir Pratibha',
    whatIsIt: 'O que é isso?',
    introTitle: 'Uma biblioteca contemplativa que responde',
    layersEyebrow: 'Seis camadas, uma passagem',
    layersTitle: 'Leia por todos os lados',
    layers: {
      original: { title: 'Original' },
      translation: { title: 'Tradução' },
      commentary: { title: 'Comentário' },
      terms: { title: 'Termos-chave' },
      resonances: { title: 'Ressonâncias' },
      practice: { title: 'Prática' },
    },
    tradEyebrow: 'Muitos rios, um oceano',
    tradTitle: 'Através das tradições',
    tradMore: '…e muito mais',
    companionTitle: 'Um companheiro de estudo, ancorado nas fontes',
    companionCta: 'Começar a ler',
    features: {
      read: { strong: 'Leitura' },
      chat: { strong: 'Chat de estudo' },
      paths: { strong: 'Trilhas' },
      random: { strong: 'Aleatório' },
      journal: { strong: 'Diário' },
      sources: { strong: 'Fontes' },
    },
    ctaTitle: 'Sente-se com a sabedoria dos tempos',
    ctaOpen: 'Abrir Pratibha →',
  },

  notFound: {
    seoTitle: 'Página não encontrada',
    heading: 'Este caminho silenciou',
    lead:
      'A página que você procura não está aqui — talvez tenha sido movida, ou o link levava a algo que não existe mais.',
  },

  seo: {
    defaultTitle: 'Conor Byrnes Yoga — Agni Agama | Jivamukti, retiros e filosofia',
  },
};
