<template>
  <div class="group relative overflow-hidden p-6 rounded-xl bg-[#111]/50 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-500">
    <!-- Effet de brillance au hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
      <div class="absolute inset-[-100%] bg-gradient-to-r from-transparent via-violet-500/10 to-transparent animate-shimmer"></div>
    </div>

    <!-- En-tête du projet -->
    <div class="flex items-start justify-between mb-4 relative">
      <div class="flex items-center gap-3">
        <div class="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-violet-500/20 transition-colors">
          <Icon 
            :name="isPrivate ? 'heroicons:lock-closed' : 'heroicons:book'" 
            class="w-5 h-5 text-violet-400"
          />
        </div>
        <div>
    <h3 class="font-display font-semibold text-lg group-hover:text-violet-400 transition-colors">
      {{ name }}
    </h3>
    <span class="text-sm text-gray-500 flex items-center gap-2">
      <Icon :name="getLanguageIcon(language)" class="w-4 h-4" />
      {{ language }}
    </span>
  </div>
      </div>

      <a 
        :href="html_url" 
        target="_blank"
        rel="noopener noreferrer"
        class="p-2 rounded-lg hover:bg-white/10 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
      >
        <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 text-gray-400 hover:text-white" />
      </a>
    </div>

    <!-- Description -->
    <p class="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-300 transition-colors">
      {{ description || "Aucune description" }}
    </p>

    <!-- Technologies -->
    <div class="flex flex-wrap gap-2 mb-6">
      <div 
        v-for="topic in topics"
        :key="topic"
        class="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet-500/20 transition-colors"
      >
        {{ topic }}
      </div>
    </div>

    <!-- Métadonnées -->
    <div class="flex items-center gap-6 text-sm text-gray-500">
      <div class="flex items-center gap-2 group-hover:text-violet-400 transition-colors">
        <Icon name="heroicons:star" class="w-4 h-4" />
        {{ stargazers_count }}
      </div>
      <div class="flex items-center gap-2">
        <Icon name="heroicons:clock" class="w-4 h-4" />
        {{ formatDate(updated_at) }}
      </div>
    </div>

    <!-- Overlay de hover -->
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
  </div>
</template>

<script setup>
import { getLanguageIcon } from '~/types/icon'

const props = defineProps({
  name: String,
  description: String,
  html_url: String,
  language: String,
  stargazers_count: Number,
  topics: Array,
  updated_at: String,
  isPrivate: Boolean
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}
</script>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>