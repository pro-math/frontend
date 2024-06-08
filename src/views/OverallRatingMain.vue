<script setup>
import OverallRatingNavigationBar from '@/components/overall_rating/OverallRatingNavigationBar.vue'
import OverallRatingTable from '@/components/overall_rating/OverallRatingTable.vue'
import axios from 'axios'
import { inject, provide, reactive, ref } from 'vue'

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
const _limit = ref(10)
const _offset = ref(0)

provide('_limit', _limit)
provide('_offset', _offset)
provide('_rating_list', _rating_list)
provide('_rating_settings', _rating_settings)

async function getOverallRating() {
  try {
    let params = new URLSearchParams()
    params.append('game_mode', _rating_settings.game_mode)
    params.append('examples_category', _rating_settings.difficulty)
    params.append('limit', _limit.value)
    params.append('offset', _offset.value)
    for (let operation of _rating_settings.operations) {
      params.append('math_operations', operation)
    }

    let request = {
      params: params
    }

    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .get(databaseUrl + 'ratings', request)
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

provide('getOverallRating', getOverallRating)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <div class="flex container items-center justify-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <OverallRatingNavigationBar />
      <OverallRatingTable />
    </div>
  </main>
</template>
