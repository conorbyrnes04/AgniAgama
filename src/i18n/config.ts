// ---------------------------------------------------------------------------
// Languages the site is published in.
//
// `code` is the BCP-47 tag used for <html lang>, hreflang and og:locale.
// `path` is the URL prefix — English has none, so existing URLs never moved.
// Adding a language = one entry here + one dictionary in src/i18n/<key>.ts.
// ---------------------------------------------------------------------------

export const locales = {
  en: { path: '', code: 'en', ogLocale: 'en_US', label: 'English', short: 'EN' },
  fr: { path: 'fr', code: 'fr', ogLocale: 'fr_FR', label: 'Français', short: 'FR' },
  de: { path: 'de', code: 'de', ogLocale: 'de_DE', label: 'Deutsch', short: 'DE' },
  pt: { path: 'pt', code: 'pt-BR', ogLocale: 'pt_BR', label: 'Português', short: 'PT' },
} as const;

export type Locale = keyof typeof locales;

export const defaultLocale: Locale = 'en';
export const localeKeys = Object.keys(locales) as Locale[];

/** URL segments that are a language prefix rather than a page. */
const prefixes: Set<string> = new Set(
  localeKeys.map((l) => locales[l].path as string).filter(Boolean)
);

/**
 * The `[...lang]` rest param: `undefined` for English, otherwise the prefix.
 * Every localized page reads its language through this.
 */
export function localeFromParam(param?: string): Locale {
  if (!param) return defaultLocale;
  const key = localeKeys.find((l) => locales[l].path === param.replace(/\/$/, ''));
  return key ?? defaultLocale;
}

/** Paths for a page in every language — the shape getStaticPaths() wants. */
export function localePaths() {
  return localeKeys.map((lang) => ({
    params: { lang: locales[lang].path || undefined },
    props: { lang },
  }));
}

/** `/about` → `/fr/about`. Leaves mailto:, #anchors and external URLs alone. */
export function localize(path: string, lang: Locale): string {
  if (/^([a-z]+:|\/\/|#)/i.test(path)) return path;
  const prefix = locales[lang].path;
  if (!prefix) return path;
  return path === '/' ? `/${prefix}` : `/${prefix}${path}`;
}

/** Strip any language prefix off a pathname: `/fr/about` → `/about`. */
export function delocalize(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (prefixes.has(first)) return '/' + rest.join('/');
  return pathname;
}

/** Language of the page currently rendering, read off its URL. */
export function localeFromUrl(url: URL): Locale {
  const first = url.pathname.split('/')[1];
  const key = localeKeys.find((l) => locales[l].path === first);
  return key ?? defaultLocale;
}
