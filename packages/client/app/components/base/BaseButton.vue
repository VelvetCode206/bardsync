<script setup lang="ts">
const { message, action } = defineProps<{
  message: string
  action: () => void
}>()
</script>

<template>
  <button class="px-4 py-3 rounded-md border border-black shadow-sm leading-none" @click="action">
    {{ message }}
  </button>
</template>
