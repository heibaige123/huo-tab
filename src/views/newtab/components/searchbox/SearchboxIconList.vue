<script setup lang="ts">
import { Icon } from '@/views/components';
import { useSearchboxStore } from '@/stores';
import { storeToRefs } from 'pinia';

const searchboxStore = useSearchboxStore();
const { searchServerList, setSearchServerId } = searchboxStore;
const { searchServerId } = storeToRefs(searchboxStore);
</script>

<template>
    <div class="absolute mt-1 w-full select-none rounded-3xl bg-zinc-100 p-3">
        <ul class="grid gap-1">
            <template
                v-for="item in searchServerList"
                :key="item.id"
            >
                <li
                    :class="[
                        'flex cursor-pointer items-center rounded-xl p-2',
                        {
                            'bg-pink-200': searchServerId === item.id
                        }
                    ]"
                    @click="setSearchServerId(item.id)"
                >
                    <div class="h-10 w-10 rounded-md bg-teal-100 p-1">
                        <Icon
                            :icon="item.icon"
                            class-name="size-full"
                        />
                    </div>
                    <div class="ml-2 text-lg">
                        {{ item.name }}
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<style scoped></style>
