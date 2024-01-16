module.exports = {
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"],
        "createDefaultProgram": true,
        "tsconfigRootDir": __dirname
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates"
      ],
      "rules": {
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          },
        ],
        "jsdoc/newline-after-description": "off",
        "max-len": ["error", {
          "code": 200,
          "ignoreComments": true,
          "ignoreRegExpLiterals": true,
          "ignoreStrings": true,
          "ignoreTemplateLiterals": true,
          "ignoreTrailingComments": true,
          "ignoreUrls": true
        }],
        "no-trailing-spaces": ["error", {
            "ignoreComments": true,
            "skipBlankLines": true
        }],
        "no-underscore-dangle": "off",
        "semi": ["error", "always"],
        "semi-style": "error",
        "semi-spacing": "error",
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    }
  ]
}
