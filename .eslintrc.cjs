module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard-with-typescript',
    'eslint-config-prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/space-before-blocks': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
}
