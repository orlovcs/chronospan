"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLanguage = exports.formatDate = void 0;
const i18next_1 = require("i18next");
const constants_1 = require("./constants");
const en_json_1 = require("./locales/en.json");
const es_json_1 = require("./locales/es.json");
i18next_1.default.init({
    lng: "en",
    resources: {
        en: { translation: en_json_1.default },
        es: { translation: es_json_1.default },
    },
});
const formatDate = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diff / constants_1.MINUTE_IN_SECONDS);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);
    if (diffInMinutes < 1)
        return i18next_1.default.t("justNow");
    if (diffInMinutes < 60)
        return i18next_1.default.t("minutesAgo", { count: diffInMinutes });
    if (diffInHours < 24)
        return i18next_1.default.t("hoursAgo", { count: diffInHours });
    if (diffInDays < 7)
        return i18next_1.default.t("daysAgo", { count: diffInDays });
    if (diffInDays < 30)
        return i18next_1.default.t("weeksAgo", { count: Math.floor(diffInDays / 7) });
    return date.toLocaleDateString();
};
exports.formatDate = formatDate;
const setLanguage = (lang) => {
    i18next_1.default.changeLanguage(lang);
};
exports.setLanguage = setLanguage;
