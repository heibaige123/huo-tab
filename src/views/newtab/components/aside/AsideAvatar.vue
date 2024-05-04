<script setup lang="ts">
import { useUserStore } from '@/stores';
import { computed } from 'vue';

const { userInfo } = useUserStore();

const avatar = computed(() => `url(${userInfo.avatar})`);
</script>

<template>
    <div class="flex items-center justify-center w-full">
        <div class="avatar bg-no-repeat bg-cover"></div>
    </div>
</template>

<style scoped>
.avatar {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background-color: aquamarine;
    background-image: v-bind(avatar);
}
</style>
