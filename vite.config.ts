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
            registerType: 'autoUpdate', // service worker updates automatically
            includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'], // optional extra assets
            manifest: {
                name: 'My App',
                short_name: 'App',
                description: 'My React + Vite + TS + Tailwind App with PWA support',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'generative.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'generative.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
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
