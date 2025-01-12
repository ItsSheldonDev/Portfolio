<template>
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center">
        <h1 class="text-9xl font-display font-bold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
          404
        </h1>
        <p class="mt-4 text-2xl text-gray-400">Page introuvable</p>
        <p class="mt-2 text-gray-500 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div class="mt-8">
          <UButton 
            to="/" 
            variant="ghost" 
            color="gray"
            class="group"
          >
            Retour à l'accueil
            <template #trailing>
              <UIcon name="i-heroicons-arrow-right" class="transition-transform duration-300 group-hover:translate-x-1" />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    error: Object
  })
  </script>