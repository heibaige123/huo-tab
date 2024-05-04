<script setup lang="ts">
import Aside from './aside/Aside.vue';
import Main from './main/Main.vue';
import Searchbox from './searchbox/Searchbox.vue';
</script>

<template>
    <div class="h-screen flex justify-between">
        <div class="flex-grow-0 bg-yellow-800">
            <Aside />
        </div>
        <div class="flex flex-col flex-grow">
            <div class="h-72">
                <Searchbox />
            </div>
            <div class="">
                <Main />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
