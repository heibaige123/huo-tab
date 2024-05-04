import { defineStore, storeToRefs } from 'pinia';
import { reactive, ref } from 'vue';
import { generateMenu } from '../dataMock';

export const useMenuStore = defineStore('menu', () => {
    /** 菜单数据*/
    const menuList = reactive(generateMenu(10));

    /** 选中的菜单项ID */
    const selectMenuItemId = ref(menuList[0].id);

    /** 是否显示菜单文字 */
    const isShowMenuText = ref(true);

    function setSelectMenuItemId(id: string) {
        selectMenuItemId.value = id;
    }

    function setIsShowMenuText(isShow: boolean) {
        isShowMenuText.value = isShow;
    }

    return {
        menuList,
        selectMenuItemId,
        isShowMenuText,

        setSelectMenuItemId,
        setIsShowMenuText
    };
});
