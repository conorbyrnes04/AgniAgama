// Upcoming retreats, trainings & ceremonies.
// Edit this list to update the schedule — the Events page renders it directly.
// `image` is optional (a filename in /public/media). `link` is optional.
//
// Any text field may be a plain string (shown in every language) or a
// per-language map — translate only what needs it, one event at a time:
//
//   dates: { en: 'Aug 29 – Sep 3, 2026', fr: '29 août – 3 sept. 2026' },
//   copy:  { en: 'Six days above Rio…',  pt: 'Seis dias acima do Rio…' },

import type { Translatable } from '../i18n';

export interface EventItem {
  title: Translatable;
  dates: Translatable;
  location: Translatable;
  copy: Translatable;
  link?: { label: Translatable; href: string };
  image?: string;
}

export const events: EventItem[] = [
  {
    title: 'Sunday Deep Dive',
    dates: 'Oct 4, 2026',
    location: 'Jivamukti Yoga Paris',
    copy: 'A two-hour Jivamukti class immersed in ambient and downtempo soundscapes, with a live DJ set by PR3S3NT. 100% of funds go to the Jango Project.',
    link: { label: 'Jivamukti Yoga Paris Schedule', href: 'https://www.jivamuktiyoga.fr/schedule/' },
    image: 'event-sunday-deep-dive.jpg',
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
    dates: 'Nov 14 – 21, 2026',
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
  {
    title: 'UMA: Jivamukti Yoga & Ancestral Wisdom',
    dates: 'Mar 15 – 20, 2027',
    location: 'The Sanubari, Sumba, Indonesia',
    copy: 'Six days on the remote shores of Sumba, where the ancestral lands of the Marapu people open onto a secluded beach. Together we bring breath, bandha, kriya and asana into dialogue with the land and the living heritage of the Sumbanese people, returning to uma, the place where we belong.',
    link: { label: 'Retreat Details & Booking', href: 'https://www.retreatscollective.com/sumba' },
    image: 'event-sumba.jpg',
  },
  {
    title: 'Spanda: Blossoming into Love',
    dates: 'Apr 23 – 25, 2027',
    location: 'Château Forbin, France',
    copy: 'A spring weekend retreat co-led with Léa on spanda, the pulse of the heart, and its blossoming. Jivamukti practice, meditation, mantra and workshops on presence, breath and joy, with vegan meals at Château Forbin. Open to all.',
  },
];
