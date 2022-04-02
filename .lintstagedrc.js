module.exports = {
  '**/*.js?(x)': (filenames) =>
    filenames.length > 5 ? 'eslint --ext .js,.jsx . --ignore-path .gitignore --fix .' : `eslint ${filenames.join(' ')}`
}