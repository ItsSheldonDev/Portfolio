<template>
  <div class="mb-32">
    <div class="text-center mb-16">
      <SectionTitle title="APERÇU" subtitle="Mes Réalisations" />
    </div>
 
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Dark Mode -->
      <div v-for="lang in displayLanguages" :key="lang.name"
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10 hover:border-violet-500/50
          dark:block hidden transform hover:scale-[1.02]"
      >
        <a :href="lang.url" target="_blank" class="block">
          <div class="flex flex-col items-center gap-4">
            <Icon 
              :name="getLanguageIcon(lang.name)" 
              class="w-12 h-12 text-gray-400 group-hover:text-violet-400 transition-colors duration-500" 
            />
            <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ lang.percentage }}% des projets
            </span>
          </div>
        </a>
      </div>
 
      <!-- Light Mode -->
      <div v-for="lang in displayLanguages" :key="lang.name"
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
          bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700
          dark:hidden transform hover:scale-[1.02]"
      >
        <a :href="lang.url" target="_blank" class="block">
          <div class="flex flex-col items-center gap-4">
            <Icon 
              :name="getLanguageIcon(lang.name)" 
              class="w-12 h-12 text-white group-hover:text-white/90 transition-colors duration-500" 
            />
            <span class="text-sm text-white/70 group-hover:text-white/80 transition-colors">
              {{ lang.percentage }}% des projets
            </span>
          </div>
        </a>
      </div>
    </div>
 
    <div class="text-center mt-12">
      <UButton 
        to="/projects" 
        variant="ghost" 
        class="group hover:scale-105 transition-all duration-300"
      >
        Explorer tous mes projets
        <template #trailing>
          <Icon name="heroicons:arrow-right" 
            class="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </template>
      </UButton>
    </div>
  </div>
 </template>
 
 <script setup>
 import { getLanguageIcon } from '~/types/icon'
 const { stats } = useGithubStats()
 
 const displayLanguages = computed(() => 
  stats.value.topLanguages.map(lang => ({
    name: lang.name,
    percentage: lang.percentage,
    url: `https://github.com/ItsSheldonDev?tab=repositories&language=${lang.name.toLowerCase()}`
  }))
 )
 </script>