<template>
  <div>
    <LoaderLogo v-if="isLoading" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import LoaderLogo from '~/components/common/LoaderLogo.vue'

const isLoading = ref(true)

onMounted(() => {
  // Ajoute le smooth scroll
  document.documentElement.style.scrollBehavior = 'smooth'
  
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

onUnmounted(() => {
  // Nettoie la propriété au démontage
  document.documentElement.style.scrollBehavior = ''
})
</script>

<style>
html {
  overflow-y: auto;
}
</style>