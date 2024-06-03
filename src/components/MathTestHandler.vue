<script setup>
import { inject, onMounted } from 'vue'
import { generateExample } from '@/utils/generate_example'
import { createRange } from '@/utils/create_range'

const _game_session = inject('_game_session')

let examples_list = []
// console.log(_game_session.difficulty.toString().length - 1)
const registerExamplesListGeneration = inject('registerExamplesListGeneration', null)

function examplesListGeneration() {
  let magnitude = _game_session.difficulty.toString().length
  // console.log(magnitude)

  let { min_number, max_number } = createRange(magnitude)
  console.log(min_number, max_number)

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
  console.log(examples_list)
}

onMounted(() => {
  if (registerExamplesListGeneration) {
    registerExamplesListGeneration(examplesListGeneration)
  } else {
    console.error('Функция registerGrandChildFunction не найдена')
  }
})

// console.log(examples_list)
</script>

<template>
  <div
    class="m-3 h-full w-3/6 flex flex-col border border-dark-grey items-center justify-center p-6 rounded-lg bg-neutral/50 space-y-4"
  >
    <p class="text-4xl max-sm:text-xl text-neutral/80">2 + 3 = 5</p>
    <div class="join flex justify-center items-center space-x-2">
      <p
        class="btn hover:bg-none join-item bodrered max-sm:text-2xl btn-ghost btn-6xl hover:bg-grey/30 text-5xl"
      >
        2 + 2 =
      </p>
      <input
        type="text"
        placeholder="..."
        class="join-item input input-primary outline-none w-1/4 input-6xl border-2 border-primary bg-opacity-0 text-black max-sm:input-3xl max-sm:text-sm text-3xl focus:border-primary"
      />
    </div>
    <p class="text-4xl max-sm:text-xl text-neutral/70">3 + 5 =</p>
  </div>
</template>

<style scoped></style>
