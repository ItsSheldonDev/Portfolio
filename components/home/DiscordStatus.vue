<template>
  <div class="max-w-xl mx-auto">
    <div class="text-center mb-8">
      <SectionTitle title="DISCORD" subtitle="Mon Status" />
    </div>
 
    <div class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500 hover:border-violet-500/50
      dark:bg-[#111]/50 dark:border-white/10
      bg-[#171420] border-gray-700">
      
      <!-- Effet de fumée -->
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-[-3rem] dark:inset-[-1.5rem] blur-3xl rounded-[40px] animate-smoke dark:bg-violet-900/20 bg-black/60"></div>
        <div class="absolute inset-[-2rem] dark:inset-[1.3rem] blur-3xl rounded-[30px] animate-glow dark:bg-violet-600/15 bg-gradient-to-t from-violet-900/40 to-transparent"></div>
      </div>
 
      <!-- Contenu -->
      <template v-if="data">
        <div class="flex items-center gap-6">
          <div class="relative">
            <img 
              :src="getAvatarUrl(data.discord_user)"
              :alt="data.discord_user.username"
              class="w-16 h-16 rounded-full"
            />
            <span 
              :class="[
                'absolute bottom-0 right-0 w-4 h-4 rounded-full border-2',
                statusColor[data.discord_status],
                'border-[#171420]'
              ]"
            />
          </div>
 
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <span class="font-medium text-white group-hover:text-violet-400 transition-colors">
                {{ data.discord_user.username }}
              </span>
              <span class="text-sm text-gray-400">
                ({{ getStatusText(data.discord_status) }})
              </span>
            </div>
 
            <div v-if="data.activities?.length" class="space-y-2">
              <div v-for="activity in data.activities" :key="activity.name"
                class="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors"
              >
                <Icon :name="getActivityIcon(activity.type)" class="w-4 h-4" />
                <span>{{ activity.name }}</span>
                <span v-if="activity.details" class="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  • {{ activity.details }}
                </span>
                <span v-if="activity.state" class="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  • {{ activity.state }}
                </span>
              </div>
            </div>
            
            <div v-else class="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              Aucune activité en cours
            </div>
          </div>
        </div>
      </template>
 
      <!-- Loading state -->
      <template v-else>
        <div class="flex items-center gap-6">
          <div class="w-16 h-16 rounded-full bg-white/10 animate-pulse" />
          <div class="flex-1">
            <div class="h-6 w-32 bg-white/10 rounded animate-pulse mb-3" />
            <div class="h-4 w-24 bg-white/10 rounded animate-pulse" />
          </div>
        </div>
      </template>
    </div>
  </div>
 </template>

<script setup>
import { useLanyard } from 'vue-lanyard'

const { data } = useLanyard('999325599740997705')

const statusColor = {
  online: 'bg-green-500',
  idle: 'bg-yellow-500',
  dnd: 'bg-red-500',
  offline: 'bg-gray-400'
}

function getAvatarUrl(user) {
  if (!user || !user.avatar) return '';
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=128`;
}

function getStatusText(status) {
  const texts = {
    online: 'En ligne',
    idle: 'Inactif',
    dnd: 'Ne pas déranger',
    offline: 'Hors ligne'
  }
  return texts[status] || 'Inconnu'
}

function getActivityIcon(type) {
  const icons = {
    0: 'heroicons:play', // Playing
    1: 'heroicons:musical-note', // Streaming
    2: 'heroicons:headphones', // Listening
    3: 'heroicons:video-camera', // Watching
    4: 'heroicons:user', // Custom
    5: 'heroicons:bolt' // Competing
  }
  return icons[type] || 'heroicons:question-mark-circle'
}
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