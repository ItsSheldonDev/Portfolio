<template>
  <footer class="mt-32 border-t border-gray-200/10 backdrop-blur-lg bg-white/5 relative overflow-hidden">
    <!-- Effet de gradient animé -->
    <div class="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-blue-500/5 animate-gradient"></div>

    <div class="container mx-auto px-6 py-12 relative">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Logo section -->
        <div class="col-span-1 md:col-span-2">
          <div class="group relative">
            <CommonLogo :width="80" :height="38" />
            <div class="absolute -inset-2 bg-gradient-to-r from-violet-500/0 via-violet-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl rounded-full"></div>
          </div>
          <p class="mt-4 text-gray-400 text-sm max-w-md group-hover:text-gray-300 transition-colors">
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
              class="group relative text-white hover:text-white transition-all duration-300"
            >
              <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
              <UIcon
                :name="social.icon"
                class="w-5 h-5 transition-all duration-300 group-hover:scale-110 text-white relative z-10"
              />
              <span class="sr-only">{{ social.name }}</span>
            </UButton>
          </div>
        </div>
 
        <!-- Navigation et Contact -->
        <div class="grid grid-cols-2 gap-8">
          <div>
            <h3 class="font-display font-medium text-white mb-4 flex items-center gap-2">
              <UIcon name="i-heroicons-map" class="w-4 h-4" />
              Navigation
            </h3>
            <ul class="space-y-2">
              <li v-for="link in navigation" :key="link.path">
                <NuxtLink
                  :to="link.path"
                  class="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group relative"
                >
                  <UIcon :name="link.icon" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span class="relative">
                    {{ link.name }}
                    <span class="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </NuxtLink>
              </li>
            </ul>
          </div>
 
          <div>
            <h3 class="font-display font-medium text-white mb-4 flex items-center gap-2">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
              Contact
            </h3>
            <ul class="space-y-2">
              <li>
                <UButton
                  href="mailto:marius@cloudyshell.fr"
                  variant="ghost"
                  color="gray"
                  class="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group relative w-full justify-start"
                >
                  <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                  <UIcon name="i-heroicons-envelope" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span class="relative">
                    marius@cloudyshell.fr
                    <span class="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </UButton>
              </li>
              <li>
                <UButton
                  href="https://discord.com/users/999325599740997705"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  color="gray" 
                  class="text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 group relative w-full justify-start"
                >
                  <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity"></div>
                  <UIcon name="i-simple-discord" class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span class="relative">
                    Discord
                    <span class="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/40 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </span>
                </UButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
 
      <div class="mt-12 pt-8 border-t border-gray-200/10">
        <p class="text-gray-400 text-sm text-center group">
          © 2022-{{ new Date().getFullYear() }} Sheldon Dev - Made with
          <span class="inline-block animate-heartbeat text-red-500 group-hover:text-red-400 transition-colors">❤️</span>
          in Angoulême, France
        </p>
      </div>
    </div>
  </footer>
</template>
 
<script setup lang="ts">
const navigation = [
  { name: 'Accueil', path: '/', icon: 'i-heroicons-home' },
  { name: 'Projets', path: '/projects', icon: 'i-heroicons-squares-2x2' },
  { name: 'Contact', path: 'https://cloudyshell.fr/contact', icon: 'i-heroicons-envelope' },
  { name: 'Status', path: 'https://status.sheldon-dev.fr', icon: 'i-heroicons-chart-bar' }
]
 
const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/ItsSheldonDev',
    icon: 'i-simple-github'
  },
  {
    name: 'Discord',
    url: 'https://discord.com/users/999325599740997705',
    icon: 'i-simple-discord'
  }
]
</script>

<style scoped>
@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.animate-heartbeat {
  animation: heartbeat 1s ease-in-out infinite;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 15s ease infinite;
}
</style>