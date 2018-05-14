module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  'rules': {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'object-curly-newline': 0,
    'no-param-reassign': ['error', { 'props': false }]
  },
}
