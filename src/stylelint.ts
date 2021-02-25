export default {
  extends: [
    'stylelint-config-prettier',
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],

  plugins: ['stylelint-order'],

  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

  rules: {
    // Require an empty line before rules
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],

    // Colors must never be named
    'color-named': 'never',

    // Specify lowercase for hex colors
    'color-hex-case': 'lower',

    // Specify short notation for hex colors
    'color-hex-length': 'short',

    // Urls must always be quoted
    'function-url-quotes': 'always',

    // Allow selectors of lower specificity from coming after overriding selectors of higher specificity
    'no-descending-specificity': null,
  },
}
