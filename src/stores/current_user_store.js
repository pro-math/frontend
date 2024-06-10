// import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useCurrentUserStore = defineStore("currentUserStore", {
  state: () => ({
    isLogged: false,
    username: '',
    accessToken: ''
  }),
  actions: {
    changeLoggedState() {
      this.isLogged = !this.isLogged
    },
    changeUsername(newUsername) {
      this.username = newUsername
    },
    changeAccessToken(newAccessToken) {
      this.accessToken = newAccessToken
    }
  },
  persist: true
})
