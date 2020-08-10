module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'no-unused-vars': 0,
    'no-console': 0
  }
}
