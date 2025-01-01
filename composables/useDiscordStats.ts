// composables/useDiscordStats.ts
import { useLanyard } from 'vue-lanyard'

interface DiscordUser {
 id: string;
 username: string;
 avatar: string;
}

interface DiscordActivity {
 name: string;
 type: number;
 details?: string;
 state?: string;
}

export function useDiscordStats() {
 const { data } = useLanyard('999325599740997705')

 const statusColor = {
   online: 'bg-green-500',
   idle: 'bg-yellow-500', 
   dnd: 'bg-red-500',
   offline: 'bg-gray-400'
 }

 function getAvatarUrl(user: DiscordUser | undefined) {
   if (!user?.avatar) return '';
   return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${user.avatar.startsWith('a_') ? 'gif' : 'png'}?size=128`
 }

 function getStatusText(status: string) {
   const texts = {
     online: 'En ligne',
     idle: 'Inactif',
     dnd: 'Ne pas déranger',
     offline: 'Hors ligne'
   }
   return texts[status as keyof typeof texts] || 'Inconnu'
 }

 function getActivityIcon(type: number) {
   const icons = {
     0: 'heroicons:play',
     1: 'heroicons:musical-note', 
     2: 'heroicons:headphones',
     3: 'heroicons:video-camera',
     4: 'heroicons:user',
     5: 'heroicons:bolt'
   }
   return icons[type as keyof typeof icons] || 'heroicons:question-mark-circle'
 }

 return {
   discordData: data,
   statusColor,
   getAvatarUrl,
   getStatusText,
   getActivityIcon
 }
}