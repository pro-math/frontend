<script setup>
//Меню выбора темы

import { useThemeStore } from '@/stores/current_theme_store'

const storeTheme = useThemeStore()
</script>

<template>
  <div class="dropdown navbar-start mb-72">
    <div tabindex="1" role="button" class="btn btn-sm m-1 w-4xs">
      Тема
      <svg
        width="12px"
        height="12px"
        class="h-2 w-2 fill-current opacity-60 inline-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2048 2048"
      >
        <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
      </svg>
    </div>
    <ul tabindex="1" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Moonlight"
          value="default"
          @click="storeTheme.changeTheme('dark')"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Сupcake"
          value="cupcake"
          @click="storeTheme.changeTheme('cupcake')"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Valentine"
          value="valentine"
          @click="storeTheme.changeTheme('valentine')"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Emerald"
          value="emerald"
          @click="storeTheme.changeTheme('emerald')"
        />
      </li>
      <li>
        <input
          type="radio"
          name="theme-dropdown"
          class="btn btn-sm btn-block btn-ghost justify-start"
          aria-label="Corporate"
          value="corporate"
          @click="storeTheme.changeTheme('corporate')"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
