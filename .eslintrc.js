module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },

  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "no-duplicate-imports": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          2,
          {
            vars: "all",
            args: "after-used",
            argsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/prefer-literal-enum-member": "off",
        "@typescript-eslint/no-duplicate-enum-values": "off",

        // -------------------------------React Rules---------------------------------//
        "react/no-unknown-property": ["error", { ignore: ["css", "test-id"] }],
        "react/display-name": "off",
        "react/prop-types": "off",
        "react/jsx-uses-vars": "warn",
        "react/jsx-boolean-value": [2, "always"],
        "react/jsx-key": "error",
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/no-unused-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "error",
        "react/static-property-placement": "error",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
};
