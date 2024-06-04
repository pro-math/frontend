<script setup>
import { inject } from 'vue'
const _game_session = inject('_game_session')
</script>

<template>
  <div class="flex flex-col w-full lg:flex-row m-6">
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Процент</span>
      <p class="text-2xl font-bold" v-if="_game_session.correct_answers != 0">{{ Math.round(_game_session.correct_answers / (_game_session.correct_answers + _game_session.wrong_answers) * 100) }}%</p>
      <p class="text-2xl font-bold" v-else>0%</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Правильно</span>
      <p class="text-dark-green font-bold text-2xl">{{ _game_session.correct_answers }}</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Неправильно</span>
      <p class="text-dark-red font-bold text-2xl">{{ _game_session.wrong_answers }}</p>
    </div>
  </div>
</template>

<style scoped></style>
