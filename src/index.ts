import i18next from "i18next";
import { MINUTE_IN_SECONDS } from "./constants";
import en from "./locales/en.json";
import es from "./locales/es.json";

i18next.init({
  lng: "en",
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
});

const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diff / MINUTE_IN_SECONDS);
  const diffInHours = Math.floor(diff / 3600000);
  const diffInDays = Math.floor(diff / 86400000);

  if (diffInMinutes < 1) return i18next.t("justNow");
  if (diffInMinutes < 60)
    return i18next.t("minutesAgo", { count: diffInMinutes });
  if (diffInHours < 24) return i18next.t("hoursAgo", { count: diffInHours });
  if (diffInDays < 7) return i18next.t("daysAgo", { count: diffInDays });
  if (diffInDays < 30)
    return i18next.t("weeksAgo", { count: Math.floor(diffInDays / 7) });

  return date.toLocaleDateString();
};

const setLanguage = (lang: string): void => {
  i18next.changeLanguage(lang);
};

export { formatDate, setLanguage };
