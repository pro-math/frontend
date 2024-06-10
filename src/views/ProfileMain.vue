<script setup>
//Контейнер, содержаший персональную информацию и рейтинг

import PersonalInfo from '@/components/profile_page/PersonalInfo.vue'
import RatingContainer from '@/components/profile_page/RatingContainer.vue'

import { useCurrentUserStore } from '@/stores/current_user_store'
import axios from 'axios'
import { provide, reactive, ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

const storeUser = useCurrentUserStore()
const router = new useRouter()

const _rating_list = ref([])
const _progress_list = ref([])
const _achievements_list = ref([])
const _chart_label = ref('')
const _all_achievements_list = ref([])
const _data_loaded = ref(false)
const _limit = ref(10)
const _dates = ref([])
const _stats = ref([])
// const _current_component = ref('RatingNavigationBar');
// provide('_current_component', _current_component)
onBeforeMount( () => {
  _limit.value = 10
})

provide('_dates', _dates)
provide('_stats', _stats)
provide('_data_loaded', _data_loaded)
const _rating_settings = reactive({
  operations: ['+'],
  difficulty: 10,
  game_mode: 'count_mode',
  time: 0,
  levels_count: 10,
  correct_answers: 0,
  wrong_answers: 0
})
async function getChartData() {
  try {
    _data_loaded.value = false
    _dates.value = []
    _stats.value = []
    let difficulty =
      _rating_settings.levels_count != 0 ? _rating_settings.levels_count : _rating_settings.time
    let params = new URLSearchParams()
    params.append('game_mode', _rating_settings.game_mode)
    params.append('examples_category', _rating_settings.difficulty)
    params.append('difficulty', difficulty)
    for (let operation of _rating_settings.operations) {
      params.append('math_operations', operation)
    }
    let request = {
      params: params,
      headers: {
        Authorization: 'Bearer ' + storeUser.accessToken,
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    }

    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .get(import.meta.env.VITE_BASE_URL + 'chart/me', request)
      .then(function (response) {
        if (response.status === 200) {
          _progress_list.value = response.data
          _data_loaded.value = true
        } else {
        }
      })
      .catch(function (error) {
      })
  } catch (error) {
  }
}
async function getUserRating() {
  try {
    let difficulty =
      _rating_settings.levels_count != 0 ? _rating_settings.levels_count : _rating_settings.time
    let params = new URLSearchParams()
    params.append('game_mode', _rating_settings.game_mode)
    params.append('examples_category', _rating_settings.difficulty)
    params.append('difficulty', difficulty)
    for (let operation of _rating_settings.operations) {
      params.append('math_operations', operation)
    }
    params.append('limit', _limit.value)
    params.append('offset', 0)

    let request = {
      params: params,
      headers: {
        Authorization: 'Bearer ' + storeUser.accessToken,
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    }

    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .get(import.meta.env.VITE_BASE_URL + 'ratings/me', request)
      .then(function (response) {
        if (response.status === 200) {
          _rating_list.value = response.data
        } else {
        }
      })
      .catch(function (error) {
      })
  } catch (error) {
  }
}

async function getUserAchievements() {
  try {
    let request = {
      headers: {
        Authorization: 'Bearer ' + storeUser.accessToken,
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    }
    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .get(import.meta.env.VITE_BASE_URL + 'achievements/me', request)
      .then(function (response) {
        if (response.status === 200) {
          _achievements_list.value = response.data
        } else {
        }
      })
      .catch(function (error) {
      })
  } catch (error) {
  }
}

async function getAllAchievements() {
  try {
    let request = {
      headers: {
        Authorization: 'Bearer ' + storeUser.accessToken,
        'Content-Type': 'application/json',
        accept: 'application/json'
      }
    }
    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .get(import.meta.env.VITE_BASE_URL + 'achievements', request)
      .then(function (response) {
        if (response.status === 200) {
          _all_achievements_list.value = response.data
        } else {
        }
      })
      .catch(function (error) {
      })
  } catch (error) {
  }
}

function unLog() {
  storeUser.changeLoggedState()
  storeUser.changeUsername('')
  storeUser.changeAccessToken('')
  router.push('/')
}


provide('_rating_settings', _rating_settings)
provide('_rating_list', _rating_list)
provide('_progress_list', _progress_list)
provide('_achievements_list', _achievements_list)
provide('_all_achievements_list', _all_achievements_list)
provide('getUserRating', getUserRating)
provide('getChartData', getChartData)
provide('_chart_label', _chart_label)
provide('getUserAchievements', getUserAchievements)
provide('getAllAchievements', getAllAchievements)
provide('_limit', _limit)
provide('unLog', unLog)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <div class="flex container items-center justify-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <PersonalInfo />
      <!-- <ProfileNavigation /> -->
      <RatingContainer />
    </div>
  </main>
</template>
