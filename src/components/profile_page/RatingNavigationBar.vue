<script setup>

//Меню настройки таблицы результатов

</script>

<template>
  <section class="">
    <div class="test-config flex justify-center">
      <div class="control-panel join">
        <Transition name="operations">
          <div class="join" v-show="_show_operations" id="arithmetic-operations">
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
            @click="showGameType"
          />
          <input
            class="join-item btn btn-sm bg-neutral/60 hover:border-dark-grey border-dark-grey"
            type="radio"
            name="choice"
            aria-label="сложность"
            @click="showGameDifficulty"
          />
        </div>
        <Transition name="another-properties">
          <div class="join" v-show="_show_game_type">
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="options"
              value="time"
              aria-label="на время"
              @click="showGameTime"
            />
            <input
              class="join-item btn btn-sm bg-primary/70 hover:border-dark-grey border-dark-grey"
              type="radio"
              name="options"
              value="count"
              aria-label="на количество"
              @click="showLevelsCount"
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-show="_show_game_difficulty">
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
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-show="_show_game_time && _show_game_type">
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
            /></div
        ></Transition>
        <Transition name="another-properties"
          ><div class="join" v-show="_show_levels_count">
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
