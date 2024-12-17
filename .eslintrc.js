module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 15,
    sourceType: 'module',
    project: './tsconfig.eslint.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'fsd-checker-gen'
  ],
  globals: {
    __IS_DEV__: true,
    __API__: true
  },
  overrides: [
    {
      files: ['**/src/**/*.test.{ts,tsx}', '*.stories.{ts,tsx,js, jsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'class-methods-use-this': ['error', { 'exceptMethods': ['observe', 'unobserve', 'disconnect'] }]
      }
    }
  ],
  rules: {
    'fsd-checker-gen/path-checker': ['error', { alias: '@' }],
    'fsd-checker-gen/public-api-imports': 'off',
    semi: ['error', 'never'],
    'no-underscore-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'react/require-default-props': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx']
      }
    ],
    'react/jsx-props-no-spreading': ['warn', {
      html: 'ignore',
      exceptions: ['Link', 'WrappedComponent']
    }],
    'no-unused-vars': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['error', 'as-needed', { unnecessary: false }],
    'no-shadow': 'off', // bug, same ts rule is on
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['PascalCase', 'UPPER_CASE']
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_', argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'react/jsx-indent': ['error', 2],
    'no-param-reassign': ['error', { 'props': false }],
    'arrow-parens': ['error', 'as-needed'],
    // Deprecated rules. Make bug with rule no found. They should be off.
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/comma-spacing': 'off',
    '@typescript-eslint/func-call-spacing': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/keyword-spacing': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    '@typescript-eslint/space-infix-ops': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'consistent-return': 'off'
  }
}
