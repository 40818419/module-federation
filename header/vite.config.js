import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/bootstrap.js",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: 'esnext',
  },
  // base: "/",
  //cacheDir: "node_modules/.cacheDir",
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    // },
  },
})
