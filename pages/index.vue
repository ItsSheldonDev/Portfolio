<template>
  <div class="container mx-auto px-4 py-16 relative">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-32">
      <span class="inline-block text-sm font-medium tracking-wider text-gray-400 dark:text-gray-500 mb-4">
        DÉVELOPPEUR FULLSTACK
      </span>
      
      <h1 class="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
        <span class="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Développeur créatif
        </span>
        <br>
        <span class="dark:text-white">& passionné</span>
      </h1>
      
      <p class="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
        Développeur Fullstack passionné par la création d'applications web innovantes et performantes
      </p>

      <div class="mt-12 flex gap-6 justify-center">
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

    <div class="flex items-center justify-center gap-4 mb-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>

<!-- Technologies Section -->
<div class="mb-32">
  <div class="text-center mb-16">
    <span class="inline-block text-sm font-medium tracking-wider text-gray-400 dark:text-gray-500 mb-4">
      TECHNOLOGIES
    </span>
    <h2 class="text-3xl font-display font-bold">
      Stack Technique
    </h2>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
    <div v-for="tech in technologies" :key="tech.name" 
      class="p-8 rounded-xl bg-[#111]/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
    >
      <div class="flex justify-center items-center h-16 mb-4">
        <Icon 
          :name="tech.icon" 
          class="w-12 h-12 text-gray-400 group-hover:text-white transition-colors" 
        />
      </div>
      <h3 class="font-medium mb-2 text-center">{{ tech.name }}</h3>
      <p class="text-sm text-gray-400 text-center">{{ tech.description }}</p>
    </div>
  </div>
</div>

    <div class="flex items-center justify-center gap-4 mb-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>

    <!-- Discord Status Section -->
    <div class="max-w-xl mx-auto">
      <div class="text-center mb-8">
        <span class="inline-block text-sm font-medium tracking-wider text-gray-400 dark:text-gray-500 mb-4">
          DISCORD
        </span>
        <h2 class="text-2xl font-display font-bold">
          Mon Status
        </h2>
      </div>

      <div class="p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
          <div class="flex-1">
            <div class="h-6 w-32 bg-white/10 rounded animate-pulse mb-3"></div>
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
    name: 'Frontend',
    icon: 'logos:vue',
    description: 'Vue.js, Nuxt, React, Next.js'
  },
  {
    name: 'Backend',
    icon: 'logos:nodejs-icon',
    description: 'Node.js, Express, NestJS'
  },
  {
    name: 'Base de données',
    icon: 'logos:mongodb-icon',
    description: 'MongoDB, PostgreSQL, MySQL'
  },
  {
    name: 'DevOps',
    icon: 'logos:docker-icon',
    description: 'Docker, CI/CD, Cloud'
  }
]
</script>