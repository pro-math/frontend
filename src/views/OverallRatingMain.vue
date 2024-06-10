<script setup>
import OverallRatingNavigationBar from '@/components/overall_rating/OverallRatingNavigationBar.vue'
import OverallRatingTable from '@/components/overall_rating/OverallRatingTable.vue'
import axios from 'axios'
import { onMounted } from 'vue';
import { inject, provide, reactive, ref, onBeforeMount } from 'vue'

const databaseUrl = inject('databaseUrl')

const _rating_list = ref([])
const _all_rating_data_received = ref(false)
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


onMounted(()=>{
  _limit.value = 10
})
provide('_limit', _limit)
provide('_offset', _offset)
provide('_rating_list', _rating_list)
provide('_rating_settings', _rating_settings)


async function getOverallRating() {
  _limit.value += 10
  // console.log(_rating_settings)
  _all_rating_data_received.value = false
  try {
    let difficulty =
      _rating_settings.levels_count != 0 ? _rating_settings.levels_count : _rating_settings.time
    let params = new URLSearchParams()
    params.append('game_mode', _rating_settings.game_mode)
    params.append('examples_category', _rating_settings.difficulty)
    params.append('difficulty', difficulty)
    params.append('limit', _limit.value)
    params.append('offset', _offset.value)
    for (let operation of _rating_settings.operations) {
      params.append('math_operations', operation)
    }
    console.log(params)

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
          console.log(response)
          _rating_list.value = response.data
          _all_rating_data_received.value = true
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

onBeforeMount(async () => {
  await getOverallRating()
})

provide('getOverallRating', getOverallRating)
</script>

<template>
  <main class="h-full p-6 my-6 flex flex-col items-center">
    <div class="flex container items-center justify-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <OverallRatingNavigationBar />
      <div class="w-full my-6">
        <div
          class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs"
          v-if="_all_rating_data_received"
          @scrollend="getOverallRating()"
        >
          <OverallRatingTable />
        </div>
        <div
          class="w-full mt-6 lg:mt-0 rounded shadow text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs skeleton"
          v-else
        ></div>
      </div>
    </div>
  </main>
</template>
