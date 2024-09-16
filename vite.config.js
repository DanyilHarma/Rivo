import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { fileURLToPath } from 'url'; // Импортируем для работы с __dirname

// Определяем __dirname
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  console.log('Vite mode:', mode); // Логируем текущий режим (development или production)

  return {
    plugins: [react(), eslintPlugin()],
    build: {
      sourcemap: !isProduction, // Source Maps включены только в dev-режиме
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@fonts': path.resolve(__dirname, './src/assets/fonts'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@styles/variables.scss";
            @use "@styles/mixins.scss";
          `,
        },
      },
    },
  };
});
