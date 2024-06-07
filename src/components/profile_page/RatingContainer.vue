<script setup>

//Контейнер, содержащий меню настройки таблицы результатов и саму таблицу результатов

import RatingNavigationBar from './RatingNavigationBar.vue'
import RatingTable from './RatingTable.vue'
</script>

<template>
  <section class="flex items-center justify-center grow p-6 flex-col">
    <div>
      <p class="font-bold text-xl text-secondary-content my-2">ВАШ РЕЙТИНГ</p>
    </div>
    <RatingNavigationBar />
    <RatingTable />
    <p class="w-1/6 p-2 border border-primary text-center">Показать ещё</p>
  </section>
</template>
