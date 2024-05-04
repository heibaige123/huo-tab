<script setup lang="ts">
import { onMounted } from 'vue';

console.log('App.vue');

onMounted(() => {
    const d = document.getElementById('yy');
    d?.style.setProperty('color', 'red');
});
</script>

<template>
    <div id="yy">测试</div>
</template>

<style scoped></style>
