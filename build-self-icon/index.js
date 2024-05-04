import { fileURLToPath, URL } from 'node:url';
import { importDirectorySync, exportJSONPackage } from '@iconify/tools';

function pathResolve(dir) {
    return fileURLToPath(new URL(dir, import.meta.url));
}

const icons = importDirectorySync(pathResolve('./icons'), {
    prefix: 'h-tab-i'
});

exportJSONPackage(icons, {
    target: pathResolve('../src/assets/svg'),
    cleanup: true
});
