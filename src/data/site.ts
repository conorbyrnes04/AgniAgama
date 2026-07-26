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
    jivamukti: 'https://jivamuktiyoga.com/teachers-global/conor-byrnes/',
    jivamuktiParis: 'https://www.jivamuktiyoga.fr/blog/team/01-conor-byrnes/',
  } as Record<string, string>,
  external: {
    jivamuktiParis: 'https://www.jivamuktiyoga.fr/schedule/',
    jangoProject: 'https://jangoproject.com',
    pratibha: 'https://pratibha.agniagama.com',
  },
  // Order mirrors the original Squarespace nav (two rows, left-aligned).
  nav: [
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pratibha', href: '/pratibha' },
    { label: 'Home', href: '/' },
    { label: 'Jango Project', href: '/jango-project' },
  ],
};
