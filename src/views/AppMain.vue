<script setup>
//Основной родительский компонент для страницы с игрой

import MathNavigationBar from '@/components/main_page/game_screen/MathNavigationBar.vue'
import MathPanelContainer from '@/components/main_page/game_screen/MathPanelContainer.vue'

import { provide, reactive, ref } from 'vue'

const _game_session = reactive({
  operations: ['+'],
  difficulty: 10,
  game_mode: 'count_mode',
  time: 0,
  levels_count: 10,
  correct_answers: 0,
  wrong_answers: 0
})
const _show_game_timer = ref(false)
const _enable_menu = ref(true)
provide('_enable_menu', _enable_menu)
provide('_game_session', _game_session)
provide('_show_game_timer', _show_game_timer)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <MathNavigationBar />
    <MathPanelContainer />
  </main>
</template>

<style scoped></style>
