module.exports = {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],

  plugins: ['stylelint-order'],

  rules: {
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'function-url-quotes': 'always',
    'no-descending-specificity': null,
  },

  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
}
