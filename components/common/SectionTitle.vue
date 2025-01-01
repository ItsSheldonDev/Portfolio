<!-- components/common/SectionTitle.vue -->
<template>
    <div>
      <span class="text-sm font-medium tracking-wider text-gray-400 dark:text-gray-500 mb-4 block">
        {{ title }}
      </span>
      <h2 class="text-4xl md:text-5xl font-display font-bold mb-6 text-black dark:text-white">
        {{ subtitle }}
      </h2>
    </div>
   </template>
   
   <script setup>
   defineProps({
    title: String,
    subtitle: String
   })
   </script>