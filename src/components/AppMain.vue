<script setup>
import MathPanelContainer from './MathPanelContainer.vue'
import MathNavigationBar from './MathNavigationBar.vue'
import StartGameButton from './StartGameButton.vue'
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <MathNavigationBar />
    <MathPanelContainer />
    <StartGameButton />
  </main>
</template>

<style scoped></style>
