<script setup>
//Панель игровой сессии

import { inject, reactive, ref } from 'vue'
import { generateExample } from '@/utils/generate_example'
import { createRange } from '@/utils/create_range'

const _game_session = inject('_game_session') //инъекция объекта

const _current_example = reactive({}) //текущий пример

let pointer = 0 //счётчик текущего примера

const _previous_example = reactive({}) //предыдущий пример

const _next_example = reactive({}) //следующий пример

const _answer_input = ref() //DOM-элемент поля ввода

const _show_game_timer = inject('_show_game_timer')

// const _remaining_time = inject('_remaining_time')

// const _game_finished = inject('_game_finished')

const _show_start_button = inject('_show_start_button')

let examples_list = [] // список примеров

let magnitude = _game_session.difficulty.toString().length

let { min_number, max_number } = createRange(magnitude)

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
  _answer_input.value = ''

  if ((pointer == examples_list.length - 1) && _game_session.levels_count != 0) {
    _show_start_button.value = true
    _show_game_timer.value = false
  }

  if (pointer == examples_list.length - 2) {
    pointer++
    _previous_example.example = examples_list[pointer - 1].example
    _previous_example.answer = examples_list[pointer - 1].answer

    _current_example.example = examples_list[pointer].example
    _current_example.answer = examples_list[pointer].answer

    _next_example.example = ''
    _next_example.answer = ''
  } else {
    pointer++

    _previous_example.example = examples_list[pointer - 1].example
    _previous_example.answer = examples_list[pointer - 1].answer

    _current_example.example = examples_list[pointer].example
    _current_example.answer = examples_list[pointer].answer

    _next_example.example = examples_list[pointer + 1].example
    _next_example.answer = examples_list[pointer + 1].answer
  }
}

function startGame() {
  // появление игрового поля
  _show_start_button.value = !_show_start_button.value

  _show_game_timer.value = true

  _game_session.correct_answers = 0

  _game_session.wrong_answers = 0

  examples_list = []

  if (_game_session.time != 0) {
    for (let i = 0; i < 2; i++) {
      let generated_example = generateExample(_game_session.operations, min_number, max_number)
      examples_list.push(generated_example)
    }
  } else if (_game_session.levels_count != 0) {
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
</script>

<template>
  <div
    class="m-3 flex items-center justify-center w-4/6 h-7xs border border-dark-grey p-6 rounded-md bg-neutral/50"
  >
    <p class="text-5xl text-center cursor-pointer" v-if="_show_start_button" @click="startGame">
      НАЧАТЬ
    </p>
    <div class="flex flex-col items-center justify-center space-y-4" v-else>
      <p class="text-xs text-base-content/30 md:text-4xl" v-if="_previous_example.example">
        {{ _previous_example.example }} = {{ _previous_example.answer }}
      </p>
      <p class="text-xs text-base-content/30 md:text-4xl" v-else>
        <br />
      </p>
      <div class="flex justify-center items-center">
        <p
          class="btn hover:bg-none bodrered btn-ghost btn-6xl hover:bg-grey/0 text-xs md:text-5xl"
        >
          {{ _current_example.example }} =
        </p>
        <input
          type="text"
          placeholder="..."
          class="join-item input input-primary outline-none text-xs input-xs w-xs md:w-4xs md:input-md md:text-2xl border-2 border-primary bg-opacity-0 focus:border-primary"
          v-model="_answer_input"
          @keyup.enter="changeExample"
        />
        <!-- <kbd class="bodrered join-item btn  btn-xl bg-primary kbd-lg">Enter</kbd>               -->
      </div>
      <p class="text-xs md:text-4xl text-base-content/30" v-if="_next_example.example">
        {{ _next_example.example }} =
      </p>
      <p class="text-xs md:text-4xl text-base-content/30" v-else><br /></p>
    </div>
  </div>
</template>

<style scoped></style>
