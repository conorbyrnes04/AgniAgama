// ---------------------------------------------------------------------------
// Posts, per language.
//
// src/data/blog.json is the English canon. To publish a translated essay, drop
// a src/data/blog.<lang>.json holding only the posts that exist in that
// language (same shape, matching `slug`); anything absent falls back to the
// English post and is flagged with t.post.onlyInEnglish, and hreflang only
// advertises the languages a post genuinely exists in.
// ---------------------------------------------------------------------------

import englishPosts from '../data/blog.json';
import { defaultLocale, localeKeys, type Locale } from './config';

export type Post = (typeof englishPosts)[number];

const modules = import.meta.glob<{ default: Post[] }>('../data/blog.*.json', { eager: true });

const translated = new Map<Locale, Map<string, Post>>();
for (const [path, mod] of Object.entries(modules)) {
  const lang = path.match(/blog\.([a-z-]+)\.json$/)?.[1] as Locale | undefined;
  if (!lang || !localeKeys.includes(lang) || lang === defaultLocale) continue;
  translated.set(lang, new Map(mod.default.map((p) => [p.slug, p])));
}

/** The post list for `lang`, English order preserved, per-post fallback. */
export function getPosts(lang: Locale): Post[] {
  const dict = translated.get(lang);
  if (!dict) return englishPosts;
  return englishPosts.map((p) => dict.get(p.slug) ?? p);
}

/** Languages this post actually exists in — what hreflang should advertise. */
export function postLocales(slug: string): Locale[] {
  return localeKeys.filter(
    (lang) => lang === defaultLocale || translated.get(lang)?.has(slug)
  );
}

/** True when `lang` is showing the English original because no translation exists. */
export function isUntranslated(slug: string, lang: Locale): boolean {
  return lang !== defaultLocale && !translated.get(lang)?.has(slug);
}
