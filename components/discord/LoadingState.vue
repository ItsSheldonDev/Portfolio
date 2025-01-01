<template>
    <div class="flex items-center gap-6">
      <div :class="[
        'w-16 h-16 rounded-full animate-pulse',
        theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
      ]" />
      <div class="flex-1">
        <div :class="[
          'h-6 w-32 rounded animate-pulse mb-3',
          theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
        ]" />
        <div :class="[
          'h-4 w-24 rounded animate-pulse',
          theme === 'dark' ? 'bg-white/10' : 'bg-white/20'
        ]" />
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps(['theme'])
  </script>