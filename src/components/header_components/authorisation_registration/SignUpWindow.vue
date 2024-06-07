<script setup>
//Модальное окно регистрации

import { ref } from 'vue'
// import { useRouter } from 'vue-router'
import axios from 'axios'
import { validateLogin, validatePassword } from '../../../utils/validators'
// import { useCurrentUserStore } from '@/stores/current_user_store'

// const storeUser = useCurrentUserStore()

// const router = new useRouter()
const _username = ref('')
const _password = ref('')
const _confirm_password = ref('')


const signUp = async (evt) => {
  evt.preventDefault()

  if (!validateLogin(_username.value)) {
    console.error('Неправильно введён логин')
    return
  }

  if (!validatePassword(_password.value)) {
    console.error('Пароль не соответствует требованиям')
    return
  }

  if (_password.value !== _confirm_password.value) {
    console.error('Пароли не совпадают')
    return
  }

  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .post('https://4368-83-171-69-39.ngrok-free.app/api/v1/users/register', {
        username: _username.value,
        password: _password.value
      })
      .then(function (response) {
        console.log(response)
        if (response.status === 201) {
          console.log('Registration successful')
          document.getElementById('my_modal_4').close()
          document.getElementById('my_modal_3').showModal()
        } else {
          alert('Registration failed')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  } catch (error) {
    console.error('Error during registration:', error)
  }
}
</script>

<template>
  <dialog id="my_modal_4" class="modal">
    <div class="modal-box flex flex-col items-center">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2">✕</button>
      </form>
      <h3 class="font-bold text-lg btn-sm m-2">Регистрация</h3>
      <form class="space-y-4 flex justify-center flex-col" @submit="signUp">
        <div>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
              />
            </svg>
            <input type="text" class="grow" placeholder="Никнейм" v-model="_username" />
          </label>
          <div class="h-er">
            <span class="marg-er text-dark-red text-xs"></span>
          </div>
        </div>
        <div>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="password"
              value=""
              placeholder="Пароль"
              class="grow"
              v-model="_password"
              min="5"
            />
          </label>
          <div class="h-er">
            <span class="marg-er text-dark-red text-xs"></span>
          </div>
        </div>

        <div>
          <label class="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="password"
              value=""
              placeholder="Повторите пароль"
              class="grow"
              v-model="_confirm_password"
            />
          </label>
          <div class="h-er">
            <span class="marg-er text-dark-red text-xs"></span>
          </div>
        </div>

        <button class="btn btn-md bordered text-xl">войти</button>
      </form>
    </div>
  </dialog>
</template>
