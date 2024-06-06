// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentUserStore = defineStore({
  id: 'currentUser',
  state: () => ({
    isLogged: false,
    username: ''
  }),
  actions: {
    changeLoggedState() {
      this.isLogged = !this.isLogged
    },
    changeUsername(newUsername) {
      this.username = newUsername
    }
  },
  persist: true
})
