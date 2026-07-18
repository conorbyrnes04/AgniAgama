// Upcoming retreats, trainings & ceremonies.
// Edit this list to update the schedule — the Events page renders it directly.
// `image` is optional (a filename in /public/media). `link` is optional.

export interface EventItem {
  title: string;
  dates: string;
  location: string;
  copy: string;
  link?: { label: string; href: string };
  image?: string;
}

export const events: EventItem[] = [
  {
    title: 'Weaving Wonder: Śiva Sūtra Retreat',
    dates: 'Jan 3 – 10, 2026',
    location: 'Bab Zouina, Ourika Valley, Morocco',
    copy: 'Join Ian Szydlowski and me for a week of Bhairava Tantra practice inspired by the Śiva Sūtra. Yoga, ritual, meditation, and deep study in a stunning Moroccan retreat space.',
    link: { label: 'Retreat PDF & Details', href: 'https://bab-zouina.com/wp-content/uploads/2025/03/Brochure-Ian-Conor-Jan.-26.pdf' },
    image: 'hd-0963_web.jpg',
  },
  {
    title: 'Mentoring 300-Hour Jivamukti TT',
    dates: 'Jan 31 – Feb 27, 2026',
    location: 'Govardhan EcoVillage, India',
    copy: 'I’ll be mentoring the full 300-hour residential Jivamukti Yoga Teacher Training at the sacred Govardhan EcoVillage in India.',
    link: { label: 'Training Info', href: 'https://jivamuktiyoga.com/india-2026-residential/' },
  },
  {
    title: 'Sri Lanka Retreat at Kuluru Bay',
    dates: 'Feb 28 – March 5, 2026',
    location: 'Ahangama, Sri Lanka',
    copy: 'A week of healing and reconnection at the ocean’s edge. Join me at Kuluru Bay for an immersive yoga retreat rooted in breath, movement, silence, and renewal.',
    link: { label: 'Venue Website', href: 'https://kulurubay.com' },
  },
  {
    title: 'Yoga & Dunes – Oman Retreat',
    dates: 'April 3 – 10, 2026',
    location: 'Sultanate of Oman',
    copy: 'An 8-day journey into desert and dune, coastline and stillness — combining yoga, meditation, nature and cultural immersion in the Arabian landscape. Join us for a transformative reset in motion and silence.',
    link: { label: 'More Info & Booking', href: 'https://wndrtrip.com/trips/yoga-and-dunes-oman-retreat' },
  },
  {
    title: 'A Weekend of Inner Light',
    dates: 'April 17 – 19, 2026',
    location: 'Château de Forbin, Marseille',
    copy: 'Three immersive days in a magnificent castle in the South of France. Co-led with Hélène Aubier, this MOON • SUN • FIRE journey weaves breath, movement, sound bath, cacao ritual, and fire ceremony.',
    link: { label: 'More Info & Booking', href: 'https://www.heleneaubier.com/retraiteconor' },
    image: 'copy-of-ay1a3634.jpg',
  },
];
