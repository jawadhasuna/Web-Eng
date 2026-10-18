module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["public/assign1/q2/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        document: "readonly",
        module: "writable",
        require: "readonly",
        console: "readonly",
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
    files: ["public/assign1/q2/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        console: "readonly",
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
