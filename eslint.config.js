import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'

import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'],
  //...eslintPluginAstro.configs["flat/jsx-a11y-strict"],
  eslintConfigPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
]
