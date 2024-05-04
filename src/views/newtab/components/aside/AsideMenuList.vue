<script setup lang="ts">
import AsideAdd from './AsideAdd.vue';
import AsideAvatar from './AsideAvatar.vue';
import AsideMenu from './AsideMenu.vue';
</script>

<template>
    <div class="aside-inner">
        <AsideAvatar />
        <div class="divider"></div>

        <AsideMenu />

        <div class="divider"></div>
        <AsideAdd />
    </div>
</template>

<style scoped>
.aside-inner {
    padding: 10px 6px;
    border-radius: 16px;
    background-color: #f9f9f9;
    cursor: pointer;
}

.divider {
    border-top-width: 2px;
    border-bottom-width: 0px;
    margin: 10px 0;
}

.menu-inner-2 {
    position: relative;
    right: -100%;
}
</style>
