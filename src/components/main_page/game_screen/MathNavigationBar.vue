<script setup>

//Меню настройки игры

import { ref, inject } from 'vue'

const _show_game_time = ref(false)
const _show_levels_count = ref(true)
const _game_session = inject('_game_session')

const _plus_operation = ref(true)
const _minus_operation = ref(false)
const _multiplication_operation = ref(false)
const _division_operation = ref(false)

function updateOperationsList() {
  
  if (_plus_operation.value && !_game_session.operations.includes('+')) {
    _game_session.operations.push('+')
  } else if (!_plus_operation.value && _game_session.operations.includes('+')){
    _game_session.operations = _game_session.operations.filter((n) => {
      return n != '+'
    })
  }
  if (_minus_operation.value && !_game_session.operations.includes('-')) {
    _game_session.operations.push('-')
  } else if (!_minus_operation.value && _game_session.operations.includes('-')){
    _game_session.operations = _game_session.operations.filter((n) => {
      return n != '-'
    })
  }
  if (_multiplication_operation.value && !_game_session.operations.includes('*')) {
    _game_session.operations.push('*')
  } else if (!_multiplication_operation.value && _game_session.operations.includes('*')){
    _game_session.operations = _game_session.operations.filter((n) => {
      return n != '*'
    })
  }
  if (_division_operation.value && !_game_session.operations.includes('//')) {
    _game_session.operations.push('//')
  } else if (!_division_operation.value && _game_session.operations.includes('//')){
    _game_session.operations = _game_session.operations.filter((n) => {
      return n != '//'
    })
  }
  // console.log(_game_session.operations)
}

function showGameTime() {
  _show_game_time.value = true
  _show_levels_count.value = false
  _game_session.levels_count = 0
}
function showLevelsCount() {
  _show_levels_count.value = true
  _show_game_time.value = false
  _game_session.time = 0
}


</script>

<template>
  <section class="">
    <div class="test-config flex justify-center">
      <div class="container flex flex-col justify-start  md:flex-row md:flex-wrap md:justify-center items-center gap-y-4 xl:flex-row xl:justify-center ">
        <div class="join w-full md:w-1/3">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="операции"
            disabled
          />
          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="+"
              aria-label="+"
              v-model="_plus_operation"
              v-on:change="updateOperationsList"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="-"
              aria-label="-"
              v-model="_minus_operation"
              v-on:change="updateOperationsList"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="//"
              aria-label="//"
              v-model="_division_operation"
              v-on:change="updateOperationsList"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="*"
              aria-label="*"
              v-model="_multiplication_operation"
              v-on:change="updateOperationsList"
            />
          </div>
        </div>

        <div class="join w-full md:w-1/3  md:ml-5xs">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="сложность"
            disabled
          />

          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="10"
              aria-label="10"
              checked="checked"
              @click="_game_session.difficulty = 10"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="100"
              aria-label="100"
              @click="_game_session.difficulty = 100"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="1000"
              aria-label="1000"
              @click="_game_session.difficulty = 1000"
            />
          </div>
        </div>
        <div class="join w-full md:w-1/3">
          <input class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary" type="radio"
                            name="" aria-label="тип" disabled />
          <div class="join w-full">
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="options"
              value="time"
              aria-label="на время"
              @click="showGameTime"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="options"
              value="count"
              aria-label="на количество"
              checked="checked"
              @click="showLevelsCount"
            />
          </div>
        </div>
        <div class="join w-full md:w-1/3 md:ml-5xs">

          <div class="join w-full" v-if="_show_game_time">
            <input
              class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
              type="radio"
              name="options"
              aria-label="время"
              disabled
            />
            <div class="join w-full">
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="15s"
                aria-label="15"
                @click="_game_session.time = 15"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="30s"
                aria-label="30"
                @click="_game_session.time = 30"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="60s"
                aria-label="60"
                @click="_game_session.time = 60"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="90s"
                aria-label="90"
                @click="_game_session.time = 90"
              />
            </div>
          </div>
          <div class="join w-full" v-if="_show_levels_count">
            <input
              class="font-bold text-lg  join-item btn btn-sm bg-primary after:text-primary border-primary"
              type="radio"
              name="options"
              aria-label="количество"
              disabled
            />
            <div class="join w-full">
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="10"
                aria-label="10"
                checked="checked"
                @click="_game_session.levels_count = 10"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="15"
                aria-label="15"
                @click="_game_session.levels_count = 15"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="20"
                aria-label="20"
                @click="_game_session.levels_count = 20"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="30"
                aria-label="30"
                @click="_game_session.levels_count = 30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* .operations-enter-active,
.operations-leave-active {
  animation: slide-in-right;
  animation-duration: 1s;
}

.operations-enter-from,
 .operations-leave-to {
  animation: slide-out-right ;
  animation-duration: 0.5s;
} */
.operations-enter-active {
  transition: all 0.5s ease-out;
}

.operations-leave-active {
  transition: all 0.5s;
}

.operations-enter-from,
.operations-leave-to {
  transform: translateX(80px);
  opacity: 0;
}

.another-properties-enter-active {
  /* transform: translateX(10px); */
  transition: all 0.5s ease-in-out;
}

.another-properties-leave-active {
  transition: all 0.5s;
}

.another-properties-enter-from,
.another-properties-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}
</style>
