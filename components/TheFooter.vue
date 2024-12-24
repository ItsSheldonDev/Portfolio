<template>
    <footer class="mt-32 border-t border-gray-200/10 backdrop-blur-sm bg-white/5">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Logo et description -->
          <div class="col-span-1 md:col-span-2">
            <Logo :width="80" :height="38" />
            <p class="mt-4 text-gray-400 text-sm max-w-md">
                Développeur Fullstack passionné par la création d'applications web innovantes et performantes
            </p>
            <div class="flex gap-4 mt-6">
              <UButton
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                color="gray"
                class="group"
              >
                <Icon 
                  :name="social.icon"
                  class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                />
              </UButton>
            </div>
          </div>
  
          <!-- Navigation -->
          <div>
            <h3 class="font-display font-medium text-white mb-4">
              Navigation
            </h3>
            <ul class="space-y-2">
              <li v-for="link in navigation" :key="link.path">
                <NuxtLink 
                  :to="link.path"
                  class="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {{ link.name }}
                </NuxtLink>
              </li>
            </ul>
          </div>
  
          <!-- Contact -->
          <div>
            <h3 class="font-display font-medium text-white mb-4">
              Contact
            </h3>
            <ul class="space-y-2">
              <li>
                <a 
                  href="mailto:contact@cloudyshell.fr"
                  class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Icon name="heroicons:envelope" class="w-4 h-4" />
                  contact@cloudyshell.fr
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com/users/999325599740997705"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2"
                >
                  <Icon name="ri:discord-fill" class="w-4 h-4" />
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- Copyright -->
        <div class="mt-12 pt-8 border-t border-gray-200/10">
         <p class="text-gray-400 text-sm text-center">
         © 2022-{{ new Date().getFullYear() }} Sheldon Dev - Made with 
          <span class="inline-block animate-heartbeat">❤️</span> 
           in Angoulême, France
          </p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: 'https://cloudyshell.fr' }
  ]
  
  const socials = [
    {
      name: 'GitHub',
      url: 'https://github.com/ItsSheldonDev',
      icon: 'ri:github-fill'
    },
    {
      name: 'Discord',
      url: 'https://discord.com/users/999325599740997705',
      icon: 'ri:discord-fill'
    }
  ]
  </script>