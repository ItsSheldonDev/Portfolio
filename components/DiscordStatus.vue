<template>
    <UCard>
      <template v-if="data">
        <div class="flex items-center gap-4">
          <!-- Avatar Discord -->
          <img 
            :src="data.discord_user.avatar || ''"
            alt="Avatar Discord"
            class="w-16 h-16 rounded-full"
          />
          <div>
            <!-- Nom d'utilisateur -->
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              {{ data.discord_user.username }}
            </h3>
            <!-- Statut -->
            <p class="text-sm text-gray-500 dark:text-gray-400">
              {{ status }}
            </p>
            <!-- Activité actuelle -->
            <p v-if="activity" class="text-sm text-gray-500 dark:text-gray-400">
              Jouant à : <span class="font-medium">{{ activity }}</span>
            </p>
          </div>
        </div>
      </template>
      <template v-else>
        <p class="text-gray-500 dark:text-gray-400">
          Chargement du statut Discord...
        </p>
      </template>
    </UCard>
  </template>
  
  <script setup>
  import { useLanyard } from 'vue-lanyard'
  import { computed, watchEffect } from 'vue'
  
  // Remplacez DISCORD_ID par votre ID Discord.
  const DISCORD_ID = '999325599740997705'
  
  // Récupérer les données de Discord via Lanyard
  const { data } = useLanyard(DISCORD_ID)
  
  // Débogage des données dans la console
  watchEffect(() => {
    if (data.value) {
      console.log('Lanyard Data:', data.value)
    }
  })
  
  // Mapper le statut Discord
  const status = computed(() => {
    if (!data.value) return 'Hors ligne'
    const statusMap = {
      online: 'En ligne',
      idle: 'Inactif',
      dnd: 'Ne pas déranger',
      offline: 'Hors ligne',
    }
    return statusMap[data.value.discord_status] || 'Hors ligne'
  })
  
  // Extraire l'activité principale (jeu ou autre)
  const activity = computed(() => {
    if (!data.value || !data.value.activities || data.value.activities.length === 0) return null
    const gameActivity = data.value.activities.find(activity => activity.type === 0) // 0 = Activité de jeu
    return gameActivity ? gameActivity.name : null
  })
  </script>
  