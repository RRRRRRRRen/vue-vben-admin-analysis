module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-property-sort-order-smacss',
  ],
  plugins: ['stylelint-prettier'],
  overrides: [
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-less',
    },
  ],
};
