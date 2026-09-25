// ---------------------------------------------------------------------------
// Translation lookup.
//
//   const t = useTranslations(lang);   →  t.home.heroSub
//
// Non-English dictionaries are *partial*: anything not translated yet falls
// back to the English string, so the site is always complete and translation
// can land page by page. TypeScript still checks every key you do write.
// ---------------------------------------------------------------------------

import { en, type Dictionary } from './en';
import { fr } from './fr';
import { de } from './de';
import { pt } from './pt';
import { defaultLocale, localeKeys, locales, localize, delocalize, type Locale } from './config';

import type { Translation } from './types';
export type { Translation };

const dictionaries: Record<Locale, Translation> = { en, fr, de, pt };

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

/** Overlay a partial translation on the English base, deeply. */
function merge<T>(base: T, over: unknown): T {
  if (!isPlainObject(over) || !isPlainObject(base)) {
    return (over === undefined ? base : (over as T));
  }
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(over)) {
    if (value === undefined) continue;
    out[key] = key in base ? merge((base as Record<string, unknown>)[key], value) : value;
  }
  return out as T;
}

const cache = new Map<Locale, Dictionary>();

export function useTranslations(lang: Locale): Dictionary {
  const hit = cache.get(lang);
  if (hit) return hit;
  const dict = lang === defaultLocale ? en : merge(en, dictionaries[lang]);
  cache.set(lang, dict);
  return dict;
}

/**
 * Pick the right value out of data that is either one string or a per-language
 * map — lets src/data files translate only the fields that need it:
 *   copy: { en: 'Six days above Rio…', pt: 'Seis dias acima do Rio…' }
 */
export type Translatable<T = string> = T | Partial<Record<Locale, T>>;

export function tr<T>(value: Translatable<T>, lang: Locale): T {
  if (isPlainObject(value)) {
    const map = value as Partial<Record<Locale, T>>;
    return (map[lang] ?? map[defaultLocale] ?? Object.values(map)[0]) as T;
  }
  return value as T;
}

/** `fill('{title} — an essay', { title })` */
export function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}

/**
 * hreflang set for the page at `pathname`, including x-default.
 * Pass `only` to advertise a subset (e.g. a post that exists in two languages).
 */
export function alternates(pathname: string, origin: string, only?: Locale[]) {
  const bare = delocalize(pathname);
  const langs = only ?? localeKeys;
  const links: { hreflang: string; href: string }[] = langs.map((lang) => ({
    hreflang: locales[lang].code as string,
    href: new URL(localize(bare, lang), origin).href,
  }));
  links.push({ hreflang: 'x-default', href: new URL(bare, origin).href });
  return links;
}

/** Same page in every other language — for the header switcher. */
export function languageSwitch(pathname: string, current: Locale) {
  const bare = delocalize(pathname);
  return localeKeys.map((lang) => ({
    lang,
    href: localize(bare, lang),
    label: locales[lang].label,
    short: locales[lang].short,
    code: locales[lang].code,
    current: lang === current,
  }));
}

export { locales, localize, delocalize, defaultLocale, localeKeys };
export type { Locale };
export { localeFromParam, localePaths, localeFromUrl } from './config';
