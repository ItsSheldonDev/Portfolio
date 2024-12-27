<template>
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
        <UButton to="/projects" size="lg" class="font-medium">
          Voir mes projets
          <template #trailing>
            <Icon name="heroicons:arrow-right" />
          </template>
        </UButton>
        
        <UButton to="https://cloudyshell.fr/contact" variant="ghost" size="lg" class="font-medium">
          Me contacter
        </UButton>
      </div>
    </div>
  </template>