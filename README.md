# Chronospan

![npm](https://img.shields.io/npm/v/chronospan)
![Build Status](https://github.com/orlovcs/chronospan/actions/workflows/ci.yml/badge.svg)
![Coverage](https://img.shields.io/codecov/c/github/orlovcs/chronospan)
![Downloads](https://img.shields.io/npm/dt/chronospan)
![License](https://img.shields.io/npm/l/chronospan)

## Date Formatter with Natural Language

- A lightweight date utility to format dates in a human-readable way (e.g., "2 hours ago", "Tomorrow", "Last week").
- A gzipped size of ~645 B.
- Full Typescript support.

## Features

- Accepts a Date or timestamp.
- Outputs phrases like "2 minutes ago" or "in 5 days".
- Customizable localization (e.g., English, Spanish, etc.).

## Installation

````sh
yarn add chronospan

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
````

## Usage

```ts
import { timeAgo, setLanguage } from "chronospan";

const date = new Date(Date.now() - 60000); // 1 minute ago
console.log(timeAgo(date)); // Output: "1 minute ago"
```

## NPM

View package [here](https://www.npmjs.com/package/chronospan).

## License

Licensed as MIT.
