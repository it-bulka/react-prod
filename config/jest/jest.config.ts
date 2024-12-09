import path from 'path'

const config = {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT_ENV__: 'jest'
  },
  clearMocks: false,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\'
  ],
  moduleDirectories: [
    'node_modules'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  rootDir: '../../',
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  // for absolute paths
  modulePaths: ['<rootDir>src'],
  // additional set-up for react-testing-library
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
  moduleNameMapper: {
    '\\.svg': path.resolve(__dirname, 'mockComponent.tsx'),
    '\\.s?css$': 'identity-obj-proxy',
    '@locales/(.*)$': '<rootDir>/public/locales/$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit',
      filename: 'report.html',
      openReport: true,
      inlineSource: true
    }]
  ]
}

export default config
