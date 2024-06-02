<script setup>
// import { defineEmits } from 'vue';

const emits = defineEmits(['showTimer'])

function showTimer() {
  emits('showTimer')
}
</script>

<template>
  <button
    class="btn bordered bg-secondary text-xl btn-xl max-sm:btn-sm border-dark-grey bodrer-4 text-center btn-xl"
    @click="showTimer"
  >
    НАЧАТЬ
  </button>
</template>
