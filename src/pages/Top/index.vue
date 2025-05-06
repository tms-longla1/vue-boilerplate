<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h1
      class="flex justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-5xl leading-tight text-transparent"
    >
      Hi {{ authStore.user?.username }}
    </h1>
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Top Contestants</h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white px-4 py-8 shadow-sm sm:rounded-lg sm:px-10">
      <div class="space-y-6">
        <div
          v-for="(contestant, index) in contestants"
          :key="index"
          class="flex items-center justify-between border-b p-4"
        >
          <div class="flex items-center">
            <span class="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
              {{ index + 1 }}
            </span>
            <span class="ml-4 font-medium text-gray-900">{{ contestant.name }}</span>
          </div>
          <div class="font-semibold text-indigo-600">{{ contestant.score }} points</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store'

const authStore = useAuthStore()

const contestants = [
  { name: 'Kim Ho Joong', score: 98 },
  { name: 'Lim Young Woong', score: 95 },
  { name: 'Young Tak', score: 92 },
  { name: 'Lee Chan Won', score: 90 },
  { name: 'Jung Dong Won', score: 88 }
]
</script>
