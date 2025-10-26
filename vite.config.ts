import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            includeAssets: ['favicon.svg', 'generative.png'], // optional extra assets
            manifest: {
                name: 'Proj-Ariel',
                short_name: 'Ariel-Tech',
                description: 'For gamers by gamers',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'generative.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
