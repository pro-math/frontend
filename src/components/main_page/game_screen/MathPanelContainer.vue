<script setup>
// Контейнер, содержащий меню игры и таймер

import TestTimer from './TestTimer.vue'
import MathTestHandler from './MathTestHandler.vue'
import TestResults from './TestResults.vue'

import { inject, ref, provide } from 'vue'

const _game_session = inject('_game_session')
const _show_game_timer = inject('_show_game_timer')

const _remaining_time = ref(_game_session.time)
const _show_start_button = ref(true)
const _game_end = ref(true)

provide('_remaining_time', _remaining_time)
provide('_game_end', _game_end)
provide('_show_start_button', _show_start_button)
</script>

<template>
  <section class="flex flex-col items-center h-full my-6 p-3 rounded-md border bg-base-300 w-5/6">
    <TestTimer v-if="_show_game_timer" />
    <div class="flex justify-end items-center w-full text-3xl h-5xs" v-else>
      <span
        class="countdown hidden bodrered text-3xl max-sm:text-xl rounded-full bg-primary text-center p-4 border-2 border-drak-grey text-dark-grey mx-2"
      >
        <span> </span>
      </span>
    </div>
    <MathTestHandler />
    <TestResults />
  </section>
</template>

<style scoped></style>
