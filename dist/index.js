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
/**
 * Returns a human-readable string representing the time elapsed since the given date.
 *
 * @param date - The date to compare against the current time. Can be a Date object or a string.
 * @param fuzzy - If true, returns a fuzzy time description (e.g., "yesterday", "last week").
 * @returns A string representing the time elapsed since the given date.
 */
const timeAgo = (date, fuzzy) => {
    const input = new Date(date || new Date());
    const now = new Date();
    const diff = now.getTime() - input.getTime();
    const diffInMinutes = Math.floor(diff / _constants_1.MINUTE_IN_SECONDS);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);
    if (fuzzy) {
        if (diffInDays === 1)
            return i18next_1.default.t("yesterday");
        if (diffInDays < 7)
            return i18next_1.default.t("lastWeek");
        if (diffInDays < 30)
            return i18next_1.default.t("lastMonth");
        if (diffInDays < 365)
            return i18next_1.default.t("lastYear");
        if (diffInDays < 3650)
            return i18next_1.default.t("lastDecade");
        if (diffInDays < 36500)
            return i18next_1.default.t("lastCentury");
        return i18next_1.default.t("lastMillennium");
    }
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
/**
 * Calculates the time until a given date and returns a localized string representation.
 *
 * @param date - The target date, either as a Date object or a string. Defaults to the current date if not provided.
 * @param fuzzy - If true, returns a fuzzy representation (e.g., "tomorrow", "next week"). Defaults to false.
 * @returns A localized string representing the time until the given date.
 */
const timeUntil = (date, fuzzy) => {
    const input = new Date(date || new Date());
    const now = new Date();
    const diff = input.getTime() - now.getTime();
    const diffInMinutes = Math.floor(diff / _constants_1.MINUTE_IN_SECONDS);
    const diffInHours = Math.floor(diff / 3600000);
    const diffInDays = Math.floor(diff / 86400000);
    if (fuzzy) {
        if (diffInDays === 1)
            return i18next_1.default.t("tomorrow");
        if (diffInDays < 7)
            return i18next_1.default.t("nextWeek");
        if (diffInDays < 30)
            return i18next_1.default.t("nextMonth");
        if (diffInDays < 365)
            return i18next_1.default.t("nextYear");
        if (diffInDays < 3650)
            return i18next_1.default.t("nextDecade");
        if (diffInDays < 36500)
            return i18next_1.default.t("nextCentury");
        return i18next_1.default.t("nextMillennium");
    }
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
const fromTime = (date, fuzzy) => {
    const input = new Date(date || new Date());
    const now = new Date();
    if (input.getTime() < now.getTime()) {
        return timeAgo(input, fuzzy);
    }
    else {
        return timeUntil(input, fuzzy);
    }
};
exports.fromTime = fromTime;
/**
 * Changes the current language of the i18next instance.
 *
 * @param lang - The language code to set (e.g., 'en', 'fr', 'de').
 * @returns void
 */
const setLanguage = (lang) => {
    i18next_1.default.changeLanguage(lang);
};
exports.setLanguage = setLanguage;
