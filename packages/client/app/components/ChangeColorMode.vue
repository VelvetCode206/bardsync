<script setup lang="ts">
const colorMode = useColorMode()

enum ColorModeName {
  SYSTEM = 'system',
  LIGHT = 'light',
  DARK = 'dark',
  RETRO = 'retro',
}

interface ColorModeOption {
  name: ColorModeName
  icon: string
  selected: boolean
}

const colorModeOptions = ref<ColorModeOption[]>(Object.values(ColorModeName).map(name => ({
  name,
  icon: getColorModeIcon(name),
  selected: false,
})))

function getColorModeIcon(value: ColorModeName) {
  switch (value) {
    case ColorModeName.SYSTEM:
      return 'carbon:screen'
    case ColorModeName.LIGHT:
      return 'carbon:sun'
    case ColorModeName.DARK:
      return 'carbon:moon'
    case ColorModeName.RETRO:
      return 'carbon:camera-action'
    default:
      return 'carbon:screen'
  }
}

function setColorModePreference(value: ColorModeName) {
  colorMode.preference = value
  updateSelectedOption()
}

/**
 * Necessary abstraction due to colorMode.preference having a
 * different initial value than the one at the localstorage.
 */
function updateSelectedOption() {
  colorModeOptions.value.forEach((option) => {
    option.selected = option.name === colorMode.preference
  })
}

onMounted(() => {
  updateSelectedOption()
})
</script>

<template>
  <div class="flex gap-4 text-3xl">
    <button
      v-for="option in colorModeOptions" :key="option.name"
      :class="{ 'opacity-50': !option.selected }" @click.prevent="setColorModePreference(option.name)"
    >
      <Icon :name="option.icon" />
    </button>
  </div>
</template>
