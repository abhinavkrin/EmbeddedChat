import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path';

export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    minify: false,
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/EmbeddedChatEmbed.jsx'),
      name: 'EmbeddedChatEmbed',
      formats: ['umd'],
      fileName: () => 'embeddedchat.js',
    },
    define: {
      'process.env': {}
    },
    // rollupOptions: {
    //   input: {
    //     app: "./src/EmbeddedChatEmbed.jsx",
    //   },
    // },
  },
})
