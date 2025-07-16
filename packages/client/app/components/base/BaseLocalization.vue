<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <div class="absolute left-5 top-48 flex flex-col items-start gap-2">
    <p class="uppercase font-medium text-2xl">
      {{ $t('pages.home.title') }}
    </p>
    <BaseButton
      :message="`${$t('general.language')} en`" :action="() => setLocale('en')"
    />
    <BaseButton
      :message="`${$t('general.language')} pt`" :action="() => setLocale('pt')"
    />
  </div>
</template>
