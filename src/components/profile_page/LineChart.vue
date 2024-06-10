<script setup>
import 'chart.js/auto'
import { inject, onBeforeMount, onBeforeUpdate, ref } from 'vue'
import { Line } from 'vue-chartjs'
// import { onBeforeRouteUpdate } from 'vue-router';

// const _rating_settings = inject('_rating_settings')
const _progress_list = inject('_progress_list')
const _rating_settings = inject('_rating_settings')
const _chart_data = ref(null) // Инициализация как null
const _chart_options = ref(null) // Инициализация как null
const _chart_label = inject('_chart_label')
const _dates = inject('_dates')
const _stats = inject('_stats')
// const _data_loaded = inject('_data_loaded')
console.log(_chart_label)

onBeforeMount(async () => {
  for (let pointer = 0; pointer < _progress_list.value.length; pointer++) {
    _dates.value.push(_progress_list.value[pointer].date)
    _stats.value.push(Number(_progress_list.value[pointer].stats))
  }
  console.log('before mount in linechart ' + _chart_label.value)
  console.log('before mount dates ' + _dates.value)
  console.log('before mount stats ' + _stats.value)
  _chart_data.value = {
    labels: _dates.value,
    datasets: [
      {
        label: _chart_label.value,
        backgroundColor: '#ff785e',
        borderColor: '#DF612547',
        data: _stats.value,
        pointRadius: 6,
        pointHoverRadius: 10,
        tension: 0.4
      }
    ]
  }

  _chart_options.value = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: _rating_settings.game_mode == 'count_mode' ? 100 : Math.max(..._stats.value)
    }},
    plugins: {
      title: {
        display: true,
        text: 'Прогресс'
      }
    }
  }
})

onBeforeUpdate(async () => {
  for (let pointer = 0; pointer < _progress_list.value.length; pointer++) {
    _dates.value.push(_progress_list.value[pointer].date)
    _stats.value.push(Number(_progress_list.value[pointer].stats))
  }
  console.log('before mount in linechart ' + _chart_label.value)
  console.log('before mount dates ' + _dates.value)
  console.log('before mount stats ' + _stats.value)
  _chart_data.value = {
    labels: _dates.value,
    datasets: [
      {
        label: _chart_label.value,
        backgroundColor: '#ff785e',
        borderColor: '#DF612547',
        data: _stats.value,
        pointRadius: 6,
        pointHoverRadius: 10,
        tension: 0.4
      }
    ]
  }

  _chart_options.value = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Прогресс'
      }
    }
  }
})
</script>

<template>
  <Line :options="_chart_options" :data="_chart_data" />
</template>

<style scoped></style>
