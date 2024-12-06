import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
    integrations: [vue()],
    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        css: {
            postcss: './postcss.config.cjs',
        },
    },
});
