<script setup lang="ts">
import SiteItem from './SiteItem.vue';
import { useSiteStore } from '@/stores';
import { storeToRefs } from 'pinia';
import Sortable from '@/drag/Sortable';
import { onMounted, ref } from 'vue';

const siteStore = useSiteStore();
const { currentSiteList: siteList } = siteStore;
const { isDragging } = storeToRefs(siteStore);

const dragContainerRef = ref();

console.log('--', Sortable);

onMounted(() => {
    Sortable.create(dragContainerRef.value, {
        animation: 150,
        onStart() {
            isDragging.value = true;
            console.log('start');
        },
        onUpdate() {
            console.log('update');
        },
        onSort() {
            console.log('sort');
        },
        onChange({ newIndex, oldIndex }) {
            console.log('change', newIndex, oldIndex);
        },
        onChoose(q) {
            console.log('choose', q);
        },
        onUnchoose() {
            console.log('dragover');
            isDragging.value = false;
        }
    });
});
</script>

<template>
    <div
        class="grid auto-rows-auto grid-cols-6 gap-5 px-60 pb-96"
        ref="dragContainerRef"
    >
        <template
            v-for="item in siteList"
            :key="item.id"
        >
            <SiteItem v-bind="item" />
        </template>
    </div>
</template>

<style scoped></style>
