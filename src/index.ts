import { CENTURY_IN_DAYS, DAY_IN_SECONDS, DECADE_IN_DAYS, HOUR_IN_SECONDS, MILLENNIUM_IN_DAYS, MINUTE_IN_SECONDS, MONTH_IN_DAYS, WEEK_IN_DAYS, YEAR_IN_DAYS } from "@constants";
import en from "@locales/en.json";
import es from "@locales/es.json";
import i18next from "i18next";

i18next.init({
  lng: "en",
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
});

/**
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * @param date - The date to compare against the current time. Can be a Date object or a string.
 * @param fuzzy - If true, returns a fuzzy time description (e.g., "yesterday", "last week").
 * @returns A string representing the time elapsed since the given date.
 */
const timeAgo = (date?: Date | string, fuzzy?: boolean): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  const diff = now.getTime() - input.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / HOUR_IN_SECONDS);
  const diffInDays = Math.floor(diff / DAY_IN_SECONDS);

  if (fuzzy) {
    if (diffInDays === 1) return i18next.t("yesterday");
    if (diffInDays < WEEK_IN_DAYS) return i18next.t("lastWeek");
    if (diffInDays < MONTH_IN_DAYS) return i18next.t("lastMonth");
    if (diffInDays < YEAR_IN_DAYS) return i18next.t("lastYear");
    if (diffInDays < DECADE_IN_DAYS) return i18next.t("lastDecade");
    if (diffInDays < CENTURY_IN_DAYS) return i18next.t("lastCentury");
    return i18next.t("lastMillennium");
  }
  if (diffInMinutes < 1) return i18next.t("justNow");
  if (diffInMinutes < HOUR_IN_SECONDS / MINUTE_IN_SECONDS)
    return i18next.t(
      diffInMinutes === 1 ? "minutesAgo.one" : "minutesAgo.other",
      { count: diffInMinutes }
    );
  if (diffInHours < DAY_IN_SECONDS / HOUR_IN_SECONDS)
    return i18next.t(diffInHours === 1 ? "hoursAgo.one" : "hoursAgo.other", {
      count: diffInHours,
    });
  if (diffInDays < WEEK_IN_DAYS)
    return i18next.t(diffInDays === 1 ? "daysAgo.one" : "daysAgo.other", {
      count: diffInDays,
    });
  if (diffInDays < MONTH_IN_DAYS)
    return i18next.t(diffInDays === 1 ? "weeksAgo.one" : "weeksAgo.other", {
      count: Math.floor(diffInDays / WEEK_IN_DAYS),
    });

  return input.toLocaleDateString();
};

/**
 * Calculates the time until a given date and returns a localized string representation.
 *
 * @param date - The target date, either as a Date object or a string. Defaults to the current date if not provided.
 * @param fuzzy - If true, returns a fuzzy representation (e.g., "tomorrow", "next week"). Defaults to false.
 * @returns A localized string representing the time until the given date.
 */
const timeUntil = (date?: Date | string, fuzzy?: boolean): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  const diff = input.getTime() - now.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / HOUR_IN_SECONDS);
  const diffInDays = Math.floor(diff / DAY_IN_SECONDS);

  if (fuzzy) {
    if (diffInDays === 1) return i18next.t("tomorrow");
    if (diffInDays < WEEK_IN_DAYS) return i18next.t("nextWeek");
    if (diffInDays < MONTH_IN_DAYS) return i18next.t("nextMonth");
    if (diffInDays < YEAR_IN_DAYS) return i18next.t("nextYear");
    if (diffInDays < DECADE_IN_DAYS) return i18next.t("nextDecade");
    if (diffInDays < CENTURY_IN_DAYS) return i18next.t("nextCentury");
    return i18next.t("nextMillennium");
  }

  if (diffInMinutes < 1) return i18next.t("justNow");
  if (diffInMinutes < HOUR_IN_SECONDS / MINUTE_IN_SECONDS)
    return i18next.t(
      diffInMinutes === 1 ? "minutesUntil.one" : "minutesUntil.other",
      { count: diffInMinutes }
    );
  if (diffInHours < DAY_IN_SECONDS / HOUR_IN_SECONDS)
    return i18next.t(
      diffInHours === 1 ? "hoursUntil.one" : "hoursUntil.other",
      {
        count: diffInHours,
      }
    );
  if (diffInDays < WEEK_IN_DAYS)
    return i18next.t(diffInDays === 1 ? "daysUntil.one" : "daysUntil.other", {
      count: diffInDays,
    });
  if (diffInDays < MONTH_IN_DAYS)
    return i18next.t(diffInDays === 1 ? "weeksUntil.one" : "weeksUntil.other", {
      count: Math.floor(diffInDays / WEEK_IN_DAYS),
    });
  if (diffInDays < YEAR_IN_DAYS)
    return i18next.t(
      diffInDays === 1 ? "monthsUntil.one" : "monthsUntil.other",
      {
        count: Math.floor(diffInDays / MONTH_IN_DAYS),
      }
    );
  if (diffInDays < DECADE_IN_DAYS)
    return i18next.t(diffInDays === 1 ? "yearsUntil.one" : "yearsUntil.other", {
      count: Math.floor(diffInDays / YEAR_IN_DAYS),
    });
  if (diffInDays < CENTURY_IN_DAYS)
    return i18next.t(
      diffInDays === 1 ? "decadesUntil.one" : "decadesUntil.other",
      {
        count: Math.floor(diffInDays / DECADE_IN_DAYS),
      }
    );
  if (diffInDays < MILLENNIUM_IN_DAYS)
    return i18next.t(
      diffInDays === 1 ? "centuriesUntil.one" : "centuriesUntil.other",
      {
        count: Math.floor(diffInDays / CENTURY_IN_DAYS),
      }
    );
  return i18next.t(
    diffInDays === 1 ? "millenniaUntil.one" : "millenniaUntil.other",
    {
      count: Math.floor(diffInDays / MILLENNIUM_IN_DAYS),
    }
  );
};

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
const fromTime = (date?: Date | string, fuzzy?: boolean): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  if (input.getTime() < now.getTime()) {
    return timeAgo(input, fuzzy);
  } else {
    return timeUntil(input, fuzzy);
  }
};

/**
 * Changes the current language of the i18next instance.
 *
 * @param lang - The language code to set (e.g., 'en', 'fr', 'de').
 * @returns void
 */
const setLanguage = (lang: string): void => {
  i18next.changeLanguage(lang);
};

export { fromTime, setLanguage, timeAgo, timeUntil };
