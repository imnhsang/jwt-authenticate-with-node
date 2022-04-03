module.exports = {
  parser: '@babel/eslint-parser',
  env   : {
    browser: true,
    es2021 : true,
    node   : true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType : 'module',
  },
  rules: {
    semi         : ['error', 'never'],
    eqeqeq       : ['error', 'always'],
    'no-console' : ['off'],
    'key-spacing': [
      2,
      {
        singleLine: { beforeColon: false, afterColon: true },
        multiLine : { beforeColon: false, afterColon: true, align: 'colon' },
      },
    ],
  },
}
