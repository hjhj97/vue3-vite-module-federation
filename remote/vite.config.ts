import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";
//import topLevelAwait from "vite-plugin-top-level-await";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.vue",
      },
      shared: ["vue"],
    }),
  ],
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },
});
