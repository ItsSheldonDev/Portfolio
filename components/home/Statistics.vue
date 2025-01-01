<template>
  <div class="mb-32">
    <SectionTitle title="STATISTIQUES" subtitle="Mes Chiffres" />
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Dark Mode -->
      <div v-for="(value, key) in displayStats" :key="key" 
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10 hover:border-violet-500/50 text-center transform hover:scale-[1.02]
          dark:block hidden"
      >
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
 
      <!-- Light Mode -->
      <div v-for="(value, key) in displayStats" :key="key" 
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
          bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-center
          dark:hidden transform hover:scale-[1.02]"
      >
        <div class="text-4xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
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
        <div class="text-white/70 group-hover:text-white/80 transition-colors">{{ value.label }}</div>
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
 
 const displayStats = computed(() => {
  const topLang = stats.value.topLanguages[0]
  
  return {
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
      count: topLang?.name || '',
      label: 'Language Principal'
    }
  }
 })
 </script>