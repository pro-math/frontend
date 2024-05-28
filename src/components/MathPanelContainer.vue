<script setup>
import TestTimer from './TestTimer.vue'
import MathTestHandler from './MathTestHandler.vue'
import TestResults from './TestResults.vue'
</script>

<template>
  <section class="flex flex-col items-center h-full my-6 p-3 rounded-md border bg-base-300 w-5/6">
    <TestTimer />
    <MathTestHandler />
    <TestResults />
  </section>
</template>

<style scoped></style>
