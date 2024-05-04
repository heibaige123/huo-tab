<script setup lang="ts">
import { useMenuStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { Icon } from '@/views/components';
import { ref } from 'vue';

const menuStore = useMenuStore();
const { isShowMenuText, selectMenuItemId } = storeToRefs(menuStore);
const { menuList, setSelectMenuItemId, setIsShowMenuText } = menuStore;

/** hover中的菜单项 */
const hoverMenuItemId = ref<string>('');

function handleMouseEnter(id: string) {
    hoverMenuItemId.value = id;
}

function handleMouseLeave() {
    hoverMenuItemId.value = '';
}
</script>

<template>
    <div class="menu-inner menu-inner-1 flex relative">
        <!-- icon -->
        <div
            class=""
            @mouseleave="setIsShowMenuText(false)"
            @mouseenter="setIsShowMenuText(true)"
        >
            <template v-for="item in menuList" :key="item.id">
                <div
                    :class="[
                        'flex items-center hover:bg-amber-300 h-12 mb-2 rounded-lg',
                        {
                            'bg-amber-300': selectMenuItemId === item.id
                        }
                    ]"
                    @mouseenter="handleMouseEnter(item.id)"
                    @mouseleave="handleMouseLeave"
                >
                    <div
                        class="w-[52px] flex justify-center"
                        @click="setSelectMenuItemId(item.id)"
                    >
                        <Icon :icon="item.icon" class-name="text-3xl" />
                    </div>
                </div>
            </template>
        </div>

        <!-- 文本 -->
        <div class="ml-3" v-show="isShowMenuText">
            <template v-for="item in menuList" :key="item.id">
                <div
                    :class="[
                        'flex items-center justify-start h-12 mb-2 text-2xl text-red-800 rounded-lg px-3',
                        {
                            'bg-slate-300': hoverMenuItemId === item.id
                        }
                    ]"
                >
                    {{ item.text }}
                </div>
            </template>
        </div>
    </div>
</template>

<style scoped>
.menu-inner {
    width: 300px;
    min-height: 300px;
    max-height: 70vh;
    overflow-y: auto;
}

.menu-inner::-webkit-scrollbar {
    width: 0;
}
</style>
