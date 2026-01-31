const { readFileSync } = require('fs');

const swcJestConfig = JSON.parse(
  readFileSync(`${__dirname}/.spec.swcrc`, 'utf-8')
);
swcJestConfig.swcrc = false;

module.exports = {
  displayName: '@org/ui',
  preset: '../../jest.preset.js',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.[tj]sx?$': ['@swc/jest', swcJestConfig],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: 'test-output/jest/coverage',

  moduleNameMapper: {
    '\\.(css|scss|sass)$': '<rootDir>/../../testing/__mocks__/style-mock.js',
    '\\.svg$': '<rootDir>/../../testing/__mocks__/svg-mock.tsx',
    '\\.(jpg|jpeg|png|gif|webp|avif)$':
      '<rootDir>/../../testing/__mocks__/style-mock.js',
  },
};
