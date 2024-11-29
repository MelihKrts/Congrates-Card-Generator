import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from "url"
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import {icons} from "~/icons/icons.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
            manifest: {
                name: 'Congrates Card Generator',
                short_name: 'Congrates',
                theme_color: '#000000',
                icons:icons,
            }
        })
    ],
    server: {
        host: "0.0.0.0",
        port: 5173
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
    },
})
