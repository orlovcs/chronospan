"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLanguage = exports.timeAgo = void 0;
const _constants_1 = require("@constants");
const en_json_1 = __importDefault(require("@locales/en.json"));
const es_json_1 = __importDefault(require("@locales/es.json"));
const i18next_1 = __importDefault(require("i18next"));
i18next_1.default.init({
    lng: "en",
    resources: {
        en: { translation: en_json_1.default },
        es: { translation: es_json_1.default },
    },
});
const timeAgo = (date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diff / _constants_1.MINUTE_IN_SECONDS);
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
exports.timeAgo = timeAgo;
const setLanguage = (lang) => {
    i18next_1.default.changeLanguage(lang);
};
exports.setLanguage = setLanguage;
