import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import * as packageJSON from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/components/'],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src', 'components/index.ts'),
      name: 'PopixUI',
      formats: ['es', 'umd'],
      fileName: 'popix-ui',
    },
    rollupOptions: {
      external: [...Object.keys(packageJSON.devDependencies)],
    },
  },
});
