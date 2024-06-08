<script setup>
//Контейнер, содержащий меню настройки таблицы результатов и саму таблицу результатов

import { provide, ref } from 'vue'
import RatingNavigationBar from './RatingNavigationBar.vue'
import RatingTable from './RatingTable.vue'

const ratingList = ref([])
provide('ratingList', ratingList)

// const _game_session = inject('_game_session')
</script>

<template>
  <section class="flex items-center justify-center grow p-6 flex-col">
    <div>
      <p class="font-bold text-xl text-secondary-content my-2">ВАШ РЕЙТИНГ</p>
    </div>
    <RatingNavigationBar />
    <RatingTable />
    <p class="w-1/6 p-2 border border-primary text-center cursor-pointer" @click="getUserRating">
      Показать ещё
    </p>
  </section>
</template>
