<script setup lang="ts">
import { Icon } from '@/views/components';

import { useSearchboxStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const searchboxStore = useSearchboxStore();
const { searchServerList, setIsShowSearchServerList } = searchboxStore;
const { searchServerId, isShowSearchServerList } = storeToRefs(searchboxStore);

function handleClick(event: Event) {
    event.stopPropagation();

    setIsShowSearchServerList(true);
}

onMounted(() => {
    document.onclick = () => {
        setIsShowSearchServerList(false);
    };
});
</script>

<template>
    <div
        :class="[
            'cursor-pointer rounded-md',
            {
                'bg-pink-200': isShowSearchServerList
            }
        ]"
        @click="handleClick"
    >
        <template
            v-for="item in searchServerList"
            :key="item.id"
        >
            <template v-if="item.id === searchServerId">
                <Icon :icon="item.icon" />
            </template>
        </template>
    </div>
</template>

<style scoped></style>
