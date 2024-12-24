<template>
  <NuxtLayout>
    <LoaderLogo v-if="isLoading" />
    <NuxtPage v-else />
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