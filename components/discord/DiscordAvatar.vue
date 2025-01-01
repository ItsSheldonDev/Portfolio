<template>
    <div class="relative">
      <img 
        :src="getAvatarUrl(user)"
        :alt="user.username"
        class="w-16 h-16 rounded-full"
      />
      <span 
        :class="[
          'absolute bottom-0 right-0 w-4 h-4 rounded-full border-2',
          statusColor[status],
          theme === 'dark' ? 'border-[#111]' : 'border-[#3B82F6]'
        ]"
      />
    </div>
  </template>
  
  <script setup>
  const { getAvatarUrl, statusColor } = inject('discord')
  defineProps(['user', 'status', 'theme'])
  </script>