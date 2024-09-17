module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  globals: {
    __IS_DEV__: true,
  },
  rules: {
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
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-props-no-spreading': ['warn', {
      html: 'ignore',
      exceptions: ['Link', 'WrappedComponent'],
    }],
    'no-unused-vars': ['error', { destructuredArrayIgnorePattern: '^_' }],
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
  },
}
