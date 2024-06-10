<script setup>
//Таблица рейтинга
import { inject, onBeforeMount, ref } from 'vue'
import { formatDate } from '@/utils/date_formatter'

const _rating_list = inject('_rating_list')

const getUserRating = inject('getUserRating')
const _examples_modal = ref(null)

// Состояние для хранения выбранной игровой сессии
const selectedSession = ref(null)

onBeforeMount(async () => {
  await getUserRating()
})

// Метод для обработки нажатия на строку таблицы
function selectSession(session) {
  selectedSession.value = session
  _examples_modal.value.showModal()
}
</script>

<template>
  <table
    class="table display stripe bg-base-100 responsive hover py-4 w-full table-pin-rows table-pin-cols"
  >
    <thead>
      <tr>
        <th class="text-primary-content text-sm bg-primary">Процент правильно решенных</th>
        <th class="text-primary-content text-sm bg-primary">Количество правильно решенных</th>
        <th class="text-primary-content text-sm bg-primary">Затраченное время</th>
        <!-- <th class="text-primary-content text-sm bg-primary">Операция</th> -->
        <th class="text-primary-content text-sm bg-primary">Дата и время</th>
      </tr>
    </thead>
    <tbody class="text-base-content">
      <tr
        v-for="session in _rating_list"
        :key="session.game_session_id"
        @click="selectSession(session)"
        class="cursor-pointer"
      >
        <td class="text-sm">
          {{ Math.round((session.correct_count / session.total_count) * 100) }}%
        </td>
        <td class="text-sm">{{ session.correct_count }}</td>
        <td class="text-sm">{{ session.duration }} сек</td>
        <!-- <td class="text-sm">{{ session.math_operations.join('&nbsp;&nbsp;') }}</td> -->
        <td class="text-sm">{{ formatDate(session.created_at) }}</td>
      </tr>
    </tbody>
  </table>
  <dialog id="my_modal_1" class="modal" ref="_examples_modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg m-2">Все примеры данной игры</h3>
      <div
        class="h-7xs overflow-x-scroll overflow-visible p-5 rounded-box bg-base-300 my-0 mx-auto space-y-5"
        v-if="selectedSession"
      >
        <div v-for="example in selectedSession.examples" :key="example.id">
          <p
            :class="{
              'text-2xl text-dark-green': example.user_answer == example.correct_answer,
              'text-2xl text-dark-red': !(example.user_answer == example.correct_answer)
            }"
          >{{ example.number1 }} {{ example.type_operation }} {{ example.number2 }} = {{ example.user_answer }}
          <span
            class="text-2xl text-neutral-content"
            v-if="!(example.user_answer == example.correct_answer)"
            >&nbsp;&nbsp;&nbsp;(Ответ: {{ example.correct_answer }})</span
          ></p>
        </div>
        <!-- примеры -->

        <!-- <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 2 = 4</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 3 = 5</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 2 = 4</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 3 = 5</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 2 = 4</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p>
        <p class="text-4xl text-dark-green">2 + 3 = 5</p>
        <p class="text-4xl text-dark-red">
          2 + 2 = 5 <span class="text-4xl text-neutral-content">(Ответ: 4)</span>
        </p> -->
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Закрыть</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
