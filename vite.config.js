import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const ___dirname = dirname(fileURLToPath(import.meta.url))


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),

  ],

  server: {
    host: "0.0.0.0"
  },
  resolve: {
    alias: {
      '@': resolve(___dirname, "/src")
    }
  },
  extensions: [".js", ".ts", ".tsx", ".jsx"],
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src//style/common.less";',
      },
    },
  },
})