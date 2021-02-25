module.exports = {
  // Only add semicolons at the beginning of lines that may introduce ASI failures
  semi: false,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Trailing commas wherever possible
  trailingComma: 'all',

  // Do not wrap prose
  proseWrap: 'never',

  // Line Feed only (\n), common on Linux and macOS as well as inside git repos
  endOfLine: 'lf',

  // Configuration Overrides
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
    {
      files: 'document.ejs',
      options: { parser: 'html' },
    },
  ],
}
