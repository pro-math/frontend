<script setup>
import MathNavigationBar from './MathNavigationBar.vue'
import RatingTable from './RatingTable.vue'
</script>

<template>
  <section class="flex items-center justify-center grow p-6 flex-col">
    <div>
      <p class="font-bold text-xl text-secondary-content my-2">ВАШ РЕЙТИНГ</p>
    </div>
    <MathNavigationBar />
    <RatingTable />
  </section>
</template>
