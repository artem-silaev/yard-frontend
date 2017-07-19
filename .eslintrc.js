module.exports = {
  "extends": ["airbnb", "plugin:flowtype/recommended"],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype"
  ],
  "rules": {
    "react/prop-types": 0
  },
  env: {
    jest: true,
    browser: true
  }
};
