<script setup>
//Таблица рейтинга
import { inject, } from 'vue'
import { formatDate } from '@/utils/date_formatter'

const _rating_list = inject('_rating_list')
// _rating_list.value.push(
//   {
//     user_id: 0,
//     username: 'popchik',
//     correct_count: 3,
//     total_count: 10,
//     duration: 16,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   },
//   {
//     user_id: 1,
//     username: 'dil',
//     correct_count: 6,
//     total_count: 20,
//     duration: 19,
//     math_operations: ['+', '-', '*']
//   }
// )
</script>

<template>
        <table
          class="table display stripe bg-base-100 responsive hover py-4 w-full table-pin-rows table-pin-cols"
        >
          <thead>
            <tr>
              <th class="text-primary-content text-sm bg-primary">Имя пользователя</th>
              <th class="text-primary-content text-sm bg-primary">Процент правильно решенных</th>
              <th class="text-primary-content text-sm bg-primary">Количество правильно решенных</th>
              <th class="text-primary-content text-sm bg-primary">Затраченное время</th>
              <!-- <th class="text-primary-content text-sm bg-primary">Операция</th> -->
              <th class="text-primary-content text-sm bg-primary">Дата</th>
            </tr>
          </thead>
          <tbody class="text-base-content">
            <tr v-for="session in _rating_list" :key="session.user_id">
              <td class="text-sm">{{ session.username }}</td>
              <td class="text-sm">
                {{ Math.round((session.correct_count / session.total_count) * 100) }}%
              </td>
              <td class="text-sm">{{ session.correct_count }}</td>
              <td class="text-sm">{{ session.duration }} cек</td>
              <!-- <td class="text-sm">{{ session.math_operations.join('&nbsp;&nbsp;') }}</td> -->
              <td class="text-sm">{{ formatDate(session.created_at).split(' ')[0] }}</td>
            </tr>
            <!-- <tr v-show="_rating_list.length >= 10">
              <td colspan="5" class="border-t border-t-primary bg-base-200">
                <p
                  class="w-full text-center cursor-pointer text-xl text-primary"
                  @click="getOverallRating()"
                >
                  Показать ещё
                </p>
              </td>
            </tr> -->
          </tbody>
        </table>
        <!-- <p
          class="w-full absolute bottom-1 p-2 border-t border-t-primary text-center cursor-pointer"
          @click="getUserRating"
        >
          Показать ещё
        </p> -->
</template>
