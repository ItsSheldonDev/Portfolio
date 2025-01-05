<template>
    <header class="fixed top-0 left-0 right-0 z-50">
      <nav class="mx-auto px-6 py-5 flex items-center justify-between backdrop-blur-md bg-white/50 dark:bg-gray-950/50 border-b border-gray-200/50 dark:border-gray-800/50">
        <NuxtLink to="/" class="relative group">
          <CommonLogo :width="80" :height="38" />
          <div class="absolute -inset-2 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-full"></div>
        </NuxtLink>
        
        <div class="flex items-center gap-8">
          <div class="hidden md:flex items-center gap-6">
            <UButton
              v-for="link in navigation"
              :key="link.path"
              :to="link.path"
              variant="ghost"
              color="gray"
              class="font-medium text-sm tracking-wide hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            >
              {{ link.name }}
            </UButton>
          </div>
  
          <div class="flex items-center gap-4">
            <UButton
              variant="ghost"
              color="gray"
              @click="toggleTheme"
              class="relative group"
            >
              <Icon 
                :name="colorMode.value === 'dark' ? 'ph:moon-stars-fill' : 'ph:sun-fill'"
                class="w-5 h-5 transition-transform duration-500 group-hover:rotate-45"
              />
            </UButton>
  
            <UButton
              variant="ghost"
              color="gray"
              class="md:hidden"
              @click="isMenuOpen = !isMenuOpen"
            >
              <Icon 
                :name="isMenuOpen ? 'ph:x-bold' : 'ph:list-bold'"
                class="w-5 h-5"
              />
            </UButton>
          </div>
        </div>
      </nav>
  
      <!-- Menu mobile -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="transform -translate-y-4 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-4 opacity-0"
      >
        <div 
          v-if="isMenuOpen" 
          class="absolute inset-x-0 top-full py-4 px-6 backdrop-blur-md bg-white/50 dark:bg-gray-950/50 border-b border-gray-200/50 dark:border-gray-800/50 md:hidden"
        >
          <div class="flex flex-col gap-2">
            <UButton
              v-for="link in navigation"
              :key="link.path"
              :to="link.path"
              variant="ghost"
              color="gray"
              class="w-full text-left font-medium"
              @click="isMenuOpen = false"
            >
              {{ link.name }}
            </UButton>
          </div>
        </div>
      </Transition>
    </header>
  </template>
  
  <script setup>
  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: 'https://cloudyshell.fr/contact' }
  ]
  
  const colorMode = useColorMode()
  const isMenuOpen = ref(false)
  
  const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
  </script>