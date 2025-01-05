<template>
  <div class="mb-32">
    <ScrollReveal>
      <div class="text-center mb-16">
        <SectionTitle title="TECHNOLOGIES" subtitle="Stack Technique" />
      </div>
    </ScrollReveal>
 
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Dark Mode -->
      <div v-for="(tech, index) in technologies" :key="tech.name" 
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10 hover:border-violet-500/50 transform hover:scale-[1.02]
          dark:block hidden"
      >
        <ScrollReveal direction="up" :delay="index * 150">
          <div class="flex justify-center items-center h-16 mb-4">
            <Icon 
              :name="tech.icon" 
              class="w-12 h-12 text-gray-400 group-hover:text-violet-400 transition-colors duration-500" 
            />
          </div>
          <h3 class="font-medium mb-2 text-center text-white group-hover:text-violet-400 transition-colors">
            {{ tech.name }}
          </h3>
          <p class="text-sm text-gray-400 text-center group-hover:text-gray-300 transition-colors">
            {{ tech.description }}
          </p>
        </ScrollReveal>
      </div>
 
      <!-- Light Mode -->
      <div v-for="(tech, index) in technologies" :key="tech.name" 
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
          bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700
          dark:hidden transform hover:scale-[1.02]"
      >
        <ScrollReveal direction="up" :delay="index * 150">
          <div class="flex justify-center items-center h-16 mb-4">
            <Icon 
              :name="tech.icon" 
              class="w-12 h-12 text-white group-hover:text-white/90 transition-colors duration-500" 
            />
          </div>
          <h3 class="font-medium mb-2 text-center text-white group-hover:text-white/90 transition-colors">
            {{ tech.name }}
          </h3>
          <p class="text-sm text-white/70 text-center group-hover:text-white/80 transition-colors">
            {{ tech.description }}
          </p>
        </ScrollReveal>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '~/components/common/SectionTitle.vue'
import ScrollReveal from '~/components/ui/ScrollReveal.vue'

const technologies = [
  {
    name: 'Frontend',
    icon: 'logos:vue',
    description: 'Vue 3, Nuxt, React, Next.js, TypeScript'
  },
  {
    name: 'Backend',
    icon: 'logos:typescript-icon',
    description: 'Node.js, Express, NestJS, TypeScript, AdonisJS'
  },
  {
    name: 'Base de données',
    icon: 'logos:mongodb-icon',
    description: 'MongoDB, PostgreSQL, MySQL, Redis'
  },
  {
    name: 'DevOps',
    icon: 'logos:docker-icon',
    description: 'Docker, CI/CD, AWS, Linux, Git'
  }
]
</script>