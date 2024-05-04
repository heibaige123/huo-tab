import type { Ref } from 'vue';

export interface ProvideType {
    /**
     * @description: 选中的索引
     */
    selectIndex: Ref<number>;

    /**
     * @description: 是否显示菜单名称
     */
    isShowMenuName: Ref<boolean>;
}
