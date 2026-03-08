import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'coverage/**',
      'dist/**',
      'convex/_generated/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@next/next': nextPlugin,
      import: importPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
    },
  },
];
