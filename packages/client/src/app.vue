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
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
