<script setup>
import AppFooter from '@/components/footer/AppFooter.vue'
import AppHeader from '@/components/header_components/AppHeader.vue'
import { provide } from 'vue'
import { RouterView } from 'vue-router'

import { useThemeStore } from '@/stores/current_theme_store'

const storeTheme = useThemeStore()

const databaseUrl = 'https://c6d8-176-59-7-67.ngrok-free.app/v1/'
provide('databaseUrl', databaseUrl)
</script>

<template>
  <div :data-theme="storeTheme.currentTheme">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
