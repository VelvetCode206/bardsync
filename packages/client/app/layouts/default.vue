<template>
  <div class="flex flex-col justify-center items-center gap-4 h-full">
    <h1 class="text-4xl font-medium">
      {{ $t('general.app-name') }}
    </h1>
    <ChangeColorMode />
    <slot />
  </div>
</template>
