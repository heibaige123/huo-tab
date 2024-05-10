<script setup lang="ts">
import { useSiteStore } from '@/stores';
import type { ISiteItemProps } from './types';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const props = defineProps<ISiteItemProps>();

const siteStore = useSiteStore();
const { isDragging } = storeToRefs(siteStore);
const refNode = ref<HTMLElement>();

function handleMouseEnter() {
    if (!isDragging.value) {
        return;
    }

    console.log('mouse enter', props.id, refNode.value);
}
</script>

<template>
    <div
        class="col-span-1 row-span-1 flex max-h-[128px] grow-0 select-none auto-cols-fr justify-center overflow-hidden rounded-xl bg-red-300 p-2 drop-shadow-2xl"
        @mouseenter="handleMouseEnter"
        ref="refNode"
    >
        <div class="h-28 w-28 cursor-pointer">
            <div class="flex flex-col items-center justify-center">
                <img
                    :src="img"
                    class="h-20 w-20"
                />
                <p class="text-center">{{ name }}</p>
            </div>
        </div>
    </div>
</template>
