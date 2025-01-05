<template>
  <div class="mb-32">
    <div class="text-center mb-16">
      <SectionTitle title="APERÇU" subtitle="Mes Réalisations" />
    </div>
 
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Dark Mode -->
      <div v-for="lang in displayLanguages" :key="lang.name"
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10 hover:border-violet-500/50 overflow-hidden
          dark:block hidden transform hover:scale-[1.02]"
      >
        <a :href="lang.url" target="_blank" rel="noopener noreferrer" class="block">
          <div class="flex flex-col items-center gap-4">
            <Icon 
              :name="getLanguageIcon(lang.name)" 
              class="w-12 h-12 text-gray-400 group-hover:text-violet-400 transition-all duration-500 transform group-hover:scale-110" 
            />
            <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ lang.percentage }}% des projets
            </span>
          </div>
        </a>
        <!-- Effet de brillance au hover -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-xl"></div>
        </div>
      </div>
 
      <!-- Light Mode -->
      <div v-for="lang in displayLanguages" :key="lang.name"
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500 overflow-hidden
          bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700
          dark:hidden transform hover:scale-[1.02]"
      >
        <a :href="lang.url" target="_blank" rel="noopener noreferrer" class="block">
          <div class="flex flex-col items-center gap-4">
            <Icon 
              :name="getLanguageIcon(lang.name)" 
              class="w-12 h-12 text-white group-hover:text-white/90 transition-all duration-500 transform group-hover:scale-110" 
            />
            <span class="text-sm text-white/70 group-hover:text-white/80 transition-colors">
              {{ lang.percentage }}% des projets
            </span>
          </div>
        </a>
        <!-- Effet de brillance au hover -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
          <div class="absolute inset-0 bg-white/10 blur-xl"></div>
        </div>
      </div>
    </div>
 
    <div class="text-center mt-12">
      <NuxtLink to="/projects">
        <AnimatedButton 
          variant="ghost" 
          class="group"
        >
          <span class="flex items-center gap-2">
            Explorer tous mes projets
            <Icon 
              name="heroicons:arrow-right" 
              class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            />
          </span>
        </AnimatedButton>
      </NuxtLink>
    </div>
  </div>
</template>
 
<script setup>
import SectionTitle from '~/components/common/SectionTitle.vue'
import AnimatedButton from '~/components/ui/AnimatedButton.vue'
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