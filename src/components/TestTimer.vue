<script setup>
import { ref, onMounted, inject } from 'vue'
const _game_session = inject('_game_session')

const _remaining_time = ref(_game_session.time)
const _timer = ref(0)

function changeValue(newValue) {
  if (_timer.value) {
    _timer.value.style.setProperty('--value', newValue)
  }
}

function startTimer() {
  if (_remaining_time.value >= 0) {
    setInterval(() => {
      _remaining_time.value -= 1
      changeValue(_remaining_time.value)
    }, 1000)
  }
}

onMounted(() => {
  changeValue(_remaining_time.value)
  // console.log(_game_session.time)
  startTimer()
})
</script>

<template>
  <div class="flex justify-end items-center w-full text-3xl">
    <span
      class="countdown bodrered text-3xl max-sm:text-xl rounded-full bg-secondary text-center p-4 border-2 border-drak-grey text-dark-grey mx-2"
    >
      <span ref="_timer" style=""></span>
    </span>
  </div>
</template>

<style></style>
