<script setup>
// Контейнер, содержащий меню игры и таймер

import MathTestHandler from './MathTestHandler.vue'
import TestResults from './TestResults.vue'
import TestTimer from './TestTimer.vue'

import { inject, provide, ref } from 'vue'

const _game_session = inject('_game_session')
const _show_game_timer = inject('_show_game_timer')

const _remaining_time = ref(_game_session.time)
const _show_start_button = ref(true)
const _game_end = ref(true)

const _answer_input = ref(0)

provide('_remaining_time', _remaining_time)
provide('_game_end', _game_end)
provide('_show_start_button', _show_start_button)
provide('_answer_input', _answer_input)

</script>

<template>
  <section
    class="container flex flex-col items-center h-full my-6 p-1 md:p-3 rounded-box border bg-base-300 w-5/6 "
  >
    <TestTimer v-if="_show_game_timer" />
    <div
      class="flex justify-center items-center w-1/6 h-3xs text-sm md:w-1/6 md:h-5xs lg:w-1/6 rounded-box border-primary/25"
      v-else
    >
      <span class="font-light text-primary/80 text-lg md:text-4xl font-timer">
        <span> </span>
      </span>
    </div>
    <MathTestHandler />
    <TestResults />
  </section>
</template>

<style scoped></style>
