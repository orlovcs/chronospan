/**
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * @param date - The date to compare against the current time. Can be a Date object or a string.
 * @param fuzzy - If true, returns a fuzzy time description (e.g., "yesterday", "last week").
 * @returns A string representing the time elapsed since the given date.
 */
declare const timeAgo: (date?: Date | string, fuzzy?: boolean) => string;
/**
 * Calculates the time until a given date and returns a localized string representation.
 *
 * @param date - The target date, either as a Date object or a string. Defaults to the current date if not provided.
 * @param fuzzy - If true, returns a fuzzy representation (e.g., "tomorrow", "next week"). Defaults to false.
 * @returns A localized string representing the time until the given date.
 */
declare const timeUntil: (date?: Date | string, fuzzy?: boolean) => string;
/**
 * Converts a given date to a human-readable relative time string.
 *
 * @param date - The date to convert. Can be a `Date` object or a string representation of a date.
 *               If not provided, the current date and time will be used.
 * @param fuzzy - If `true`, the returned string will be a fuzzy representation of the time difference.
 *                If `false` or not provided, the returned string will be a precise representation.
 * @returns A string representing the relative time difference between the given date and the current date.
 *          If the given date is in the past, the string will indicate the time ago.
 *          If the given date is in the future, the string will indicate the time until.
 */
declare const fromTime: (date?: Date | string, fuzzy?: boolean) => string;
/**
 * Changes the current language of the i18next instance.
 *
 * @param lang - The language code to set (e.g., 'en', 'fr', 'de').
 * @returns void
 */
declare const setLanguage: (lang: string) => void;
export { fromTime, setLanguage, timeAgo, timeUntil };
//# sourceMappingURL=index.d.ts.map