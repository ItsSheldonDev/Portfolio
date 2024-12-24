<template>
  <div :class="{ 'dark': colorMode.value === 'dark' }">
    <div class="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <BackgroundGradient />
      <TheHeader />
      <main class="pt-20">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>