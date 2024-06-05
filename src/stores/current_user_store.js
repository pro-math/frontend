import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore('CurrentUserStore', () => {
  const isLogged = ref(false)
  const username = ref('')
  return { isLogged, username }
})
