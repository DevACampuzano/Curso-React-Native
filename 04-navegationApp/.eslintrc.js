module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps ': 0,
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
