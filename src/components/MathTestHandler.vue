<script setup>
import { inject, onMounted, reactive, ref } from 'vue'
import { generateExample } from '@/utils/generate_example'
import { createRange } from '@/utils/create_range'


const registerExamplesListGeneration = inject('registerExamplesListGeneration', null)

const _game_session = inject('_game_session') //инъекция объекта

const _current_example = reactive({}) //текущий пример

let pointer = 0 //счётчик текущего примера

const _previous_example = reactive({}) //предыдущий пример

const _next_example = reactive({}) //следующий пример

const _answer_input = ref() //DOM-элемент поля ввода

const startGame = inject('startGame')

// const _game_finished = inject('_game_finished')

const _show_start_button = ref(true)

let examples_list = [] // список примеров


function examplesListGeneration() { //генерация списка примеров
  registerExamplesListGeneration
  let magnitude = _game_session.difficulty.toString().length

  let { min_number, max_number } = createRange(magnitude)

  if (_game_session.time != 0) {
    if (_game_session.time == 30) {
      for (let i = 0; i < 70; i++) {
        let generated_example = generateExample(_game_session.operations, min_number, max_number)
        examples_list.push(generated_example)
      }
    } else if (_game_session.time == 60) {
      for (let i = 0; i < 100; i++) {
        let generated_example = generateExample(_game_session.operations, min_number, max_number)
        examples_list.push(generated_example)
      }
    } else if (_game_session.time == 90) {
      for (let i = 0; i < 130; i++) {
        let generated_example = generateExample(_game_session.operations, min_number, max_number)
        examples_list.push(generated_example)
      }
    } else if (_game_session.time == 120) {
      for (let i = 0; i < 160; i++) {
        let generated_example = generateExample(_game_session.operations, min_number, max_number)
        examples_list.push(generated_example)
      }
    }
  } else if (_game_session.levels_count != 0) {
    for (let i = 0; i < _game_session.levels_count; i++) {
      let generated_example = generateExample(_game_session.operations, min_number, max_number)
      examples_list.push(generated_example)
    }
  }
}

function changeExample() { //смена примера и обновление статистики игровой сессии

  if (_current_example.answer.toString() == _answer_input.value.toString()) {
    _game_session.correct_answers++
  } else {
    _game_session.wrong_answers++
  }
  _answer_input.value = ''

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

function showTestHandler() { // появление игрового поля
  _show_start_button.value = !_show_start_button.value

  startGame()

  pointer = 0

  _previous_example.example = ''
  _previous_example.answer = ''

  _current_example.example = examples_list[pointer].example
  _current_example.answer = examples_list[pointer].answer

  _next_example.example = examples_list[pointer + 1].example
  _next_example.answer = examples_list[pointer + 1].answer
}

onMounted(() => {
  if (registerExamplesListGeneration) {
    registerExamplesListGeneration(examplesListGeneration)
  } else {
    console.error('Функция registerExamplesListGeneration не найдена')
  }
})


</script>

<template>
  <div
    class="m-3 flex items-center justify-center w-4/6 h-7xs border border-dark-grey p-6 rounded-md bg-neutral/50"
  >
    <p
      class="text-5xl text-center cursor-pointer"
      v-if="_show_start_button"
      @click="showTestHandler"
    >
      НАЧАТЬ
    </p>
    <div class="flex flex-col items-center justify-center space-y-4" v-if="!_show_start_button">
      <p class="text-4xl max-sm:text-xl text-neutral/80" v-if="_previous_example.example">
        {{ _previous_example.example }} = {{ _previous_example.answer }}
      </p>
      <p class="text-4xl max-sm:text-xl text-neutral/80" v-else>
        <br />
      </p>
      <div class="flex justify-center items-center space-x-2">
        <p
          class="btn hover:bg-none bodrered max-sm:text-2xl btn-ghost btn-6xl hover:bg-grey/0 text-5xl"
        >
          {{ _current_example.example }} =
        </p>
        <input
          type="text"
          placeholder="..."
          class="join-item input input-primary outline-none w-1/4 input-6xl border-2 border-primary bg-opacity-0 text-black max-sm:input-3xl max-sm:text-sm text-3xl focus:border-primary"
          v-model="_answer_input"
          @keyup.enter="changeExample"
        />
        <!-- <kbd class="bodrered join-item btn  btn-xl bg-primary kbd-lg">Enter</kbd>               -->
      </div>
      <p class="text-4xl max-sm:text-xl text-neutral/70" v-if="_next_example.example">
        {{ _next_example.example }} =
      </p>
      <p class="text-4xl max-sm:text-xl text-neutral/70" v-else><br /></p>
    </div>
  </div>
</template>

<style scoped></style>
