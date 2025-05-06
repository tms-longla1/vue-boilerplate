<template>
  <RouterView v-if="isReady" />
</template>

<script setup lang="tsx">
import { getMe } from '@/apis/auth.api'
import { useAuthStore } from '@/stores/auth.store'
import { useQuery } from '@tanstack/vue-query'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const withoutAuthRoutes = ['/login']
const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

const isReady = ref(false)

const { data: getMeResponse, isLoading } = useQuery({
  queryKey: ['me'],
  queryFn: () => getMe()
})

const profile = computed(() => getMeResponse.value?.data)

watch(profile, (profile) => {
  if (profile) {
    authStore.setUser(profile)
  }
})

watch(isLoading, (isLoading) => {
  if (isLoading) return

  if (!profile.value && !withoutAuthRoutes.includes(route.path)) {
    router.push('/login')
  }

  if (profile.value && withoutAuthRoutes.includes(route.path)) {
    router.push('/')
  }

  isReady.value = true
})
</script>
