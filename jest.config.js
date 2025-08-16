const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'react-tinder-card': '<rootDir>/src/__mocks__/react-tinder-card.tsx',
    'framer-motion': '<rootDir>/src/external/framer-motion.tsx'
  },
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
