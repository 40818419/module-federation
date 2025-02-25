import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      remotes: {
        header: {
          entry: "http://localhost:5001/remoteEntry.js",
          name: "header",
          type: "module",
          // entryGlobalName: "header",
          // shareScope: "default",
          from: "vite",
        },
        // main: {
        //   entry: "http://localhost:3000/_next/static/chunks/remoteEntry.js",
        //   type: 'var',
        //   // entryGlobalName: "main",
        //   // shareScope: "default",
        // },
        banner: {
          entry: "http://localhost:3000/_next/static/chunks/remoteEntry.js",
          type: 'var',
          // entryGlobalName: "main",
          // shareScope: "default",
        },
        // remote2: "http://localhost:3000/_next/static/chunks/remoteEntry.js",
        footer: {
          entry: "http://localhost:5004/remoteEntry.js",
          type: "var",
          entryGlobalName: "footer",
          shareScope: "default",
        },
      },
      shared: ["react", "react-dom", "tailwindcss", "postcss", "autoprefixer"],
    }),
  ],
  server: {
    port: 5003,
  },
  // cacheDir: "node_modules/.cacheDir",
  build: {
    target: 'chrome89',
    // target: "esnext",
    // minify: false,
    // cssCodeSplit: false,
    // rollupOptions: {
    //   output: {
    //     assetFileNames() {
    //       return "[name][extname]";
    //     },
    //   },
    // },
  },
})
