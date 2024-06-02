<script setup>
import MathPanelContainer from './MathPanelContainer.vue'
import MathNavigationBar from './MathNavigationBar.vue'
import StartGameButton from './StartGameButton.vue'

import { provide, reactive, ref } from 'vue'

const _game_session = reactive({
  operations: 'all',
  difficulty: 10,
  time: 30,
  levels_count: 10,
  correct_answers: 0,
  wrong_answers: 0
})


provide('_game_session', _game_session)
const _show_game_timer = ref(false)
function showTimer () {
  _show_game_timer.value = true
}
provide('_show_game_timer', _show_game_timer)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <MathNavigationBar />
    <MathPanelContainer />
    <StartGameButton @showTimer="showTimer"/>
  </main>
</template>

<style scoped></style>
