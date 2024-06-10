<script setup>
//Панель игровой сессии

import { useCurrentUserStore } from '@/stores/current_user_store'
import { createRange } from '@/utils/create_range'
import { generateExample } from '@/utils/generate_example'
import { inject, onUpdated, reactive, ref } from 'vue'

import axios from 'axios'

const storeUser = useCurrentUserStore()
const _game_session = inject('_game_session') //инъекция объекта
const _answer_input = inject('_answer_input') //DOM-элемент поля ввода
const _show_game_timer = inject('_show_game_timer')
const _remaining_time = inject('_remaining_time')
const _game_end = inject('_game_end')
const _show_start_button = inject('_show_start_button')
const _enable_menu = inject('_enable_menu')

const _current_example = reactive({}) //текущий пример
const _previous_example = reactive({}) //предыдущий пример
const _next_example = reactive({}) //следующий пример
const _previous_user_answer = ref(0)

let examples_list = [] // список примеров
let request_list = []
let remember_duration = 0
let magnitude = _game_session.difficulty.toString().length
let { min_number, max_number } = createRange(magnitude)
let pointer = 0 //счётчик текущего примера

function changeExample() {
  //смена примера и обновление статистики игровой сессии

  if (_game_session.time != 0) {
    let generated_example = generateExample(_game_session.operations, min_number, max_number)
    examples_list.push(generated_example)
  }

  if (_current_example.answer.toString() == _answer_input.value.toString()) {
    _game_session.correct_answers++
  } else {
    _game_session.wrong_answers++
  }
  _previous_user_answer.value = _answer_input.value
  let currentExample = examples_list[pointer]

  request_list.push({
    type_operation: currentExample.example.split(' ')[1],
    number1: Number(currentExample.example.split(' ')[0]),
    number2: Number(currentExample.example.split(' ')[2]),
    correct_answer: Number(_current_example.answer),
    user_answer: Number(_answer_input.value)
  })

  _answer_input.value = ''

  if (pointer == examples_list.length - 1) {
    // pointer++
    remember_duration = _remaining_time.value
    _show_start_button.value = true
    _show_game_timer.value = false
    _game_end.value = true
    _enable_menu.value = true
    _remaining_time.value = 0
  }

  if (pointer == examples_list.length - 2) {
    pointer++
    _previous_example.example = examples_list[pointer - 1].example
    _previous_example.answer = _previous_user_answer.value

    _current_example.example = examples_list[pointer].example
    _current_example.answer = examples_list[pointer].answer

    _next_example.example = ''
    _next_example.answer = ''
  } else {
    pointer++

    _previous_example.example = examples_list[pointer - 1].example
    _previous_example.answer = _previous_user_answer.value

    _current_example.example = examples_list[pointer].example
    _current_example.answer = examples_list[pointer].answer

    _next_example.example = examples_list[pointer + 1].example
    _next_example.answer = examples_list[pointer + 1].answer
  }
}

function startGame() {
  // появление игрового поля
  magnitude = _game_session.difficulty.toString().length
  let { min_number, max_number } = createRange(magnitude)
  _show_start_button.value = !_show_start_button.value
  request_list = []
  _answer_input.value = ''
  _game_end.value = false
  _enable_menu.value = false
  _show_game_timer.value = true
  _game_session.correct_answers = 0
  _game_session.wrong_answers = 0

  examples_list = []

  if (_game_session.game_mode == 'time_mode') {
    for (let i = 0; i < 2; i++) {
      let generated_example = generateExample(_game_session.operations, min_number, max_number)
      examples_list.push(generated_example)
    }
  } else if (_game_session.game_mode == 'count_mode') {
    for (let i = 0; i < _game_session.levels_count; i++) {
      let generated_example = generateExample(_game_session.operations, min_number, max_number)
      examples_list.push(generated_example)
    }
  }

  pointer = 0

  _previous_example.example = ''
  _previous_example.answer = ''

  _current_example.example = examples_list[pointer].example
  _current_example.answer = examples_list[pointer].answer

  _next_example.example = examples_list[pointer + 1].example
  _next_example.answer = examples_list[pointer + 1].answer
}

onUpdated(async () => {
  console.log(_remaining_time.value)
  if (_game_end.value && storeUser.isLogged) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios
        .post(
          import.meta.env.VITE_BASE_URL + 'game_sessions/',
          {
            game_mode: _game_session.game_mode,
            duration:
              _game_session.game_mode == 'time_mode' ? _game_session.time : remember_duration,
            math_operations: _game_session.operations,
            examples_category: _game_session.difficulty,
            examples: request_list,
            total_count: _game_session.correct_answers + _game_session.wrong_answers,
            correct_count: _game_session.correct_answers
          },
          {
            headers: {
              Authorization: 'Bearer ' + storeUser.accessToken,
              'Content-Type': 'application/json',
              accept: 'application/json'
            }
          }
        )
        .then((response) => {
          console.log(response)
          if (response.status === 201) {
            console.log('Gamesession created successful')
          } else {
            alert('Registration failed')
          }
        })
        .catch((error) => {
          console.log(storeUser.accessToken)
          console.log(error)
        })
    } catch (error) {
      console.error('Error during registration:', error)
    }

  }
  
})
</script>

<template>
  <div
  class=" flex items-center justify-center w-4/6 h-7xs  border border-dark-grey  p-1 md:p-6 rounded-box bg-neutral/50 "
  >
    <p class="text-md md:text-5xl text-center cursor-pointer" v-if="_show_start_button" @click="startGame">
      НАЧАТЬ
    </p>
    <div class="flex flex-col items-center justify-center space-y-4" v-else>
      <p class="text-md text-base-content/30 md:text-4xl" v-if="_previous_example.example">
        {{ _previous_example.example.replace('/', '&#247;').replace('*', '&#215;') }} =
        {{ _previous_example.answer }}
      </p>
      <p class="text-md text-base-content/30 md:text-4xl" v-else>
        <br />
      </p>
      <div class="flex justify-center items-center">
        <p class="btn hover:bg-none bodrered btn-ghost btn-6xl hover:bg-grey/0 text-md md:text-5xl">
          {{ _current_example.example.replace('/', '&#247;').replace('*', '&#215;') }} =
        </p>
        <input
          type="number"
          placeholder="..."
          class="join-item input input-primary outline-none text-xs input-xs w-xs md:w-4xs md:input-md md:text-2xl border-2 border-primary bg-opacity-0 focus:border-primary"
          v-model="_answer_input"
          :autofocus="!_game_end"
          @keyup.enter="changeExample"
        />
        <!-- <kbd class="bodrered join-item btn  btn-xl bg-primary kbd-lg">Enter</kbd>               -->
      </div>
      <p class="text-md md:text-4xl text-base-content/30" v-if="_next_example.example">
        {{ _next_example.example.replace('/', '&#247;').replace('*', '&#215;') }} =
      </p>
      <p class="text-md md:text-4xl text-base-content/30" v-else><br /></p>
    </div>
  </div>
</template>

<style scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none; /* Кнопки спрятаны */
}
</style>
