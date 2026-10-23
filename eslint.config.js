module.exports = [
  {
    files: ["**/*.js"],
    ignores: [
      "public/assign1/q2/**/*.js",
      "public/lab4/main.js",
      "public/lab4/utils.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        document: "readonly",
        module: "writable",
        require: "readonly",
        console: "readonly",
        window: "readonly",
        fetch: "readonly",
        URL: "readonly",
        AbortController: "readonly",
        navigation: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      eqeqeq: "error",
    },
  },
  {
    files: [
      "public/assign1/q2/**/*.js",
      "public/lab4/main.js",
      "public/lab4/utils.js",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        console: "readonly",
        setTimeout: "readonly",
      },
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      eqeqeq: "error",
    },
  },
];
