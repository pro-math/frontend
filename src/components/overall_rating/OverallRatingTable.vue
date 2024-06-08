<script setup>
//Таблица рейтинга
import { inject, onMounted } from 'vue'

const _rating_list = inject('_rating_list')
const getOverallRating = inject('getOverallRating')

onMounted(() => {
  getOverallRating()
})
</script>

<template>
  <section>
    <div class="w-full my-6">
      <div
        id="recipients"
        class="w-full mt-6 lg:mt-0 rounded shadow bg-neutral text-neutral-content border border-primary rounded-box overflow-x-auto h-13xs"
      >
        <table
          class="table display stripe responsive hover py-4 w-full table-pin-rows table-pin-cols"
        >
          <thead>
            <tr>
              <th class="text-primary text-sm">Имя пользователя</th>
              <th class="text-primary text-sm">Процент правильно решенных</th>
              <th class="text-primary text-sm">Количество правильно решенных</th>
              <th class="text-primary text-sm">Затраченное время</th>
              <th class="text-primary text-sm">Операция</th>
            </tr>
          </thead>
          <tbody class="">
            <tr v-for="session in _rating_list" :key="session.user_id">
              <td class="text-sm">{{ session.username }}</td>
              <td class="text-sm">{{ Math.round((session.correct_count / session.total_count) * 100) }}%</td>
              <td class="text-sm">{{ session.correct_count }}</td>
              <td class="text-sm">{{ session.duration }}</td>
              <td class="text-sm">{{ session.math_operations.join('&nbsp;&nbsp;') }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <p class="w-1/6 p-2 border border-primary text-center cursor-pointer" @click="getOverallRating">
      Показать ещё
    </p>
</template>
