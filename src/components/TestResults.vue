<script setup></script>

<template>
  <div class="flex flex-col w-full lg:flex-row m-6">
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Процент</span>
      <p class="text-2xl font-bold">70%</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Правильно</span>
      <p class="text-dark-green font-bold text-2xl">7</p>
    </div>
    <div class="divider lg:divider-horizontal"></div>
    <div class="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
      <span>Неправильно</span>
      <p class="text-dark-red font-bold text-2xl">3</p>
    </div>
  </div>
</template>

<style scoped></style>
