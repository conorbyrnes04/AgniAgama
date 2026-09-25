import type { Dictionary } from './en';

/** Widens the `as const` string literals of the English dictionary to `string`. */
type Partialize<T> = T extends string
  ? string
  : T extends object
    ? { [K in keyof T]?: Partialize<T[K]> }
    : T;

/** Shape of a non-English dictionary: the English shape, every key optional. */
export type Translation = Partialize<Dictionary>;
