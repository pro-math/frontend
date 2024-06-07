<script setup>
//Контейнер, содержаший персональную информацию и рейтинг

import PersonalInfo from '../components/profile_page/PersonalInfo.vue';
import RatingContainer from '../components/profile_page/RatingContainer.vue';

import { useCurrentUserStore } from '@/stores/current_user_store';
import { useRouter } from 'vue-router';

const storeUser = useCurrentUserStore()
const router = new useRouter()

function unLog() {
  storeUser.changeLoggedState()
  storeUser.changeUsername('')
  router.push('/')
}
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
