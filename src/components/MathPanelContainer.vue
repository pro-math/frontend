<script setup>
import TestTimer from './TestTimer.vue'
import MathTestHandler from './MathTestHandler.vue'
import TestResults from './TestResults.vue'

import {inject} from 'vue'

const _show_game_timer = inject('_show_game_timer')
</script>

<template>
  <section class="flex flex-col items-center h-full my-6 p-3 rounded-md border bg-base-300 w-5/6">
    <TestTimer v-if="_show_game_timer"/>
    <MathTestHandler />
    <TestResults />
  </section>
</template>

<style scoped></style>
