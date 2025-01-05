<template>
  <div 
    class="group relative overflow-hidden p-5 rounded-xl backdrop-blur-sm transition-all duration-500 animate-fade-in-up opacity-0 transform hover:scale-[1.02]"
    :class="colorMode.value === 'dark' 
      ? 'bg-[#111]/50 border border-white/10 hover:border-violet-500/50'
      : 'bg-gradient-to-r from-[#3B82F6] to-[#7C3AED] hover:from-[#2563EB] hover:to-[#6D28D9]'"
  >
    <!-- État d'erreur -->
    <div v-if="error" class="text-center">
      <Icon name="heroicons:exclamation-circle" class="w-8 h-8 mx-auto mb-2" />
      <p :class="colorMode.value === 'dark' ? 'text-gray-400' : 'text-white/70'">
        Impossible de charger ce projet
      </p>
    </div>
 
    <!-- État de chargement -->
    <div v-else-if="loading" class="space-y-4 animate-pulse">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gray-700/50"></div>
        <div class="flex-1">
          <div class="h-5 w-32 bg-gray-700/50 rounded mb-2"></div>
          <div class="h-4 w-24 bg-gray-700/50 rounded"></div>
        </div>
      </div>
      <div class="h-12 bg-gray-700/50 rounded"></div>
      <div class="flex gap-2">
        <div class="h-6 w-16 bg-gray-700/50 rounded-full"></div>
        <div class="h-6 w-20 bg-gray-700/50 rounded-full"></div>
      </div>
    </div>
 
    <!-- Contenu normal -->
    <template v-else>
      <div class="flex items-start justify-between mb-4">
        <div class="flex items-center gap-3">
          <div 
            class="p-2 rounded-lg transition-colors"
            :class="colorMode.value === 'dark'
              ? 'bg-white/5 border border-white/10 group-hover:border-violet-500/20'
              : 'bg-white/10 border border-white/20'"
          >
            <Icon 
              :name="private ? 'heroicons:lock-closed' : 'ph:book-fill'" 
              class="w-5 h-5 group-hover:scale-110 transition-transform"
              :class="colorMode.value === 'dark' ? 'text-violet-400' : 'text-white'"
            />
          </div>
          <div>
            <h3 
              class="font-display font-semibold text-lg transition-colors"
              :class="colorMode.value === 'dark' 
                ? 'text-white group-hover:text-violet-400'
                : 'text-white group-hover:text-white/90'"
            >
              {{ name }}
            </h3>
            <span 
              class="text-sm flex items-center gap-2"
              :class="colorMode.value === 'dark' ? 'text-gray-500' : 'text-white/70'"
            >
              <template v-if="language">
                <Icon :name="getLanguageIcon(language)" class="w-4 h-4" />
                {{ language }}
              </template>
              <template v-else>
                <Icon name="heroicons:code-bracket" class="w-4 h-4" />
                Non spécifié
              </template>
            </span>
          </div>
        </div>
 
        <a 
          :href="html_url" 
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300"
          :class="colorMode.value === 'dark' ? 'hover:bg-white/10' : 'hover:bg-white/20'"
        >
          <Icon 
            name="heroicons:arrow-top-right-on-square" 
            class="w-5 h-5 hover:scale-110 transition-all"
            :class="colorMode.value === 'dark' 
              ? 'text-gray-400 hover:text-white' 
              : 'text-white/70 hover:text-white'"
          />
        </a>
      </div>
 
      <p 
        class="mb-6 line-clamp-2 transition-colors"
        :class="colorMode.value === 'dark' 
          ? 'text-gray-400 group-hover:text-gray-300'
          : 'text-white/70 group-hover:text-white/80'"
      >
        {{ description || "Aucune description" }}
      </p>
 
      <div class="flex flex-wrap gap-2 mb-6">
        <div 
          v-for="topic in topics"
          :key="topic"
          class="px-3 py-1 rounded-full text-xs font-medium transition-all hover:scale-105"
          :class="colorMode.value === 'dark'
            ? 'bg-white/5 border border-white/10 text-gray-300 group-hover:border-violet-500/20 hover:bg-white/10'
            : 'bg-white/10 border border-white/20 text-white/80 hover:bg-white/20'"
        >
          {{ topic }}
        </div>
      </div>
 
      <div 
        class="flex items-center justify-between text-sm"
        :class="colorMode.value === 'dark' ? 'text-gray-500' : 'text-white/70'"
      >
        <div class="flex items-center gap-4">
          <div 
            class="flex items-center gap-2 transition-colors"
            :class="colorMode.value === 'dark' 
              ? 'group-hover:text-violet-400'
              : 'group-hover:text-white'"
          >
            <Icon name="heroicons:star" class="w-4 h-4" />
            {{ stargazers_count }}
          </div>
          <div class="flex items-center gap-2">
            <Icon name="heroicons:clock" class="w-4 h-4" />
            {{ formatRelativeDate(updated_at) }}
          </div>
        </div>
      </div>
    </template>
 
    <!-- Effet de hover -->
    <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-violet-500/10 blur-xl"></div>
    </div>
  </div>
 </template>
 
 <script setup lang="ts">
 import { getLanguageIcon } from '~/types/icon'
 
 interface Props {
  id: number;
  name: string;
  description?: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  updated_at: string;
  private: boolean;
  error?: boolean;
  loading?: boolean;
 }
 
 const props = defineProps<Props>()
 const colorMode = useColorMode()
 
 const formatRelativeDate = (date: string) => {
  const now = new Date()
  const updatedDate = new Date(date)
  const diffTime = Math.abs(now.getTime() - updatedDate.getTime())
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return 'Aujourd\'hui'
  if (diffDays === 1) return 'Hier'
  if (diffDays < 7) return `Il y a ${diffDays} jours`
  if (diffDays < 30) return `Il y a ${Math.floor(diffDays / 7)} semaine${Math.floor(diffDays / 7) > 1 ? 's' : ''}`
  if (diffDays < 365) return `Il y a ${Math.floor(diffDays / 30)} mois`
 
  return updatedDate.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
 }
 </script>
 
 <style scoped>
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
 </style>