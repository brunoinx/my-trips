module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
};
