module.exports = {
  env: {
    browser: true,
    es2021 : true,
    node   : true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType : 'module'
  },
  plugins : ['import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
          [
            '@/routes,', './src/routes'
          ]
        ]
      },
      extensions: ['.js', '.jsx']
    }
  },
  rules: {
    'no-console'             : 'off',
    indent                   : ['error', 2, { SwitchCase: 1 }],
    semi                     : ['error', 'never'],
    'no-multi-spaces'        : 'error',
    eqeqeq                   : ['error', 'always'],
    'no-trailing-spaces'     : 'error',
    quotes                   : ['error', 'single'],
    'eol-last'               : ['error', 'always'],
    'comma-dangle'           : ['error', 'never'],
    'no-cond-assign'         : ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 1 }],
    'key-spacing'            : [
      2,
      {
        singleLine: { beforeColon: false, afterColon: true },
        multiLine : { beforeColon: false, afterColon: true, align: 'colon' }
      }
    ],
    'import/prefer-default-export'   : 'off',
    'import/no-import-module-exports': 'off'
  }
}
