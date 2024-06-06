<script setup>

//Хедер (один для всей страницы)

import ThemeChoosingMenu from './ThemeChoosingMenu.vue'
import AuthorisationContainer from './authorisation_registration/AuthorisationContainer.vue'
import ProfileButton from './ProfileButton.vue'
import { useCurrentUserStore } from '@/stores/current_user_store';

const store = useCurrentUserStore()
</script>

<template>
  <header>
    <nav class="flex justify-between items-center p-3">
      <RouterLink to="/">
        <div class="logo">
          <h1 class="font-bold text-3xl col-auto">ProMath</h1>
        </div>
      </RouterLink>
      <div>
        <div class="reg-log flex items-center space-x-2">
          <ThemeChoosingMenu />
          <AuthorisationContainer v-if="!store.isLogged"/>
          <RouterLink to="/profile"><ProfileButton v-if="store.isLogged"/></RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
