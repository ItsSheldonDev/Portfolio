<template>
  <div class="flex-1">
    <div class="flex items-center gap-2 mb-2">
      <span :class="[
        'font-medium transition-colors',
        theme === 'dark' ? 'text-white group-hover:text-violet-400' : 'text-white group-hover:text-white/90'
      ]">
        {{ data.discord_user.username }}
      </span>
      <span :class="theme === 'dark' ? 'text-sm text-gray-400' : 'text-sm text-white/70'">
        ({{ getStatusText(data.discord_status) }})
      </span>
    </div>

    <div v-if="data.activities?.length" class="space-y-2">
      <div v-for="activity in data.activities" :key="activity.name"
        :class="[
          'flex items-center gap-2 text-sm transition-colors',
          theme === 'dark' ? 'text-gray-300 group-hover:text-gray-200' : 'text-white/80 group-hover:text-white/90'
        ]"
      >
        <UIcon :name="getActivityIcon(activity.type)" class="w-4 h-4" />
        <span>{{ activity.name }}</span>
        <span v-if="activity.details" :class="theme === 'dark' ? 'text-xs text-gray-400 group-hover:text-gray-300' : 'text-xs text-white/70 group-hover:text-white/80'">
          • {{ activity.details }}
        </span>
        <span v-if="activity.state" :class="theme === 'dark' ? 'text-xs text-gray-400 group-hover:text-gray-300' : 'text-xs text-white/70 group-hover:text-white/80'">
          • {{ activity.state }}
        </span>
      </div>
    </div>
            
    <div v-else :class="theme === 'dark' ? 'text-sm text-gray-400 group-hover:text-gray-300' : 'text-sm text-white/70 group-hover:text-white/80'">
      Aucune activité en cours
    </div>
  </div>
</template>

<script setup>
const { getStatusText, getActivityIcon } = inject('discord')
defineProps(['data', 'theme'])
</script>