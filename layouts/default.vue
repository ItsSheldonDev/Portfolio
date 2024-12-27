<template>
  <div :class="colorMode.value">
    <div class="min-h-screen transition-all duration-300">
      <BackgroundGradient />
      <TheHeader />
      <main class="pt-20">
        <NuxtPage />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>