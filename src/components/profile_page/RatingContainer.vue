<script setup>
//Контейнер, содержащий меню настройки таблицы результатов и саму таблицу результатов

import AchievementsContainer from '@/components/profile_page/AchievmentsContainer.vue'
import LineChart from '@/components/profile_page/LineChart.vue'
import { inject } from 'vue'
import RatingNavigationBar from './RatingNavigationBar.vue'
import RatingTable from './RatingTable.vue'

const _data_loaded = inject('_data_loaded')
const getUserRating = inject('getUserRating')
const _limit = inject('_limit')
function getMoreData() {
  _limit.value += 10
  getUserRating()
}
// const _game_session = inject('_game_session')
</script>

<template>
  <section class="flex items-center justify-center grow p-6 flex-col">
    <div>
      <p class="text-3xl pr-6 text-center text-base-content my-3">ВАШ РЕЙТИНГ</p>
    </div>
    <RatingNavigationBar />
    <div
      class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs"
      v-if="_data_loaded"
    >
      <LineChart />
    </div>
    <div
      class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs skeleton"
      v-else
    ></div>
    <div
      class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs"
      v-if="_data_loaded"
      @scrollend="getMoreData()"
    >
      <RatingTable />
    </div>
    <div
      class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs skeleton"
      v-else
    ></div>
    <section class="flex flex-col items-center w-full">
      <p class="text-3xl pr-6 text-center text-base-content my-3">ДОСТИЖЕНИЯ</p>
      <div class="w-full flex flex-wrap bg-base-300 p-6 gap-4 pl-14 rounded-box justify-center" v-if="_data_loaded">
        <AchievementsContainer />
      </div>
      <div class="w-full flex flex-wrap bg-base-300 p-6 gap-4 pl-14 rounded-box skeleton" v-else></div>
    </section>
  </section>
</template>