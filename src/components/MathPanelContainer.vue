<script setup>
import TestTimer from './TestTimer.vue'
import MathTestHandler from './MathTestHandler.vue'
import TestResults from './TestResults.vue'

import { inject, ref } from 'vue'

const mathTestHandlerRef = ref(null)
const _show_game_timer = inject('_show_game_timer')
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
    <MathTestHandler ref="mathTestHandlerRef" />
    <TestResults />
  </section>
</template>

<style scoped></style>
