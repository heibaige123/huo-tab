<script setup lang="ts">
import SiteItem from './SiteItem.vue';
import { useMenuStore, useSiteStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useDrop } from 'vue3-dnd';

const siteStore = useSiteStore();
const menuStore = useMenuStore();

const { siteMap } = siteStore;
const { selectMenuItemId } = storeToRefs(menuStore);

const siteList = computed(() => {
    return siteMap[selectMenuItemId.value];
});

const [, drop] = useDrop(() => ({
    accept: 'siteList'
}));
</script>

<template>
    <div
        class="grid auto-rows-auto grid-cols-12 gap-5 px-60 pb-96"
        :ref="drop"
    >
        <template
            v-for="(item, index) in siteList"
            :key="item.id"
        >
            <SiteItem
                v-bind="item"
                :index="index"
            />
        </template>
    </div>
</template>

<style scoped></style>
