<script setup>
import { inject } from 'vue'
import { generateExample } from '@/utils/generate_example';


const _game_session = inject('_game_session')
let examples_list = [];
let min_number = 0;
let max_number = _game_session.difficulty;
for (let i = 0; i < _game_session.levels_count; i++) {
  let generated_example = generateExample(_game_session.operations, min_number, max_number);
  examples_list.push(generated_example)
}
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
