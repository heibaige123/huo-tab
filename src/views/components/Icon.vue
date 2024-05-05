<script setup lang="ts">
import { Icon, addCollection } from '@iconify/vue';
import { icons } from '@/assets/svg';

interface Props {
    className?: string;
    icon?: string;
}

// 注册自定义图标集
addCollection(icons);

withDefaults(defineProps<Props>(), {
    icon: 'mdi-light:home',
    className: 'w-9 h-9 font-medium text-red-400'
});
</script>

<template>
    <Icon
        :icon="icon"
        :class="className"
    />
</template>
