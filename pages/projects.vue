<template>
    <div class="container mx-auto px-4 py-16">
      <div 
        class="max-w-3xl mb-12"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0 }"
      >
        <h1 class="text-4xl font-display font-bold text-gray-900 dark:text-white">
          Mes Projets
        </h1>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Une sélection de mes projets personnels et contributions open source.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <template v-if="pending">
          <USkeleton
            v-for="i in 6"
            :key="i"
            class="h-64"
          />
        </template>
  
        <template v-else>
          <ProjectCard
            v-for="project in sortedProjects"
            :key="project.id"
            :project="project"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0 }"
            :delay="200 * $index"
          />
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
const useGithubProjects = () => {
  const { data: projects, pending, error } = useFetch(
    'https://api.github.com/users/ItsSheldonDev/repos',
    {
      headers: {
        Accept: 'application/vnd.github.v3+json'
      }
    }
  )

  const sortedProjects = computed(() => {
    if (!projects.value) return []
    return [...projects.value]
      .filter(p => !p.archived && !p.disabled)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  })

  return {
    projects: sortedProjects,
    pending,
    error
  }
}

const { projects: sortedProjects, pending } = useGithubProjects()
</script>