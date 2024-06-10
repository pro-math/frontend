<script setup>
import AppFooter from '@/components/footer/AppFooter.vue'
import AppHeader from '@/components/header_components/AppHeader.vue'
import { ref, onMounted } from 'vue';
import { RouterView } from 'vue-router'
import Modal from '@/components/ModalWindow.vue';

import { useThemeStore } from '@/stores/current_theme_store'

const storeTheme = useThemeStore()


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
