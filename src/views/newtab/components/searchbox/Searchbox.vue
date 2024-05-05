<script setup lang="ts">
import SearchboxIcon from './SearchboxIcon.vue';
import SearchboxInput from './SearchboxInput.vue';
import SearchboxIconList from './SearchboxIconList.vue';
import { storeToRefs } from 'pinia';
import { useSearchboxStore } from '@/stores';

const searchboxStore = useSearchboxStore();
const { isShowSearchServerList } = storeToRefs(searchboxStore);
</script>

<template>
    <div class="flex h-full flex-col items-center justify-center">
        <div class="relative min-w-[700px]">
            <div class="flex h-16 rounded-3xl bg-zinc-300 px-2">
                <div class="flex-grow-0 self-center">
                    <SearchboxIcon />
                </div>
                <div class="flex-grow">
                    <SearchboxInput />
                </div>
            </div>

            <SearchboxIconList v-if="isShowSearchServerList" />
        </div>
    </div>
</template>

<style scoped></style>
