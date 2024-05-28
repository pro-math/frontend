<script setup>
import { ref } from 'vue'
const _show_operations = ref(false)
const _show_type = ref(false)
const _show_game_difficulty = ref(false)
const _show_game_time = ref(false)
const _show_levels_count = ref(false)
</script>

<template>
  <section class="">
    <div class="test-config flex justify-center">
      <div class="control-panel join">
        <Transition name="operations">
          <div class="join" v-if="_show_operations">
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="operations"
              value="all"
              aria-label="all"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="operations"
              value="+"
              aria-label="+"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="operations"
              value="-"
              aria-label="-"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="operations"
              value="//"
              aria-label="//"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="operations"
              value="*"
              aria-label="*"
            />
          </div>
        </Transition>
        <div class="join">
          <input
            class="join-item btn btn-sm bg-neutral/60 hover:border-dark-grey border-dark-grey"
            type="radio"
            name=""
            aria-label="операции"
            @click="_show_operations = !_show_operations"
          />
          <input
            class="join-item btn btn-sm bg-neutral/60 hover:border-dark-grey border-dark-grey"
            type="radio"
            name="choice"
            aria-label="тип"
            @click="_show_type = !_show_type"
          />
          <input
            class="join-item btn btn-sm bg-neutral/60 hover:border-dark-grey border-dark-grey"
            type="radio"
            name="choice"
            aria-label="сложность"
            @click="_show_game_difficulty = !_show_game_difficulty"
          />
        </div>
        <Transition name="another-properties">
          <div class="join" v-if="_show_type">
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="options"
              value="time"
              aria-label="на время"
              @click="_show_game_time = !_show_game_time"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="options"
              value="count"
              aria-label="на количество"
              @click="_show_levels_count = !_show_levels_count"
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-if="_show_game_difficulty">
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="levels"
              value="10"
              aria-label="10"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="levels"
              value="100"
              aria-label="100"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="levels"
              value="1000"
              aria-label="1000"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="levels"
              value="10000"
              aria-label="10000"
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-if="_show_game_time">
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="time"
              value="30"
              aria-label="30s"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="time"
              value="60"
              aria-label="60s"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="time"
              value="90"
              aria-label="90s"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="time"
              value="120"
              aria-label="120s"
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-if="_show_levels_count">
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="count"
              value="5"
              aria-label="5"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="count"
              value="10"
              aria-label="10"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="count"
              value="15"
              aria-label="15"
            />
            <input
              class="join-item btn btn-sm bg-secondary/10 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="count"
              value="20"
              aria-label="20"
            /></div
        ></Transition>
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
