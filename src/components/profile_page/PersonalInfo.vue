<script setup>
//Персональная информация

import { useCurrentUserStore } from '@/stores/current_user_store'
const storeUser = useCurrentUserStore()
</script>

<template>
  <section
    class="flex items-center bg-base-300 border-2 rounded rounded-box mb-6 space-x-3xs border-black px-4 py-2"
  >
    <div class="avatar">
      <div class="border-2 bg-primary/50 border-black w-3xs rounded-full">
        <img src="./icons/avatar.png" />
      </div>
    </div>

    <div class="">
      <p class="text-primary/50 text-sm font-bold">НИКНЕЙМ</p>
      <span class="text-sm">{{ storeUser.username }}</span>
      <input
        type="text"
        value="rwerrx"
        class="hidden py-1 bg-base-300/40 w-5/6 rounded-sm"
        placeholder="никнейм"
      />
    </div>

    <div class="">
      <p class="text-primary/50 text-sm font-bold">EMAIL</p>
      <span class="text-sm">qew@sllslssl.com</span>
    </div>
  </section>
</template>
