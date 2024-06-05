<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/header_components/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue';

</script>

<template>
    <AppHeader />
    <RouterView />
    <AppFooter />
</template>
