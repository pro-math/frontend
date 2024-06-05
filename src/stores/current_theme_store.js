import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCurrentTheme = defineStore('CurrentTheme', () => {
  const currentTheme = ref('')
  return { currentTheme}
})
