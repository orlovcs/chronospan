"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanReadableTime = humanReadableTime;
function humanReadableTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
}
