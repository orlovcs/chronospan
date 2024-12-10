# Date Formatter with Natural Language

- A lightweight date utility to format dates in a human-readable way (e.g., "2 hours ago", "Tomorrow", "Last week").
- A gzipped size of ~221 B.
- Full Typescript support.

## Features

- Accepts a Date or timestamp.
- Outputs phrases like "2 minutes ago" or "in 5 days".
- Customizable localization (e.g., English, Spanish, etc.).

## Installation

```sh
yarn install chronospan
```

## Usage

```ts
import { formatDate, setLanguage } from "chronospan";

const date = new Date(Date.now() - 60000); // 1 minute ago
console.log(formatDate(date)); // Output: "1 minute ago"
```

## License

Licensed as MIT.
