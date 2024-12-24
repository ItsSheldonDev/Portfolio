<template>
    <div aria-hidden="true" class="fixed inset-0 -z-10 overflow-hidden">
      <!-- Fond sombre avec grain -->
      <div class="absolute inset-0 bg-gray-950/95" />
      
      <!-- Blobs animés -->
      <div class="absolute top-[5%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/30 mix-blend-multiply filter blur-[80px] animate-blob-spin"></div>
      <div class="absolute top-[15%] left-[15%] w-[600px] h-[600px] rounded-full bg-indigo-500/30 mix-blend-multiply filter blur-[100px] animate-blob-float"></div>
      <div class="absolute bottom-[20%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-500/30 mix-blend-multiply filter blur-[80px] animate-blob-spin-slow"></div>
      <div class="absolute bottom-[10%] right-[20%] w-[550px] h-[550px] rounded-full bg-violet-500/30 mix-blend-multiply filter blur-[90px] animate-blob-float-slow"></div>
    </div>
  </template>
  
  <style scoped>
  @keyframes blobSpin {
    0% { transform: rotate(0deg) translate(0, 0) scale(1); }
    33% { transform: rotate(120deg) translate(50px, -50px) scale(1.2); }
    66% { transform: rotate(240deg) translate(-50px, 50px) scale(0.8); }
    100% { transform: rotate(360deg) translate(0, 0) scale(1); }
  }
  
  @keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(30px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(40px, 30px) scale(1.05); }
  }
  
  .animate-blob-spin {
    animation: blobSpin 25s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  
  .animate-blob-spin-slow {
    animation: blobSpin 30s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
  }
  
  .animate-blob-float {
    animation: blobFloat 20s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
  
  .animate-blob-float-slow {
    animation: blobFloat 25s cubic-bezier(0.4, 0, 0.2, 1) infinite reverse;
  }
  </style>