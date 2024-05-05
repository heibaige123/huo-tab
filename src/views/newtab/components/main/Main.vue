<script setup lang="ts">
import SiteList from './SiteList.vue';
import { DndProvider } from 'vue3-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
</script>

<template>
    <div class="h-full overflow-y-auto pt-[20vh]">
        <div class="size-full">
            <DndProvider :backend="HTML5Backend">
                <SiteList />
            </DndProvider>
        </div>
    </div>
</template>

<style scoped></style>
