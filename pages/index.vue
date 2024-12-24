<template>
    <div class="container mx-auto px-4 py-24 relative">
      <!-- Section Hero -->
      <div class="max-w-4xl mx-auto mb-32">
        <h1 class="text-5xl md:text-7xl font-display font-bold leading-tight">
          <span class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Développeur Frontend
          </span>
          <br>
          <span class="dark:text-white">Passionné</span>
        </h1>
        
        <p class="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl">
          Je crée des expériences web modernes et immersives, 
          avec une attention particulière pour les détails et l'innovation.
        </p>
  
        <div class="mt-12 flex gap-6">
          <UButton
            to="/projects"
            size="lg"
            class="font-medium"
          >
            Voir mes projets
            <template #trailing>
              <Icon name="heroicons:arrow-right" />
            </template>
          </UButton>
          
          <UButton
            to="/contact"
            variant="ghost"
            size="lg"
            class="font-medium"
          >
            Me contacter
          </UButton>
        </div>
      </div>
  
      <!-- Section Technologies -->
      <div class="mb-32">
        <h2 class="text-center text-3xl font-display font-bold mb-16">
          Technologies maîtrisées
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div v-for="tech in technologies" :key="tech.name" 
            class="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group">
            <Icon :name="tech.icon" class="w-12 h-12 mb-4 text-gray-400 group-hover:text-white transition-colors" />
            <h3 class="font-medium mb-2">{{ tech.name }}</h3>
            <p class="text-sm text-gray-400">{{ tech.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- Section Discord Status -->
      <div class="max-w-xl mx-auto">
        <h2 class="text-2xl font-display font-bold mb-8 text-center">
          Status Discord
        </h2>
        <div class="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
            <div>
              <div class="h-6 w-32 bg-white/10 rounded animate-pulse mb-2"></div>
              <div class="h-4 w-24 bg-white/10 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const technologies = [
    {
      name: 'Vue.js & Nuxt',
      icon: 'logos:vue',
      description: 'Développement d\'applications modernes et performantes'
    },
    {
      name: 'Tailwind CSS',
      icon: 'logos:tailwindcss-icon',
      description: 'Design système flexible et maintenable'
    },
    {
      name: 'TypeScript',
      icon: 'logos:typescript-icon',
      description: 'Code robuste et fortement typé'
    },
    {
      name: 'UI/UX Design',
      icon: 'solar:layout-apps-bold',
      description: 'Interfaces utilisateur intuitives et esthétiques'
    }
  ]
  </script>