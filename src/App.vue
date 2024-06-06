<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/header_components/AppHeader.vue'
import AppFooter from './components/footer/AppFooter.vue'

import { useThemeStore } from '@/stores/current_theme_store'
const storeTheme =  useThemeStore()
</script>

<template>
  <div :data-theme="storeTheme.currentTheme">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
