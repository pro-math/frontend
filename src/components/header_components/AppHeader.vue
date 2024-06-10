<script setup>
//Хедер (один для всей страницы)

import ThemeChoosingMenu from './ThemeChoosingMenu.vue'
import AuthorisationContainer from './authorisation_registration/AuthorisationContainer.vue'
import ProfileButton from './ProfileButton.vue'
import { useCurrentUserStore } from '@/stores/current_user_store'

const store = useCurrentUserStore()
</script>

<template>
  
    <header>
      <nav class="flex justify-between items-center p-3">
        <div class="dropdown lg:hidden">
          <div tabindex="1" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <div tabindex="1" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2">
            
              <RouterLink to="/rating"><span class="btn btn-sm w-4xs"> Рейтинги </span></RouterLink>
            

            <!-- <AuthorisationContainer v-if="!store.isLogged"  class="flex-col space-y-2"/> -->

          </div>

        </div>
        
    
        <RouterLink to="/">
          <div class="logo">
            <h1 class="font-bold text-xl lg:text-3xl col-auto">ProMath</h1>
          </div>
        </RouterLink>
        <div class="flex flex-nowrap items-center space-x-5 lg:space-x-2">
          <ThemeChoosingMenu class=""/>

          <div >
            <div class="reg-log flex items-center space-x-2">
              
              <div  class="hidden lg:flex">
                <RouterLink to="/rating"><span class="btn btn-sm w-4xs"> Рейтинги </span></RouterLink>
              </div>
              <AuthorisationContainer v-if="!store.isLogged" />
            </div>
          </div>
          <RouterLink to="/profile"><ProfileButton v-if="store.isLogged" class="" /></RouterLink>

        </div>
        
      </nav>
    </header>

</template>
