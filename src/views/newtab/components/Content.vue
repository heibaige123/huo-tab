<script setup lang="ts">
import Aside from './aside/Aside.vue';
import Main from './main/Main.vue';
import Searchbox from './searchbox/Searchbox.vue';
</script>

<template>
    <div class="flex h-screen justify-between">
        <div class="flex-grow-0 bg-yellow-800">
            <Aside />
        </div>
        <div class="relative flex-grow">
            <div class="fixed z-10 h-[25vh] w-full">
                <Searchbox />
            </div>
            <div class="absolute bottom-0 left-0 right-0 top-0">
                <Main />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
