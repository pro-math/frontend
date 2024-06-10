<script setup>
import AppFooter from '@/components/footer/AppFooter.vue'
import AppHeader from '@/components/header_components/AppHeader.vue'
import { provide } from 'vue'
import { RouterView } from 'vue-router'

import { useThemeStore } from '@/stores/current_theme_store'

const storeTheme = useThemeStore()

const databaseUrl = 'https://4368-83-171-69-39.ngrok-free.app/api/v1/'
provide('databaseUrl', databaseUrl)
</script>

<template>
  <div :data-theme="storeTheme.currentTheme">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
