"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeUntil = exports.timeAgo = exports.setLanguage = exports.fromTime = void 0;
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
    const input = new Date(date || new Date());
    const now = new Date();
    const diff = now.getTime() - input.getTime();
    const diffInMinutes = Math.floor(diff / _constants_1.MINUTE_IN_SECONDS);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);
    if (diffInMinutes < 1)
        return i18next_1.default.t("justNow");
    if (diffInMinutes < 60)
        return i18next_1.default.t(diffInMinutes === 1 ? "minutesAgo.one" : "minutesAgo.other", { count: diffInMinutes });
    if (diffInHours < 24)
        return i18next_1.default.t(diffInHours === 1 ? "hoursAgo.one" : "hoursAgo.other", {
            count: diffInHours,
        });
    if (diffInDays < 7)
        return i18next_1.default.t(diffInDays === 1 ? "daysAgo.one" : "daysAgo.other", {
            count: diffInDays,
        });
    if (diffInDays < 30)
        return i18next_1.default.t(diffInDays === 1 ? "weeksAgo.one" : "weeksAgo.other", {
            count: Math.floor(diffInDays / 7),
        });
    return input.toLocaleDateString();
};
exports.timeAgo = timeAgo;
const timeUntil = (date) => {
    const input = new Date(date || new Date());
    const now = new Date();
    const diff = input.getTime() - now.getTime();
    const diffInMinutes = Math.floor(diff / _constants_1.MINUTE_IN_SECONDS);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);
    if (diffInMinutes < 1)
        return i18next_1.default.t("justNow");
    if (diffInMinutes < 60)
        return i18next_1.default.t(diffInMinutes === 1 ? "minutesUntil.one" : "minutesUntil.other", { count: diffInMinutes });
    if (diffInHours < 24)
        return i18next_1.default.t(diffInHours === 1 ? "hoursUntil.one" : "hoursUntil.other", {
            count: diffInHours,
        });
    if (diffInDays < 7)
        return i18next_1.default.t(diffInDays === 1 ? "daysUntil.one" : "daysUntil.other", {
            count: diffInDays,
        });
    if (diffInDays < 30)
        return i18next_1.default.t(diffInDays === 1 ? "weeksUntil.one" : "weeksUntil.other", {
            count: Math.floor(diffInDays / 7),
        });
    if (diffInDays < 365)
        return i18next_1.default.t(diffInDays === 1 ? "monthsUntil.one" : "monthsUntil.other", {
            count: Math.floor(diffInDays / 30),
        });
    if (diffInDays < 3650)
        return i18next_1.default.t(diffInDays === 1 ? "yearsUntil.one" : "yearsUntil.other", {
            count: Math.floor(diffInDays / 365),
        });
    if (diffInDays < 36500)
        return i18next_1.default.t(diffInDays === 1 ? "decadesUntil.one" : "decadesUntil.other", {
            count: Math.floor(diffInDays / 3650),
        });
    if (diffInDays < 365000)
        return i18next_1.default.t(diffInDays === 1 ? "centuriesUntil.one" : "centuriesUntil.other", {
            count: Math.floor(diffInDays / 36500),
        });
    return i18next_1.default.t(diffInDays === 1 ? "millenniaUntil.one" : "millenniaUntil.other", {
        count: Math.floor(diffInDays / 365000),
    });
};
exports.timeUntil = timeUntil;
const fromTime = (date) => {
    const input = new Date(date || new Date());
    const now = new Date();
    if (input.getTime() < now.getTime()) {
        return timeAgo(input);
    }
    else {
        return timeUntil(input);
    }
};
exports.fromTime = fromTime;
const setLanguage = (lang) => {
    i18next_1.default.changeLanguage(lang);
};
exports.setLanguage = setLanguage;
