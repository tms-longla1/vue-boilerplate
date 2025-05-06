import type { TUser } from '@/types/auth.type'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<TUser | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  const setUser = (userData: TUser) => {
    user.value = userData
  }

  return {
    user,
    isAuthenticated,

    setUser
  }
})
