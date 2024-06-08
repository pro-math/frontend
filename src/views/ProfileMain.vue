<script setup>
//Контейнер, содержаший персональную информацию и рейтинг

import PersonalInfo from '@/components/profile_page/PersonalInfo.vue'
import RatingContainer from '@/components/profile_page/RatingContainer.vue'

import { useCurrentUserStore } from '@/stores/current_user_store'
import axios from 'axios'
import { inject, provide, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const storeUser = useCurrentUserStore()
const router = new useRouter()
const databaseUrl = inject('databaseUrl')

const _rating_list = ref([])
const _rating_settings = reactive({
  operations: ['+'],
  difficulty: 10,
  game_mode: 'count_mode',
  time: 0,
  levels_count: 10,
  correct_answers: 0,
  wrong_answers: 0
})

async function getUserRating() {
  try {
    let params = new URLSearchParams()
    params.append('game_mode', _rating_settings.game_mode)
    params.append('examples_category', _rating_settings.difficulty)
    params.append('limit', 10)
    params.append('offset', 0)
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
      .get(databaseUrl + 'ratings/me', request)
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          console.log('Data received')
          console.log(response.data)
          _rating_list.value = response.data
        } else {
          console.error('Data failed')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  } catch (error) {
    console.error('Error during receiveing:', error)
  }
}

function unLog() {
  storeUser.changeLoggedState()
  storeUser.changeUsername('')
  router.push('/')
}

provide('_rating_settings', _rating_settings)
provide('_rating_list', _rating_list)
provide('getUserRating', getUserRating)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <div class="flex container items-center justify-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <PersonalInfo />
      <RatingContainer />
      <button @click="unLog">ВЫХОД</button>
    </div>
  </main>
</template>
