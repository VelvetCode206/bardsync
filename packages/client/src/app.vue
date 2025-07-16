<script setup lang="ts">
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
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <BaseIcons />
    <BaseImages />
    <BaseComposables />
    <AlertsList />
  </div>
</template>
