<script setup>
import AppFooter from '@/components/footer/AppFooter.vue'
import AppHeader from '@/components/header_components/AppHeader.vue'
import { ref, onMounted, provide } from 'vue';
import { RouterView } from 'vue-router'
import Modal from '@/components/ModalWindow.vue';

import { useThemeStore } from '@/stores/current_theme_store'

const storeTheme = useThemeStore()

const databaseUrl = 'https://6c2f-176-59-11-211.ngrok-free.app/api/v1/'
provide('databaseUrl', databaseUrl)

const isModalVisible = ref(false);

const isAndroid = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  return /android/i.test(userAgent);
};

onMounted(() => {
  if (isAndroid()) {
    isModalVisible.value = true;
  }
});
</script>

<template>
  <div :data-theme="storeTheme.currentTheme" class="flex flex-col min-h-screen">
    <Modal :showModal="isModalVisible" />
    <AppHeader />
    <RouterView class="grow"/>
    <AppFooter />
  </div>
</template>
