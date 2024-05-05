import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteStaticCopy } from 'vite-plugin-static-copy';

function pathResolve(dir: string) {
    return fileURLToPath(new URL(dir, import.meta.url));
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        viteStaticCopy({
            targets: [
                {
                    src: './crx-config/manifest.json',
                    dest: '../dist'
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': pathResolve('./src')
        }
    },
    build: {
        // minify: false,
        minify: true,
        write: true,
        rollupOptions: {
            input: {
                popup: pathResolve('src/views/popup/index.html'),
                newtab: pathResolve('src/views/newtab/index.html'),
                content: pathResolve('src/content/content.ts'),
                background: pathResolve('src/background/service-worker.ts')
            },
            output: {
                assetFileNames: 'assets/[name]-[hash].[ext]',
                chunkFileNames: 'js/[name]-[hash].js',
                entryFileNames: (chunkInfo) => {
                    const { facadeModuleId } = chunkInfo;
                    const filePath = 'src/' + facadeModuleId?.split('/src/')[1];
                    const extname = path.extname(filePath);
                    const fileName = filePath.split(extname)[0];

                    return `${fileName}.js`;
                }
            }
        }
    }
});
