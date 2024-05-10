import { defineStore, storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { generateSiteList } from '../dataMock';
import { useMenuStore } from './menu';

export const useSiteStore = defineStore('site', () => {
    const menuStore = useMenuStore();
    const { selectMenuItemId } = storeToRefs(menuStore);

    const siteMap = reactive(generateSiteList(40));
    const currentSiteList = reactive(siteMap[selectMenuItemId.value]);

    /**
     * 元素是否正在被拖拽
     */
    const isDragging = ref(false);

    function moveSiteItem(newIndex: number, oldIndex: number) {
        const siteItem = currentSiteList[oldIndex];
        currentSiteList.splice(oldIndex, 1);
        currentSiteList.splice(newIndex, 0, siteItem);
    }

    return {
        siteMap,
        currentSiteList,
        isDragging,

        moveSiteItem
    };
});
