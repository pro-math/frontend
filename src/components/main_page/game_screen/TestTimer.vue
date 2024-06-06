<script setup>
//Таймер

import { ref, onMounted, onUpdated, inject} from 'vue'

const _game_session = inject('_game_session')

const _show_game_timer = inject('_show_game_timer')

const _game_finished = inject('_game_finished')

const _game_end = inject('_game_end')

const _remaining_time = inject('_remaining_time')

const _show_start_button = inject('_show_Start_button')

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


onMounted(() => {
  changeValue(_remaining_time.value)

  if (_game_session.levels_count == 0) {
    startBasicTimer()
  } else if (_game_session.levels_count != 0) {
    startReversedTimer()
  }
})

onUpdated(() => {
  if ((_remaining_time.value == 0) && (_game_session.time > 0)) {
    _show_game_timer.value = false
    _show_start_button.value = true
    _game_end.value = true
  }
})
</script>

<template>
  <div class="flex justify-center items-center w-1/6 h-3xs text-sm md:w-1/6 md:h-5xs lg:w-1/6 rounded-box border border-primary/25 ">
    <span
      class="font-light text-primary/80 text-lg md:text-4xl font-timer "
    >
      <span ref="_timer"></span>
    </span>
  </div>
</template>

<style></style>
