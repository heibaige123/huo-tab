<script setup lang="ts">
import AsideMenuList from './AsideMenuList.vue';
import AsideSetting from './AsideSetting.vue';
</script>

<template>
    <div class="container">
        <div class="content">
            <div class="content-inner">
                <AsideMenuList />
            </div>
        </div>
        <AsideSetting />
    </div>
</template>

<style scoped>
.container {
    position: relative;
    display: flex;
    /* overflow: hidden; */
    height: 100%;
    min-height: 200px;
    max-height: 100vh;
    flex-direction: column;
    padding-left: 8px;
    cursor: pointer;
}

.content {
    position: relative;
    z-index: 1;
    display: flex;
    width: 64px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
}

.content-inner {
    width: 64px;
}
</style>
