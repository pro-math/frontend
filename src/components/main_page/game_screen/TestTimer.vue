<script setup>

//Таймер

import { ref, onMounted, inject, provide } from 'vue'

const _game_session = inject('_game_session')

const _show_game_timer = inject('_show_game_timer')

const _game_finished = inject('_game_finished')

const _remaining_time = ref(_game_session.time)

const _timer = ref(0)

function changeValue(newValue) {
  if (_timer.value) {
    _timer.value.style.setProperty('--value', newValue)
  }
}

function startBasicTimer() {

  setInterval(() => {
    if (_remaining_time.value > 0) {
      _remaining_time.value -= 1
      changeValue(_remaining_time.value)
    } else if (_remaining_time.value == 0) {
      _show_game_timer.value = false
      _game_finished.value = true
    }
  }, 1000)
}

function startReversedTimer() {
  setInterval(() => {
    _remaining_time.value += 1
    changeValue(_remaining_time.value)
  }, 1000)
}

function stopTimer() {
  if (_remaining_time.value == 0) {
    _show_game_timer.value = false
  }
}

provide('stopTimer', stopTimer)

onMounted(() => {
  changeValue(_remaining_time.value)

  if (_game_session.levels_count == 0) {
    startBasicTimer()
  } else if (_game_session.levels_count != 0) {
    startReversedTimer()
  }
})
</script>

<template>
  <div class="flex justify-end items-center w-full text-3xl h-5xs">
    <span
      class="countdown bodrered text-3xl max-sm:text-xl rounded-full bg-primary text-center p-4 border-2 border-drak-grey text-dark-grey mx-2"
    >
      <span ref="_timer"></span>
    </span>
  </div>
</template>

<style></style>
