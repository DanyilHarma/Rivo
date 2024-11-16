import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

const isProduction = process.env.NODE_ENV === 'production' || false;

export default [
  { ignores: ['dist', 'eslint.config.js'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Добавляем поддержку .ts и .tsx файлов
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parser: tsParser, // Используем парсер TypeScript
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
        project: './tsconfig.json', // Указываем путь к tsconfig.json
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescript, // Добавляем TypeScript плагин
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      ...typescript.configs.recommended.rules, // Добавляем правила для TypeScript
      '@typescript-eslint/no-unused-vars': 'warn', // Настраиваем проверку неиспользуемых переменных для TS
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-unused-vars': 'off', // Отключаем стандартное правило (заменяем на TypeScript версию)
      'no-debugger': isProduction ? 'error' : 'off',
      'react/prop-types': 'off', // Не нужно, так как будет использоваться TypeScript для типизации
    },
  },
];
