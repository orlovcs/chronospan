module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.ts"],
  moduleNameMapper: {
    "^@constants$": "<rootDir>/src/constants",
    "^@locales/(.*)$": "<rootDir>/src/locales/$1",
  },
};
