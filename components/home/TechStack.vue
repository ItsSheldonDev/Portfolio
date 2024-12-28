<template>
  <div class="mb-32">
    <div class="text-center mb-16">
      <SectionTitle title="TECHNOLOGIES" subtitle="Stack Technique" />
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <!-- Version Dark -->
      <div v-for="tech in technologies" :key="tech.name" 
        class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
          bg-[#111]/50 border-white/10
          hover:border-violet-500/50
          dark:block hidden"
      >
        <!-- Effet de fumée pour chaque carte -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-[-1.5rem] blur-3xl rounded-[40px] animate-smoke bg-violet-900/20"></div>
          <div class="absolute inset-[1.3rem] blur-2xl rounded-[30px] animate-glow bg-violet-600/15"></div>
        </div>

        <!-- Contenu -->
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
      </div>

      <!-- Version Light -->
      <div v-for="tech in technologies" :key="tech.name" 
        class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
          bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]
          dark:hidden"
      >
        <!-- Effet de fumée pour chaque carte -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-[-1rem] blur-2xl rounded-[40px] animate-smoke bg-gradient-to-r from-[#3B82F6]/60 to-[#7C3AED]/60"></div>
          <div class="absolute inset-[-2rem] blur-2xl rounded-[30px] animate-glow bg-gradient-to-r from-[#3B82F6]/40 to-[#7C3AED]/40"></div>
        </div>

        <!-- Contenu -->
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
      </div>
    </div>
  </div>
</template>
 
 <script setup>
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