<script setup>
import ThemeChoosingMenu from './ThemeChoosingMenu.vue'
import AuthorisationContainer from './AuthorisationContainer.vue'
import ProfileButton from './ProfileButton.vue'
</script>

<template>
  <header>
    <nav class="flex justify-between p-3">
      <RouterLink to="/">
        <div class="logo">
          <h1 class="font-bold text-3xl col-auto">ProMath</h1>
        </div>
      </RouterLink>
      <div>
        <div class="reg-log flex items-center space-x-2">
          <ThemeChoosingMenu />
          <AuthorisationContainer />
          <RouterLink to="/profile"><ProfileButton /></RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>
