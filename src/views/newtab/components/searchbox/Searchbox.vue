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
    <div class="bg-red-100 h-full flex justify-center items-center flex-col">
        <div class="min-w-[700px] relative">
            <div class="bg-zinc-300 h-16 px-2 flex rounded-3xl">
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
