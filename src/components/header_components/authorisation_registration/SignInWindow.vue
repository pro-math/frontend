<script setup>
//Модальное окно входа

import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { validateLogin, validatePassword } from '@/utils/validators'
import { useCurrentUserStore } from '@/stores/current_user_store'

const databaseUrl = inject('databaseUrl')

const storeUser = useCurrentUserStore()

const router = new useRouter()

// const _email = ref('')
const _username = ref('')
const _password = ref('')

async function signIn(evt) {
  evt.preventDefault()
  console.log(1)

  if (!validateLogin(_username.value)) {
    console.error('Неправильно введён логин')
    return
  }

  if (!validatePassword(_password.value)) {
    console.error('Пароль не соответствует требованиям')
    return
  }
  // storeUser.changeLoggedState()
  // storeUser.changeUsername(_username.value)
  // console.log(response.data.access_token)
  // storeUser.changeAccessToken(response.data.access_token)

  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios
      .post(databaseUrl + 'users/token', {
        username: _username.value,
        password: _password.value
      })
      .then(function (response) {
        console.log(response)
        if (response.status === 200) {
          console.log('Authorisation successful')
          storeUser.changeLoggedState()
          storeUser.changeUsername(_username.value)
          storeUser.changeAccessToken(response.data.access_token)
          router.push('/profile')
          document.getElementById('my_modal_3').close()
        } else {
          alert('Authorisation failed')
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
  <dialog id="my_modal_3" class="modal">
    <div class="modal-box flex flex-col items-center">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2">✕</button>
      </form>
      <h3 class="font-bold text-lg btn-sm m-2">Вход</h3>
      <form class="space-y-4 flex justify-center flex-col" @submit="signIn">
        <!-- <label class="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-4 h-4 opacity-70"
          >
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
            />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
            />
          </svg>
          <input type="text" class="grow" placeholder="Email" v-modal="_email"/>
        </label> -->
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
            <span class="marg-er text-dark-red text-xs" v-if="!validateLogin(_username)"
              >Длина логина должна быть больше 3 и меньше 25 символов <br />и состоять из
              латиницы</span
            >
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
            <input type="password" placeholder="Пароль" class="grow" value="" v-model="_password" />
          </label>
          <div class="h-er">
            <span class="marg-er text-dark-red text-xs" v-if="!validatePassword(_password)"
              >Длина пароля должна быть больше 8 и меньше 25 символов, <br />
              состоять из заглавных и строчных букв латиницы, <br />
              содержать специальные символы</span
            >
          </div>
        </div>

        <!-- <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">ЗАПОМНИТЬ МЕНЯ</span>
            <input
              type="checkbox"
              checked="checked"
              class="checkbox"
              v-model="_remember_me"
              @change="changePersist"
            />
          </label>
        </div> -->
        <button class="btn btn-md bordered text-xl" type="submit">войти</button>
      </form>
    </div>
  </dialog>
</template>
