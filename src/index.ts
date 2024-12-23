import { MINUTE_IN_SECONDS } from "@constants";
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

const timeAgo = (date?: Date | string, fuzzy?: boolean): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  const diff = now.getTime() - input.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / 3600000);
  const diffInDays = Math.floor(diff / 86400000);

  if (fuzzy) {
    if (diffInDays === 1) return i18next.t("yesterday");
    if (diffInDays < 7) return i18next.t("lastWeek");
    if (diffInDays < 30) return i18next.t("lastMonth");
    if (diffInDays < 365) return i18next.t("lastYear");
    if (diffInDays < 3650) return i18next.t("lastDecade");
    if (diffInDays < 36500) return i18next.t("lastCentury");
    return i18next.t("lastMillennium");
  }

  if (diffInMinutes < 1) return i18next.t("justNow");
  if (diffInMinutes < 60)
    return i18next.t(
      diffInMinutes === 1 ? "minutesAgo.one" : "minutesAgo.other",
      { count: diffInMinutes }
    );
  if (diffInHours < 24)
    return i18next.t(diffInHours === 1 ? "hoursAgo.one" : "hoursAgo.other", {
      count: diffInHours,
    });
  if (diffInDays < 7)
    return i18next.t(diffInDays === 1 ? "daysAgo.one" : "daysAgo.other", {
      count: diffInDays,
    });
  if (diffInDays < 30)
    return i18next.t(diffInDays === 1 ? "weeksAgo.one" : "weeksAgo.other", {
      count: Math.floor(diffInDays / 7),
    });

  return input.toLocaleDateString();
};

const timeUntil = (date?: Date | string, fuzzy?: boolean): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  const diff = input.getTime() - now.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / 3600000);
  const diffInDays = Math.floor(diff / 86400000);

if (fuzzy) {
    if (diffInDays === 1) return i18next.t("tomorrow");
    if (diffInDays < 7) return i18next.t("nextWeek");
    if (diffInDays < 30) return i18next.t("nextMonth");
    if (diffInDays < 365) return i18next.t("nextYear");
    if (diffInDays < 3650) return i18next.t("nextDecade");
    if (diffInDays < 36500) return i18next.t("nextCentury");
    return i18next.t("nextMillennium");
}

  if (diffInMinutes < 1) return i18next.t("justNow");
  if (diffInMinutes < 60)
    return i18next.t(
      diffInMinutes === 1 ? "minutesUntil.one" : "minutesUntil.other",
      { count: diffInMinutes }
    );
  if (diffInHours < 24)
    return i18next.t(
      diffInHours === 1 ? "hoursUntil.one" : "hoursUntil.other",
      {
        count: diffInHours,
      }
    );
  if (diffInDays < 7)
    return i18next.t(diffInDays === 1 ? "daysUntil.one" : "daysUntil.other", {
      count: diffInDays,
    });
  if (diffInDays < 30)
    return i18next.t(diffInDays === 1 ? "weeksUntil.one" : "weeksUntil.other", {
      count: Math.floor(diffInDays / 7),
    });
  if (diffInDays < 365)
    return i18next.t(
      diffInDays === 1 ? "monthsUntil.one" : "monthsUntil.other",
      {
        count: Math.floor(diffInDays / 30),
      }
    );
  if (diffInDays < 3650)
    return i18next.t(diffInDays === 1 ? "yearsUntil.one" : "yearsUntil.other", {
      count: Math.floor(diffInDays / 365),
    });
  if (diffInDays < 36500)
    return i18next.t(
      diffInDays === 1 ? "decadesUntil.one" : "decadesUntil.other",
      {
        count: Math.floor(diffInDays / 3650),
      }
    );
  if (diffInDays < 365000)
    return i18next.t(
      diffInDays === 1 ? "centuriesUntil.one" : "centuriesUntil.other",
      {
        count: Math.floor(diffInDays / 36500),
      }
    );
  return i18next.t(
    diffInDays === 1 ? "millenniaUntil.one" : "millenniaUntil.other",
    {
      count: Math.floor(diffInDays / 365000),
    }
  );
};

const fromTime = (date?: Date | string): string => {
  const input = new Date(date || new Date());
  const now = new Date();
  if (input.getTime() < now.getTime()) {
    return timeAgo(input);
  } else {
    return timeUntil(input);
  }
};

const setLanguage = (lang: string): void => {
  i18next.changeLanguage(lang);
};

export { fromTime, setLanguage, timeAgo, timeUntil };
