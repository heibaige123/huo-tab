<script setup lang="ts">
import { Icon } from '@/views/components';
import { useSearchboxStore } from '@/stores';
import { storeToRefs } from 'pinia';

const searchboxStore = useSearchboxStore();
const { searchServerList, setSearchServerId } = searchboxStore;
const { searchServerId } = storeToRefs(searchboxStore);
</script>

<template>
    <div class="bg-zinc-100 absolute rounded-3xl p-3 mt-1 w-full select-none">
        <ul class="grid gap-1">
            <template v-for="item in searchServerList" :key="item.id">
                <li
                    :class="[
                        'flex cursor-pointer items-center p-2 rounded-xl',
                        {
                            'bg-pink-200': searchServerId === item.id
                        }
                    ]"
                    @click="setSearchServerId(item.id)"
                >
                    <div class="w-10 h-10 p-1 bg-teal-100 rounded-md">
                        <Icon :icon="item.icon" class-name="size-full" />
                    </div>
                    <div class="text-lg ml-2">
                        {{ item.name }}
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<style scoped></style>
