<template>
    <div class="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      <div class="relative">
        <!-- Logo avec animation -->
        <Logo 
          :width="120" 
          :height="56" 
          class="animate-pulse"
        />
        
        <!-- Cercle lumineux animé -->
        <div class="absolute -inset-4">
          <div class="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 rounded-full animate-spin-slow blur-xl">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  </script>
  
  <style scoped>
  @keyframes spin-slow {
    0% {
      transform: rotate(0deg) scale(0.95);
    }
    50% {
      transform: rotate(180deg) scale(1.05);
    }
    100% {
      transform: rotate(360deg) scale(0.95);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  </style>