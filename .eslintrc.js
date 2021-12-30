module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks', // https://www.npmjs.com/package/eslint-config-airbnb#:~:text=to%20your%20.eslintrc-,eslint%2Dconfig%2Dairbnb/hooks,-This%20entry%20point
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // you can disable this rule starting from react 17+
    'react/react-in-jsx-scope': 'off',
  },
};
