import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { crx } from '@crxjs/vite-plugin';
import manifest from './crx-config/manifest.json' assert { type: 'json' }; // Node >=17

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx(), crx({ manifest })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
