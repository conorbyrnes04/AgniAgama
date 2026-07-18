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
    title: 'Origem Retreat',
    dates: 'Aug 29 – Sep 3, 2026',
    location: 'Rio de Janeiro, Brazil',
    copy: 'Origem — a return to the source. Six days above Rio where breath, movement, and the wild pulse of Brazil draw us back toward what we already are. We practice, we sweat, we soften, and we remember.',
    link: { label: 'Retreat Details', href: 'https://www.retreatscollective.com/origem-retreat' },
    image: 'event-rio.jpg',
  },
  {
    title: 'Jivamukti 75-Hour Teacher Training — Paris',
    dates: 'Sep 11 – 20, 2026',
    location: 'Paris, France · or online',
    copy: 'A 75-hour immersion into the Jivamukti method — asana, chanting, meditation, and the philosophy that binds them. Ten days in Paris (or online) with Ian Szydlowski, Sonia Gabriel and me, learning to teach from a place that is truly felt. To register, write to contact@jivamuktiyoga.fr.',
    link: { label: 'Details & Register', href: 'https://www.instagram.com/p/DaLMxlfMuCO/' },
    image: 'event-paris.jpg',
  },
  {
    title: 'Himalayan Pilgrimage Retreat',
    dates: 'Oct 10 – 17, 2026',
    location: 'Pokhara & Annapurna, Nepal',
    copy: 'A pilgrimage into the Himalaya. Beneath the Annapurna, we gather for Tibetan Tsa Lung, meditation, and Dzogchen teachings — walking, breathing, and sitting our way toward the vast silence these mountains have always kept. Co-led with Ian Szydlowski and Nina de la Fuente.',
    link: { label: 'Retreat Details', href: 'https://www.instagram.com/p/DZXmOGzDGBR/' },
    image: 'event-nepal.jpg',
  },
  {
    title: 'Jivamukti 75-Hour Teacher Training — Kyoto',
    dates: 'Nov 14 – 22, 2026',
    location: 'Kyoto, Japan',
    copy: 'A residential Jivamukti Teacher Training in Kyoto. Among temples and stillness, we study the 75-hour method — asana, chant, and philosophy — with Yuri Ogawa and me, assisted by Chiemi Sora. To register, write to contact@jivamuktiyoga.fr.',
    link: { label: 'Details & Register', href: 'https://www.instagram.com/p/DakwAraMztJ/' },
    image: 'event-japan.jpg',
  },
  {
    title: 'Bab Zouina Retreat',
    dates: 'Feb 6 – 13, 2027',
    location: 'Bab Zouina, Ourika Valley, Morocco',
    copy: 'A week of Bhairava Tantra in the Ourika Valley of the Atlas Mountains. Yoga, ritual, meditation, and deep study at the beautiful Bab Zouina, co-led with Ian Szydlowski — practice as a fire that reveals.',
    link: { label: 'Retreat PDF & Details', href: 'https://bab-zouina.com/wp-content/uploads/2026/02/Jivamukt-retreat-with-Ian-Conor-0227.pdf' },
    image: 'event-morocco.jpg',
  },
];
