<script setup>
//Меню настройки игры

import { inject, onBeforeMount, onBeforeUpdate, ref } from 'vue'

const _rating_settings = inject('_rating_settings')

const _show_game_time = ref(false)
const _show_levels_count = ref(true)
const _something_changed = ref(false)
const getUserAchievements = inject('getUserAchievements')
const getUserRating = inject('getUserRating')
const getChartData = inject('getChartData')
const getAllAchievements = inject('getAllAchievements')
const _chart_label = inject('_chart_label')
// const _dates = inject('_dates')
// const _stats = inject('_stats')
// const _data_loaded = inject('_data_loaded')
// const _progress_list = inject('_progress_list')

async function updateAllStats() {
  getChartData()
  getUserRating()
  getUserAchievements()
  getAllAchievements()

}

function somethingChanged() {
  _something_changed.value = !_something_changed.value
}

function updateOperationsList(operation) {
  if (!_rating_settings.operations.includes(operation)) {
    _rating_settings.operations.push(operation)
  } else if (_rating_settings.operations.includes(operation)) {
    _rating_settings.operations = _rating_settings.operations.filter((n) => {
      return n != operation
    })
  }
}

function showGameTime() {
  _show_game_time.value = true
  _show_levels_count.value = false
  _rating_settings.game_mode = 'time_mode'
  _rating_settings.levels_count = 0
  _rating_settings.time = 15
}

function showLevelsCount() {
  _show_levels_count.value = true
  _show_game_time.value = false
  _rating_settings.game_mode = 'count_mode'
  _rating_settings.levels_count = 10
  _rating_settings.time = 0
}

onBeforeMount(async () => {
  _chart_label.value =
    _rating_settings.game_mode == 'count_mode' ? 'Процент правильно решённых ' : 'Правильных ответов'
  await updateAllStats()
})

onBeforeUpdate(async () => {
  _chart_label.value =
    _rating_settings.game_mode == 'count_mode' ? 'Процент правильно решённых ' : 'Правильных ответов'
  updateAllStats()
})
</script>

<template>
  <section class="">
    <div class="test-config flex justify-center">
      <div
        class="container flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-y-4 xl:flex-row xl:justify-center"
      >
        <div class="join w-full md:w-1/3">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="операции"
            disabled
          />
          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="+"
              aria-label="+"
              checked="checked"
              @click="updateOperationsList('+');somethingChanged()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="-"
              aria-label="-"
              @click="updateOperationsList('-');somethingChanged()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="/"
              aria-label="&#247;"
              @click="updateOperationsList('/');somethingChanged()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="*"
              aria-label="&#215;"
              @click="updateOperationsList('*');somethingChanged()"
            />
          </div>
        </div>

        <div class="join w-full md:w-1/3 md:ml-5xs">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="сложность"
            disabled
          />

          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="10"
              aria-label="10"
              checked="checked"
              @click="_rating_settings.difficulty = 10;somethingChanged()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="100"
              aria-label="100"
              @click="_rating_settings.difficulty = 100;somethingChanged()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="1000"
              aria-label="1000"
              @click="_rating_settings.difficulty = 1000;somethingChanged()"
            />
          </div>
        </div>
        <div class="join w-full md:w-1/3">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="тип"
            disabled
          />
          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="options"
              value="time"
              aria-label="на время"
              @click="showGameTime()"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="options"
              value="count"
              aria-label="на количество"
              checked="checked"
              @click="showLevelsCount()"
            />
          </div>
        </div>
        <div class="join w-full md:w-1/3 md:ml-5xs">
          <div class="join w-full" v-if="_show_game_time">
            <input
              class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
              type="radio"
              name="options"
              aria-label="время"
              disabled
            />
            <div class="join w-full">
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="15s"
                aria-label="15"
                checked="checked"
                @click="_rating_settings.time = 15;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="30s"
                aria-label="30"
                @click="_rating_settings.time = 30;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="60s"
                aria-label="60"
                @click="_rating_settings.time = 60;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="90s"
                aria-label="90"
                @click="_rating_settings.time = 90;somethingChanged()"
              />
            </div>
          </div>
          <div class="join w-full" v-if="_show_levels_count">
            <input
              class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
              type="radio"
              name="options"
              aria-label="количество"
              disabled
            />
            <div class="join w-full">
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="10"
                aria-label="10"
                checked="checked"
                @click="_rating_settings.levels_count = 10;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="15"
                aria-label="15"
                @click="_rating_settings.levels_count = 15;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="20"
                aria-label="20"
                @click="_rating_settings.levels_count = 20;somethingChanged()"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="30"
                aria-label="30"
                @click="_rating_settings.levels_count = 30;somethingChanged()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <p class="hidden">{{_something_changed}}</p>
</template>

<style scoped></style>
