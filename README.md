# Agni Agama — self-hosted website

A static rebuild of [agniagama.com](https://agniagama.com) (formerly on Squarespace), built with
[Astro](https://astro.build). It outputs plain HTML/CSS to `dist/` and can be hosted **for free** on
Cloudflare Pages, Netlify, or any static host — no server to maintain. Modeled on the Jango Project rebuild.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs static site to dist/
npm run preview    # serve the built dist/ locally
```

Node 22 (pinned via Volta). Uses **npm**.

## Project structure

```
public/
  media/            all images (scraped from Squarespace)
  favicon.ico
src/
  data/
    site.ts         site-wide config: name, nav, email, external links
    events.ts       the events schedule (edit this to update dates/retreats)
    blog.json       all blog posts (title, date, tags, hero, body blocks) — generated from the scrape
  layouts/Base.astro
  components/        Header, Footer, Blocks
  pages/
    index.astro     home
    about.astro     Conor's bio
    events.astro    upcoming retreats/trainings (renders src/data/events.ts)
    jango-project.astro
    contact.astro   contact form (Web3Forms)
    blog.astro      PRĀMAṆA listing
    blog/[slug].astro   one page per post from blog.json
../scrape/          the raw scrape + build scripts (not deployed; kept for reference)
```

## Editing content

- **Site name / nav / email / links:** `src/data/site.ts`
- **Events schedule:** `src/data/events.ts` — one object per event (`title`, `dates`, `location`, `copy`,
  optional `link` and `image`). Add/remove/reorder freely; the page re-renders the list.
- **Home / About / Jango pages:** edit the `.astro` file directly (copy lives in the frontmatter arrays).
- **Blog posts:** `src/data/blog.json`. To re-scrape or add posts, see `../scrape/build_blog.py`.
- **Images:** drop files into `public/media/` and reference them as `/media/<filename>`.

## Contact form (one setup step)

The form uses [Web3Forms](https://web3forms.com) (free, no backend):

1. Go to web3forms.com and enter `conorbyrnesyoga@gmail.com` to get a free **access key**.
2. Set it as env var `PUBLIC_WEB3FORMS_KEY` in your host's dashboard, **or** paste it directly in
   `src/pages/contact.astro` (replace `REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY`).

Until it's set, the form shows a "not configured" notice.

## Deploy (free static hosting)

### Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → connect the repo.
3. Build command: `npm run build` · Output directory: `dist`.
4. Add your domain under Pages → Custom domains (point `agniagama.com` DNS at Cloudflare).
5. (Optional) add `PUBLIC_WEB3FORMS_KEY` under Settings → Environment variables.

### Netlify
Build command `npm run build`, publish directory `dist`.

## Notes

- **Fonts:** display face is **Jost** (open-source geometric sans, a close match to the site's
  *ITC Avant Garde Gothic*); body is **Poppins**. Both self-hosted via Fontsource — no external CDN calls.
- **Palette** is sampled from the original Squarespace theme: deep forest green `#344734`, warm amber
  `#f1a638`, sand `#e7d1b5`, and a bright accent yellow `#fffc52`.
- The Donate flow on the Jango Project page links out to `jangoproject.com/donate` (the separate nonprofit site).
