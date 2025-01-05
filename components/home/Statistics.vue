<template>
  <div class="mb-32">
    <UiScrollReveal>
      <div class="text-center mb-16">
        <CommonSectionTitle title="STATISTIQUES" subtitle="Mes Chiffres" />
      </div>
    </UiScrollReveal>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Dark Mode -->
      <div v-for="(value, key, index) in displayStats" :key="key" 
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10 hover:border-violet-500/50 text-center transform hover:scale-[1.02]
          dark:block hidden"
      >
        <UiScrollReveal direction="up" :delay="index * 150">
          <div class="h-40 flex flex-col items-center justify-center">
            <div class="text-4xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
              <template v-if="key === 'language'">
                <Icon :name="getLanguageIcon(value.count as string)" class="w-12 h-12" />
              </template>
              <template v-else>
                <div class="flex items-center justify-center gap-2">
                  <Icon :name="statIcons[key as keyof typeof statIcons]" class="w-8 h-8" />
                  <span>{{ value.count }}</span>
                </div>
              </template>
            </div>
            <div class="text-gray-400 group-hover:text-gray-300 transition-colors">{{ value.label }}</div>
          </div>
        </UiScrollReveal>
      </div>

      <!-- Light Mode -->
      <div v-for="(value, key, index) in displayStats" :key="key" 
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
          bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-center
          dark:hidden"
      >
        <UiScrollReveal direction="up" :delay="index * 150">
          <div class="h-40 flex flex-col items-center justify-center">
            <div class="text-4xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors">
              <template v-if="key === 'language'">
                <Icon :name="getLanguageIcon(value.count as string)" class="w-12 h-12" />
              </template>
              <template v-else>
                <div class="flex items-center justify-center gap-2">
                  <Icon :name="statIcons[key as keyof typeof statIcons]" class="w-8 h-8" />
                  <span>{{ value.count }}</span>
                </div>
              </template>
            </div>
            <div class="text-white/70 group-hover:text-white/80 transition-colors">{{ value.label }}</div>
          </div>
        </UiScrollReveal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ComputedRef } from 'vue'
import { getLanguageIcon } from '~/types/icon'
import CommonSectionTitle from '~/components/common/SectionTitle.vue'
import UiScrollReveal from '~/components/ui/ScrollReveal.vue'

const { stats } = useGithubStats()

const statIcons = {
  projects: 'heroicons:folder',
  stars: 'heroicons:star', 
  forks: 'heroicons:arrow-path'
} as const

interface StatValue {
  count: number | string;
  label: string;
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