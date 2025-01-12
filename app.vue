<!-- app.vue -->
<template>
  <NuxtLayout name="custom">
    <CommonLoaderLogo v-if="isLoading" />
    
    <NuxtLayout v-else name="default">
      <NuxtPage />
    </NuxtLayout>
  </NuxtLayout>
</template>

<script setup>
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>