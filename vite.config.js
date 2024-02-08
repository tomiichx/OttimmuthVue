import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    base: "./",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/js/[name].js`,
                chunkFileNames: `assets/js/[name].js`,
                assetFileNames: `assets/[ext]/[name].[ext]`
            }
        },
        outDir: "build",
        target: "esnext"
    },
    esbuild: {
        drop: ["console", "debugger"],
        logOverride: { "this-is-undefined-in-esm": "silent" }
    },
    optimizeDeps: {
        force: true
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});
