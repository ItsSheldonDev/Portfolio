<template>
  <div 
   class="group relative overflow-hidden p-5 rounded-xl backdrop-blur-sm border transition-all duration-500
   bg-[#111]/50 border-white/10 hover:border-violet-500/50 transform hover:-translate-y-1
   animate-fade-in-up opacity-0"
 >
    
    <!-- Image preview avec parallax -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute inset-[-1.5rem] blur-3xl rounded-[40px] animate-smoke bg-violet-900/20"></div>
      <div class="absolute inset-[1.3rem] blur-2xl rounded-[30px] animate-glow bg-violet-600/15"></div>
    </div>

    <!-- En-tête -->
    <div class="flex items-start justify-between mb-4">
      <div class="flex items-center gap-3">
        <div class="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-violet-500/20 transition-colors">
          <Icon 
            :name="isPrivate ? 'heroicons:lock-closed' : 'heroicons:book'" 
            class="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform"
          />
        </div>
        <div>
          <h3 class="font-display font-semibold text-lg text-white group-hover:text-violet-400 transition-colors">
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
        class="p-2 rounded-lg hover:bg-white/10 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300"
      >
        <Icon name="heroicons:arrow-top-right-on-square" class="w-5 h-5 text-gray-400 hover:text-white hover:scale-110 transition-all" />
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
        class="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300 
          group-hover:border-violet-500/20 transition-all hover:scale-105 hover:bg-white/10"
      >
        {{ topic }}
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between text-sm text-gray-500">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 group-hover:text-violet-400 transition-colors">
          <Icon name="heroicons:star" class="w-4 h-4" />
          {{ stargazers_count }}
        </div>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:clock" class="w-4 h-4" />
          {{ formatDate(updated_at) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getLanguageIcon } from '~/types/icon'

const props = defineProps({
  id: String,
  name: String,
  description: String,
  html_url: String,
  language: String,
  stargazers_count: Number,
  topics: Array,
  updated_at: String,
  private: Boolean
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

@keyframes fadeInUp {
 from {
   opacity: 0;
   transform: translateY(20px);
 }
 to {
   opacity: 1;
   transform: translateY(0);
 }
}

.animate-fade-in-up {
 animation: fadeInUp 0.6s ease-out forwards;
 animation-delay: calc(var(--animation-order, 0) * 100ms);
}

.animate-smoke {
  animation: smoke 10s ease-in-out infinite;
}

.animate-glow {
  animation: glow 5s ease-in-out infinite;
}
</style>