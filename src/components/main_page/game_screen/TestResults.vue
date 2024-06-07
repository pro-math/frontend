<script setup>

//Результаты игровой сессии

import { inject } from 'vue';

const _game_session = inject('_game_session')
</script>

<template>
  <div class="flex flex-col w-full lg:flex-row m-6">
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-xs md:text-lg">Процент</span>
      <p class="font-bold text-xs md:text-2xl" v-if="_game_session.correct_answers != 0">{{ Math.round(_game_session.correct_answers / (_game_session.correct_answers + _game_session.wrong_answers) * 100) }}%</p>
      <p class="font-bold text-xs md:text-2xl" v-else>0%</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-xs md:text-lg">Правильно</span>
      <p class=" text-dark-green font-bold text-xs md:text-2xl">{{ _game_session.correct_answers }}</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center text-xs md:text-lg">Неправильно</span>
      <p class="text-dark-red  font-bold text-xs md:text-2xl">{{ _game_session.wrong_answers }}</p>
    </div>
  </div>
</template>

<style scoped></style>
