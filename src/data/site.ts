export const site = {
  name: 'Agni Agama',
  /** Used in the default document title and entity SEO. */
  tagline: 'The fire of revelation — brilliant awareness for material transformation.',
  url: 'https://agniagama.com',
  email: 'conorbyrnesyoga@gmail.com',
  defaultOgImage: '/media/dsc01432-copy.jpeg',
  // The live site links the blog as "PRĀMAṆA" (a means of knowing).
  blogTitle: 'PRĀMAṆA',
  person: {
    name: 'Conor Byrnes',
    jobTitle: 'Yoga Teacher',
    description:
      'Conor Byrnes is an Advanced Certified Jivamukti Yoga teacher, neuropsychologist, and founder of Agni Agama — teaching yoga, retreats, and nondual Śaiva Tantra from Paris and internationally.',
    image: '/media/dsc01432-copy.jpeg',
    knowsAbout: [
      'Jivamukti Yoga',
      'Yoga',
      'Nondual Śaiva Tantra',
      'Meditation',
      'Breathwork',
      'Yoga philosophy',
      'Neuropsychology',
    ],
  },
  socials: {
    linkedin: 'https://www.linkedin.com/in/conor-byrnes-bb17a0a0',
  } as Record<string, string>,
  external: {
    jangoProject: 'https://jangoproject.com',
    pratibha: 'https://pratibha.agniagama.com',
  },
  // Order mirrors the original Squarespace nav (two rows, left-aligned).
  // `key` indexes t.nav in the dictionaries (src/i18n/en.ts); `href` is the
  // English path, run through localize() at render time.
  nav: [
    { key: 'events', href: '/events' },
    { key: 'contact', href: '/contact' },
    { key: 'about', href: '/about' },
    { key: 'blog', href: '/blog' },
    { key: 'pratibha', href: '/pratibha' },
    { key: 'home', href: '/' },
    { key: 'jango', href: '/jango-project' },
  ] as const,
};
