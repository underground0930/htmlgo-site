// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook'

import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import typescriptEslint from '@typescript-eslint/eslint-plugin'

export default defineConfig([
  globalIgnores([
    '**/tsconfig.json',
    '**/build/',
    '**/bin/',
    '**/obj/',
    '**/out/',
    '**/.next/',
    '**/scripts/',
  ]),
])
