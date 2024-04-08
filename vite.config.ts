import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  build: {
    sourcemap: true,
  },
  server: {
    port: 8080,
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
    Components({
      globs: ['src/components/*.{vue}', 'src/views/*.{vue}', 'src/layouts/*.{vue}'],
      deep: true,
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global";`,
      },
    },
  },
})
