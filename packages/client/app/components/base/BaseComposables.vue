<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="absolute top-28 left-5 flex flex-col gap-2.5 text-lg">
    <p>X: {{ x }}</p>
    <p>Y: {{ y }}</p>
  </div>
</template>
