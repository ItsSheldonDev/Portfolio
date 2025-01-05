<template>
  <div :class="colorMode.value">
    <BackgroundGradient />
    <CommonTheHeader />
    <UiSmoothScroll>
      <main class="pt-20">
        <slot />
      </main>
      <CommonTheFooter />
    </UiSmoothScroll>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>