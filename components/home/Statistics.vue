<template>
  <div class="mb-32">
    <SectionTitle title="STATISTIQUES" subtitle="Mes Chiffres" />
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <div v-for="(value, key) in displayStats" :key="key" 
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          dark:bg-[#111]/50 dark:border-white/10
          bg-[#171420] border-gray-700 
          hover:border-violet-500/50 text-center"
      >
        <!-- Effet de fumée pour chaque carte -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-[-3rem] bg-black/60 blur-3xl rounded-[40px] animate-smoke"></div>
          <div class="absolute inset-[-2rem] bg-gradient-to-t from-violet-900/40 to-transparent blur-2xl rounded-[30px] animate-glow"></div>
        </div>
 
        <div class="text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
          <template v-if="key === 'language'">
            <Icon :name="getLanguageIcon(value.count)" class="w-12 h-12" />
          </template>
          <template v-else>
            <div class="flex items-center justify-center gap-2">
              <Icon :name="statIcons[key]" class="w-8 h-8" />
              {{ value.count }}
            </div>
          </template>
        </div>
        <div class="text-gray-400 group-hover:text-gray-300 transition-colors">{{ value.label }}</div>
      </div>
    </div>
  </div>
 </template>
 
 <script setup>
 import { getLanguageIcon } from '~/types/icon'
 
 const { stats } = useGithubStats()
 
 const statIcons = {
  projects: 'heroicons:folder',
  stars: 'heroicons:star',
  forks: 'heroicons:arrow-path'
 }
 
 const displayStats = computed(() => ({
  projects: {
    count: stats.value.totalProjects,
    label: 'Projets'
  },
  stars: {
    count: stats.value.totalStars,
    label: 'Stars'
  },
  forks: {
    count: stats.value.totalForks,
    label: 'Forks'
  },
  language: {
    count: stats.value.mainLanguage,
    label: 'Language Principal'
  }
 }))
 </script>
 
 <style scoped>
 @keyframes smoke {
  0%, 100% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px) scale(1.15);
    opacity: 0.4;
  }
 }
 
 @keyframes glow {
  0%, 100% {
    opacity: 0.4;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.1);
  }
 }
 
 .animate-smoke {
  animation: smoke 10s ease-in-out infinite;
 }
 
 .animate-glow {
  animation: glow 5s ease-in-out infinite;
 }
 </style>