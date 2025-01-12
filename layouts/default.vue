<!-- layouts/default.vue -->
<template>
  <div :class="colorMode.value" class="min-h-screen">
    <BackgroundGradient />
    <CommonTheHeader />
    <ClientOnly>
      <UiSmoothScroll class="h-[calc(100vh-var(--header-height))]">
        <main class="pt-20">
          <slot />
        </main>
        <CommonTheFooter />
      </UiSmoothScroll>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
</script>

<style>
.min-h-screen {
  min-height: 100vh;
  min-height: 100dvh;
}

:root {
  --header-height: 80px;
}

html.has-scroll-smooth {
  overflow: hidden;
}

[data-scroll-container] {
  width: 100%;
  height: 100%;
}
</style>