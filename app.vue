<template>
  <div>
    <LoaderLogo v-if="isLoading" />
    <NuxtLayout name="default" v-else />
  </div>
</template>

<script setup>
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>