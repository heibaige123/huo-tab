import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';
import { generateSearchServer } from '../dataMock';

export const useSearchboxStore = defineStore('searchbox', () => {
    /** 搜索服务厂商 */
    const searchServerList = reactive(generateSearchServer());

    /** 选择的搜索服务id */
    const searchServerId = ref(searchServerList[0].id);

    /** 是否显示搜索服务选择界面 */
    const isShowSearchServerList = ref(false);

    function setSearchServerId(id: string) {
        searchServerId.value = id;
    }

    function setIsShowSearchServerList(val: boolean) {
        isShowSearchServerList.value = val;
    }

    const currentSearchServer = computed(() => {
        return searchServerList.find(
            (item) => item.id === searchServerId.value
        );
    });

    return {
        searchServerList,
        searchServerId,
        isShowSearchServerList,
        currentSearchServer,

        setSearchServerId,
        setIsShowSearchServerList
    };
});
