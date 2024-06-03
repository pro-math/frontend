<script setup>
import MathPanelContainer from './MathPanelContainer.vue'
import MathNavigationBar from './MathNavigationBar.vue'
import StartGameButton from './StartGameButton.vue'

import { provide, reactive, ref } from 'vue'

const _game_session = reactive({
  operations: 'all',
  difficulty: 10,
  time: 0,
  levels_count: 0,
  correct_answers: 0,
  wrong_answers: 0
})

const examplesListGenerationRef = ref(null)

function registerExamplesListGeneration(fn) {
  examplesListGenerationRef.value = fn
}

provide('_game_session', _game_session)

const _show_game_timer = ref(false)

function startGame() {
  if (examplesListGenerationRef.value) {
    examplesListGenerationRef.value()
  } else {
    console.error('Функция во внучатом компоненте не зарегистрирована')
  }
  if (_game_session.time != 0) {
    _show_game_timer.value = true
  }
}
provide('registerExamplesListGeneration', registerExamplesListGeneration)
provide('_show_game_timer', _show_game_timer)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <MathNavigationBar />
    <MathPanelContainer />
    <StartGameButton @startGame="startGame" />
  </main>
</template>

<style scoped></style>
