<script setup lang="ts">
import type { ISiteItem } from './types';
import { initDnD } from './dnd';

const props = defineProps<ISiteItem>();
const { opacity, refNodeCallBack } = initDnD(props);
</script>

<template>
    <div
        class="col-span-1 row-span-1 flex max-h-[128px] grow-0 select-none auto-cols-fr justify-center overflow-hidden rounded-xl bg-red-300 p-2 drop-shadow-2xl"
        :ref="refNodeCallBack"
        :style="{ opacity }"
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
