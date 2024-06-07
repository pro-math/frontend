<script setup>
//Меню настройки игры

import { ref } from 'vue'

const _show_game_time = ref(false)
const _show_levels_count = ref(true)
console.log(_show_levels_count.value)

function showGameTime() {
  _show_game_time.value = true
  _show_levels_count.value = false
}
function showLevelsCount() {
  _show_levels_count.value = true
  _show_game_time.value = false
}
</script>

<template>
  <section class="">
    <div class="test-config flex justify-center">
      <div
        class="container flex flex-col justify-start md:flex-row md:flex-wrap md:justify-center items-center gap-y-4 xl:flex-row xl:justify-center"
      >
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
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="-"
              aria-label="-"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="/"
              aria-label="/"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="checkbox"
              name="operations"
              value="*"
              aria-label="*"
            />
          </div>
        </div>

        <div class="join w-full md:w-1/3 md:ml-5xs">
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
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="100"
              aria-label="100"
            />
            <input
              class="join-item btn btn-sm bg-primary/20 flex-grow"
              type="radio"
              name="levels"
              value="1000"
              aria-label="1000"
            />
          </div>
        </div>
        <div class="join w-full md:w-1/3">
          <input
            class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary"
            type="radio"
            name=""
            aria-label="тип"
            disabled
          />
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
                checked="checked"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="30s"
                aria-label="30"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="60s"
                aria-label="60"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="time"
                value="90s"
                aria-label="90"
              />
            </div>
          </div>
          <div class="join w-full" v-if="_show_levels_count">
            <input
              class="font-bold text-lg join-item btn btn-sm bg-primary after:text-primary border-primary"
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
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="15"
                aria-label="15"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="20"
                aria-label="20"
              />
              <input
                class="join-item btn btn-sm bg-primary/20 flex-grow"
                type="radio"
                name="count"
                value="30"
                aria-label="30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
