/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  rootDir: "./",
  testMatch: ["<rootDir>/**/*.{spec,test}.{js,ts}"],
  testPathIgnorePatterns: ["<rootDir>/__mocks__/*"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90,
      branches: 100,
      functions: 90,
    },
  },
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "!<rootDir>/**/*.d.ts",
    "!<rootDir>/**/*.spec.ts",
    "!<rootDir>/**/*.test.ts",
    "!<rootDir>/**/__*__/*",
    "!<rootDir>/utils/testing.ts",
  ],
  testEnvironment: "node",
};
