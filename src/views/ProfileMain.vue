<script setup>

//Контейнер, содержаший персональную информацию и рейтинг

import PersonalInfo from '../components/profile_page/PersonalInfo.vue';
import RatingContainer from '../components/profile_page/RatingContainer.vue';
</script>

<template>
  <main>
    <div class="flex container items-center mx-auto w-5/6 flex-col my-6 space-x-6">
      <PersonalInfo />
      <RatingContainer />
    </div>
  </main>
</template>
