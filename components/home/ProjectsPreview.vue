<template>
  <div class="mb-32">
    <div class="text-center mb-16">
      <SectionTitle title="APERÇU" subtitle="Mes Réalisations" />
    </div>
 
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <div v-for="tech in topTechnologies" :key="tech.name"
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          dark:bg-[#111]/50 dark:border-white/10
          bg-[#171420] border-gray-700
          hover:border-violet-500/50"
      >
        <!-- Effet de fumée -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-[-3rem] dark:inset-[-1.5rem] blur-3xl rounded-[40px] animate-smoke dark:bg-violet-900/20 bg-black/60"></div>
          <div class="absolute inset-[-2rem] dark:inset-[1.3rem] blur-2xl rounded-[30px] animate-glow dark:bg-violet-600/15 bg-gradient-to-t from-violet-900/40 to-transparent"></div>
        </div>
 
        <!-- Contenu -->
        <a :href="tech.url" target="_blank" class="block">
          <div class="flex flex-col items-center gap-4">
            <Icon 
              :name="tech.icon" 
              class="w-12 h-12 text-gray-400 group-hover:text-violet-400 transition-colors duration-500" 
            />
            <span class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              {{ tech.count }} projets
            </span>
          </div>
        </a>
      </div>
    </div>
 
    <div class="text-center mt-12">
      <UButton to="/projects" variant="ghost" class="group">
        Explorer tous mes projets
        <template #trailing>
          <Icon name="heroicons:arrow-right" 
            class="transition-transform duration-300 group-hover:translate-x-1" />
        </template>
      </UButton>
    </div>
  </div>
 </template>
   
   <script setup>
   const { data: projects } = await useFetch('https://api.github.com/users/ItsSheldonDev/repos')
   
   const topTechnologies = computed(() => {
    if (!projects.value) return []
    
    const techCount = projects.value.reduce((acc, project) => {
      const tech = getTechIcon(project.language)
      if (tech) {
        acc[project.language] = {
          name: project.language,
          count: (acc[project.language]?.count || 0) + 1,
          icon: tech.icon,
          url: `https://github.com/ItsSheldonDev?tab=repositories&language=${project.language.toLowerCase()}`
        }
      }
      return acc
    }, {})
    
    return Object.values(techCount)
      .sort((a, b) => b.count - a.count)
      .slice(0, 6)
   })
   
   function getTechIcon(language) {
    const icons = {
      'Vue': { icon: 'logos:vue' },
      'JavaScript': { icon: 'logos:javascript' },
      'TypeScript': { icon: 'logos:typescript-icon' },
      'Python': { icon: 'logos:python' },
      'PHP': { icon: 'logos:php' },
    }
    return icons[language]
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

.animate-smoke {
 animation: smoke 10s ease-in-out infinite;
}

.animate-glow {
 animation: glow 5s ease-in-out infinite;
}
</style>