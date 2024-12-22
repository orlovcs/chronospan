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

const timeAgo = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / 3600000);
  const diffInDays = Math.floor(diff / 86400000);

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

  return date.toLocaleDateString();
};

const setLanguage = (lang: string): void => {
  i18next.changeLanguage(lang);
};

export { setLanguage, timeAgo };

