<script setup lang="ts">
import { useUserStore } from '@/stores';
import { computed } from 'vue';

const { userInfo } = useUserStore();

const avatar = computed(() => `url(${userInfo.avatar})`);
</script>

<template>
    <div class="flex w-full items-center justify-center">
        <div class="avatar bg-cover bg-no-repeat"></div>
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
