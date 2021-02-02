module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-standard'],

  rules: {
    'rule-empty-line-before': [
      'always',
      { except: ['after-single-line-comment', 'first-nested'] },
    ],
    'color-named': 'never',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'no-descending-specificity': null,
  },
}
