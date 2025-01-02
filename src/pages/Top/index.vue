<template>
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Top Contestants</h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div class="space-y-6">
        <div
          v-for="(contestant, index) in contestants"
          :key="index"
          class="flex items-center justify-between p-4 border-b"
        >
          <div class="flex items-center">
            <span class="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
              {{ index + 1 }}
            </span>
            <span class="ml-4 text-gray-900 font-medium">{{ contestant.name }}</span>
          </div>
          <div class="text-indigo-600 font-semibold">{{ contestant.score }} points</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Mock data for demonstration
const contestants = [
  { name: 'Kim Ho Joong', score: 98 },
  { name: 'Lim Young Woong', score: 95 },
  { name: 'Young Tak', score: 92 },
  { name: 'Lee Chan Won', score: 90 },
  { name: 'Jung Dong Won', score: 88 }
]
</script>
