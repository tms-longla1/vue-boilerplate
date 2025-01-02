<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import Default from '@/layouts/Default.vue'
import UnAuth from '@/layouts/UnAuth.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const layout = computed(() => {
  switch (route.meta.layout) {
    case 'Default':
      return Default
    case 'UnAuth':
      return UnAuth
    default:
      return Default
  }
})
</script>
