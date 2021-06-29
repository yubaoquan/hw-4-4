module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.tsx'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'no-loop-func': 'off',
    'brace-style': ['error', '1tbs'],
    'import/extensions': ['error', 'ignorePackages', { tsx: 'never' }],
    'no-param-reassign': ['error', { props: false }],
    'max-statements-per-line': ['error', { max: 1 }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/no-unescaped-entities': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',

    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: { array: false, object: true },
        AssignmentExpression: { array: false, object: true },
      },
      { enforceForRenamedProperties: false },
    ],

    'lines-around-comment': ['error', {
      allowArrayStart: true,
      allowBlockStart: true,
      allowClassStart: true,
      allowObjectStart: true,
      beforeBlockComment: true,
      beforeLineComment: true,
    }],

    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'class', next: '*' },
      { blankLine: 'always', prev: '*', next: 'class' },
      { blankLine: 'always', prev: 'function', next: '*' },
      { blankLine: 'always', prev: '*', next: 'function' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'export', next: 'export' },
    ],
  },
};
