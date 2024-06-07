<script setup>
//Таймер

import { inject, onMounted, onUpdated } from 'vue';

const _game_session = inject('_game_session')
const _show_game_timer = inject('_show_game_timer')
const _game_end = inject('_game_end')
const _remaining_time = inject('_remaining_time')
const _show_start_button = inject('_show_start_button')
const _answer_input = inject('_answer_input')


function startBasicTimer() {
  _remaining_time.value = _game_session.time
  let timer = setInterval(() => {
    if (_remaining_time.value > 0) {
      _remaining_time.value -= 1
    }
    if (_game_end.value) {
      _show_game_timer.value = false
      clearInterval(timer)
    }
  }, 1000)
}


function startReversedTimer() {
  _remaining_time.value = 0
  let timer = setInterval(() => {
    _remaining_time.value += 1
    if (_game_end.value) {
      clearInterval(timer)
    }
  }, 1000)
}


onMounted(() => {
  // startReversedTimer()
  if (_game_session.game_mode == 'time_mode') {
    startBasicTimer()
  } else if (_game_session.game_mode == 'count_mode') {
    startReversedTimer()
  }
})

onUpdated(() => {
  if (_remaining_time.value == 0 && _game_session.time > 0) {
    _show_game_timer.value = false
    _remaining_time.value = _game_session.time
    _answer_input.value = ''
    _show_start_button.value = true
    _game_end.value = true
  }
})
</script>

<template>
  <div
    class="flex justify-center items-center w-1/6 h-3xs text-sm md:w-1/6 md:h-5xs lg:w-1/6 rounded-box border border-primary/25"
  >
    <span class="font-light text-primary/80 text-lg md:text-4xl font-timer">
      <span>{{ _remaining_time }}</span>
    </span>
  </div>
</template>

<style></style>
