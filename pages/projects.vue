<template>
  <div class="container mx-auto px-4 py-16">
    <!-- En-tête -->
    <div class="max-w-4xl mx-auto text-center mb-16">
      <span class="text-sm font-medium tracking-wider text-gray-400 dark:text-gray-500 mb-4 block">
        PROJETS
      </span>
      <h1 class="text-4xl md:text-5xl font-display font-bold mb-6">
        Mes Réalisations
      </h1>
      <p class="text-xl text-gray-400">
        Une sélection de mes projets personnels et contributions open source.
      </p>
    </div>
 
    <!-- Filtres -->
    <div class="flex flex-wrap gap-4 justify-center mb-12">
      <UButton
        v-for="filter in filters"
        :key="filter.value"
        :variant="activeFilter === filter.value ? 'solid' : 'ghost'"
        :color="activeFilter === filter.value ? 'primary' : 'gray'"
        @click="activeFilter = filter.value"
      >
        {{ filter.label }}
      </UButton>
    </div>
 
    <!-- Liste des projets -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <template v-if="pending">
        <USkeleton
          v-for="i in 6"
          :key="i"
          class="h-64 rounded-xl"
        />
      </template>
 
      <template v-else-if="error">
        <div class="col-span-full text-center py-12">
          <p class="text-gray-400 mb-4">
            Une erreur est survenue lors du chargement des projets.
          </p>
          <UButton @click="refresh">Réessayer</UButton>
        </div>
      </template>
 
      <template v-else>
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :style="`--animation-order: ${index}`"
          v-bind="project"
        />
      </template>
    </div>
  </div>
 </template>
 
 <script setup>
const filters = [
 { label: 'Tous', value: 'all' },
 { label: 'Frontend', value: 'frontend' },
 { label: 'Backend', value: 'backend' },
 { label: 'Fullstack', value: 'fullstack' }
]

const activeFilter = ref('all')
const { repos, pending, error, refresh, filteredRepos } = useGithubStats()

const filteredProjects = computed(() => filteredRepos(activeFilter.value).value)
</script>