<script setup lang="ts">
const head = useLocaleHead()
const alertsStore = useAlertsStore()

onMounted(() => {
  alertsStore.addAlert({
    type: 'success',
    message: 'App mounted successfully',
  })
})
</script>

<template>
  <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir" />
  <div class="flex flex-col h-dvh">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
