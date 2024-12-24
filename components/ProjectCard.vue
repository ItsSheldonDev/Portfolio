<template>
    <UCard 
      :ui="{
        base: 'backdrop-blur-sm bg-white/10 border-gray-800/50',
        body: {
          base: 'h-full flex flex-col'
        }
      }"
      class="group hover:scale-[1.02] transition-all duration-300"
    >
      <div class="flex items-start justify-between">
        <div>
          <h3 class="text-xl font-display font-bold text-gray-900 dark:text-white">
            {{ project.name }}
          </h3>
          <p class="mt-2 text-gray-600 dark:text-gray-300">
            {{ project.description }}
          </p>
        </div>
        <UButton
          :to="project.html_url"
          target="_blank"
          variant="ghost"
          icon="i-heroicons-arrow-top-right-on-square"
          class="opacity-0 group-hover:opacity-100 transition-opacity"
        />
      </div>
  
      <div class="mt-4 flex-grow">
        <div class="flex flex-wrap gap-2">
          <UBadge
            v-for="topic in project.topics"
            :key="topic"
            :color="getTopicColor(topic)"
            variant="soft"
            size="sm"
          >
            {{ topic }}
          </UBadge>
        </div>
      </div>
  
      <div class="mt-6 flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-star" />
          {{ project.stargazers_count }}
        </div>
        <div class="flex items-center gap-1">
          <UIcon name="i-heroicons-code-bracket" />
          {{ project.language }}
        </div>
        <div class="flex items-center gap-1">
          <UIcon
            :name="project.fork ? 'i-heroicons-queue-list' : 'i-heroicons-book'"
          />
          {{ project.fork ? 'Fork' : 'Original' }}
        </div>
      </div>
    </UCard>
  </template>
  
  <script setup>
  const props = defineProps({
    project: {
      type: Object,
      required: true
    }
  })
  
  // Fonction pour attribuer une couleur en fonction du topic
  const getTopicColor = (topic) => {
    const topicColors = {
      vue: 'emerald',
      react: 'blue',
      typescript: 'indigo',
      javascript: 'yellow',
      default: 'gray'
    }
    return topicColors[topic.toLowerCase()] || 'gray'
  }
  </script>