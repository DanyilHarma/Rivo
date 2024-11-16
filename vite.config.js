import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import checker from 'vite-plugin-checker';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  console.log('Vite mode:', mode);

  return {
    plugins: [react(),
    eslintPlugin({ overrideConfigFile: path.resolve(__dirname, './eslint.config.js') }),
    checker({ typescripe: true })
    ],
    build: {
      sourcemap: !isProduction,
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
