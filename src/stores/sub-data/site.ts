import { defineStore, storeToRefs } from 'pinia';
import { reactive } from 'vue';
import { generateSiteList } from '../dataMock';
import { useMenuStore } from './menu';

export const useSiteStore = defineStore('site', () => {
    const menuStore = useMenuStore();
    const { selectMenuItemId } = storeToRefs(menuStore);

    const siteMap = reactive(generateSiteList(40));

    function moveSiteItem(id: string, atId: string) {
        const selectMenuItemIdValue = selectMenuItemId.value;

        if (!selectMenuItemIdValue) {
            return;
        }

        const index = findSiteItemIdx(id) || 0;
        const atIndex = findSiteItemIdx(atId) || 0;
        const siteItem = siteMap[selectMenuItemIdValue][index];

        siteMap[selectMenuItemIdValue].splice(index, 1);
        siteMap[selectMenuItemIdValue].splice(atIndex, 0, siteItem);
    }

    function findSiteItemIdx(id: string) {
        const selectMenuItemIdValue = selectMenuItemId.value;

        if (!selectMenuItemIdValue) {
            return;
        }

        return siteMap[selectMenuItemIdValue].findIndex(
            (item) => item.id === id
        );
    }

    return {
        siteMap,

        moveSiteItem,
        findSiteItemIdx
    };
});
