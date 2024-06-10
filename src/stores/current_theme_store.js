// import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('Theme', {
  state: () => ({
    currentTheme: 'dark'
  }),
  actions: {
    changeTheme(theme) {
      this.currentTheme = theme
    }
  },
  persist: true
})
