<script setup lang="ts">
import { useSearchboxStore } from '@/stores';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const searchWord = ref('');

const searchboxStore = useSearchboxStore();
const { currentSearchServer } = storeToRefs(searchboxStore);

function handleSearch() {
    const urlPrefix = currentSearchServer.value?.urlPrefix;

    if (!urlPrefix) {
        console.error('No search server selected');
        return;
    }

    const url = urlPrefix + encodeURIComponent(searchWord.value);
    window.open(url, '_blank');
}
</script>

<template>
    <div class="mx-2 h-full py-2">
        <input
            class="size-full bg-orange-50 px-2 text-2xl font-medium outline-none"
            v-model="searchWord"
            @keyup.enter="handleSearch"
        />
    </div>
</template>

<style scoped></style>
