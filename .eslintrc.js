module.exports = {
  extends: ['airbnb-typescript/base', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  // https://stackoverflow.com/questions/68878189/eslint-definition-for-rule-import-extensions-was-not-found
  plugins: ["import"],
  rules: {
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'no-misleading-character-class': 'off',
  },
};
