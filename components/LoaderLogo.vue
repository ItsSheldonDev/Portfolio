<template>
    <div class="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
      <div class="relative w-40 h-40 flex items-center justify-center">

        <Logo 
          :width="120" 
          :height="56" 
          class="animate-pulse z-10"
        />
        
        <div class="absolute w-full h-full">
          <div 
            class="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-violet-500/20 rounded-full animate-spin-slow blur-xl"
            style="width: 180px; height: 180px; left: 50%; top: 50%; transform: translate(-50%, -50%)"
          ></div>
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
      transform: translate(-50%, -50%) rotate(0deg) scale(0.95);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.05);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(0.95);
    }
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  </style>