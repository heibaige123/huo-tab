<script setup lang="ts">
import { useSiteStore } from '@/stores';
import {
    computed,
    onMounted,
    ref,
    toRefs,
    unref,
    type Ref,
    type VNodeRef
} from 'vue';
import { useDrop, useDrag } from 'vue3-dnd';
import { debounce } from 'radash';

const props = defineProps<{
    id: string;
    name: string;
    url: string;
    img: string;
    index: number;
}>();

const siteStore = useSiteStore();
const { moveSiteItem } = siteStore;

const [collect, drag] = useDrag(() => ({
    type: 'siteList',
    item: () => ({
        id: props.id,
        originId: props.id
    }),
    collect: (monitor) => {
        return {
            isDragging: monitor.isDragging()
        };
    },
    end: (item, monitor) => {
        const { id: droppedId, originId } = item;
        const didDrop = monitor.didDrop();

        if (!didDrop) {
            moveSiteItem(droppedId, originId);
        }
    }
}));

const [, drop] = useDrop(() => ({
    accept: 'siteList',
    hover: debounce({ delay: 100 }, ({ id: draggedId }: any) => {
        if (draggedId !== props.id) {
            moveSiteItem(draggedId, props.id);
        }
    })
}));

const opacity = computed(() => {
    return collect.value.isDragging ? 0 : 1;
});

function refNode() {
    return (node: VNodeRef) => drag(drop(node)) as Ref<VNodeRef>;
}
</script>

<template>
    <div
        :class="style['site-item']"
        :ref="refNode()"
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

<style module="style">
.site-item {
    @apply col-span-1 row-span-1 flex select-none justify-center overflow-hidden rounded-xl bg-red-300 p-2 drop-shadow-2xl;
}
</style>
