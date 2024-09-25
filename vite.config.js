import { defineConfig } from 'vite';
import { resolve } from 'path';
export default defineConfig({
    base: 'https://github.com/Dmitriy267/testVanilla',
    root: './src',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: './src/index.html',
            },
        },
    },
    resolve: {
        alias: {
            '@js': resolve(__dirname, 'src/assets/js'),
        },
    },
});
