# chronospan

![npm](https://img.shields.io/npm/v/chronospan)
![Build Status](https://github.com/orlovcs/chronospan/actions/workflows/ci.yml/badge.svg)
![Downloads](https://img.shields.io/npm/dt/chronospan)
![License](https://img.shields.io/npm/l/chronospan)

# Date Formatter with Natural Language

## Features

- Accepts a Date or timestamp.
- Outputs phrases like "2 minutes ago" or "in 5 days".
- Customizable localization (e.g., English, Spanish, etc.).
- Supports past and future dates.
- A lightweight date utility to format dates in a human-readable way (e.g., "2 hours ago", "Tomorrow", "Last week").
- A gzipped size of ~645 B.
- Full Typescript support.
- Support for centuries & millenia!
- Provides functions for relative time formatting:
  - `timeAgo`: Formats past dates.
  - `timeUntil`: Formats future dates.
  - `fromTime`: Dynamically formats dates based on whether they are in the past or future.

## Installation

```sh
yarn add chronospan
```

### Importing the module

```typescript
import { timeAgo, timeUntil, fromTime, setLanguage } from "chronospan";
```

### Formatting a past date

```typescript
const pastDate = new Date(Date.now() - 60000); // 1 minute ago
console.log(timeAgo(pastDate)); // Output: "1 minute ago"
```

### Formatting a future date

```typescript
const futureDate = new Date(Date.now() + 60000); // 1 minute in the future
console.log(timeUntil(futureDate)); // Output: "in 1 minute"
```

### Dynamically formatting a date

```typescript
const date = new Date(Date.now() - 60000); // 1 minute ago
console.log(fromTime(date)); // Output: "1 minute ago"

const futureDate = new Date(Date.now() + 60000); // 1 minute in the future
console.log(fromTime(futureDate)); // Output: "in 1 minute"
```

### Changing the language

```typescript
setLanguage("es");
console.log(timeAgo(pastDate)); // Output: "hace 1 minutos"
console.log(timeUntil(futureDate)); // Output: "en 1 minutos"
```

## Localization

The package supports multiple languages. Currently, English and Spanish are available. You can add more languages by adding JSON files in the `locales` directory and updating the `i18next` initialization.

### Adding a new language

1. Create a new JSON file in the `locales` directory (e.g., `fr.json` for French).
2. Add the translations in the JSON file.
3. Update the `i18next` initialization in `index.ts` to include the new language.

```typescript
import fr from "./locales/fr.json";

i18next.init({
  lng: "en",
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
  },
});
```

## NPM

View package [here](https://www.npmjs.com/package/chronospan).

## License

Licensed as MIT.
