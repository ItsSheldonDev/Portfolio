<template>
    <div class="mb-32">
      <div class="text-center mb-16">
        <SectionTitle title="APERÇU" subtitle="Mes Réalisations" />
      </div>
   
      <div class="flex justify-center gap-8 flex-wrap">
        <template v-for="tech in topTechnologies" :key="tech.name">
          <UButton
            :href="tech.url"
            target="_blank"
            size="xl"
            class="p-6 rounded-xl bg-[#111]/50 backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-500 group"
          >
            <div class="flex flex-col items-center gap-4">
              <Icon 
                :name="tech.icon" 
                class="w-12 h-12 text-gray-400 group-hover:text-white transition-colors" 
              />
              <span class="text-sm text-gray-400 group-hover:text-white transition-colors">
                {{ tech.count }} projets
              </span>
            </div>
          </UButton>
        </template>
      </div>
   
      <div class="text-center mt-12">
        <UButton to="/projects" variant="ghost">
          Explorer tous mes projets
          <template #trailing>
            <Icon name="heroicons:arrow-right" />
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