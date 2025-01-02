import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/portfolio/',
    build: {
        outDir: 'docs', // This is the default, you can adjust it if needed
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Map '@' to the 'src' folder
        },
    },
})