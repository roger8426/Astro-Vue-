import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

export default defineConfig({
    output: "server",
    integrations: [vue()],
    vite: {
        plugins: [],
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        css: {
            postcss: './postcss.config.cjs',
        },
        ssr: {
            noExternal: ["naive-ui", "vueuc", "date-fns", "@vueuse/core"],
        },
    },
});
