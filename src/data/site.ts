export const site = {
  name: 'Agni Agama',
  tagline: 'The fire of revelation — brilliant awareness for material transformation.',
  email: 'conorbyrnesyoga@gmail.com',
  // The live site links the blog as "PRĀMAṆA" (a means of knowing).
  blogTitle: 'PRĀMAṆA',
  socials: {
    // No public social accounts were configured on the original site.
    // Add handles here (e.g. instagram: 'https://instagram.com/...') to surface them site-wide.
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
