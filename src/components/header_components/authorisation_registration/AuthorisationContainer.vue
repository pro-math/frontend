<script setup>

//Контейнер, содержащий кнопки регистрации и входа и модальные окна

import SignInWindow from './SignInWindow.vue'
import SignUpWindow from './SignUpWindow.vue'
</script>

<template>
  <div class="space-x-2">
    <button class="btn btn-sm bg-primary bodrer border-dark-grey w-4xs" onclick="my_modal_3.showModal()">
      Вход
    </button>
    <button class="btn btn-sm bg-primary border border-dark-grey w-4xs" onclick="my_modal_4.showModal()">
      Регистрация
    </button>
    <SignInWindow /> 
    <SignUpWindow />
  </div>
</template>
