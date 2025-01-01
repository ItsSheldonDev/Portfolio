<template>
  <div class="max-w-xl mx-auto">
    <div class="text-center mb-8">
      <SectionTitle title="DISCORD" subtitle="Mon Status" />
    </div>
 
    <!-- Dark Mode -->
    <div class="group relative p-8 rounded-xl backdrop-blur-sm border transition-all duration-500
      bg-[#111]/50 border-white/10 hover:border-violet-500/50 transform hover:scale-[1.02]
      dark:block hidden"
    >
      <template v-if="discordData">
        <div class="flex items-center gap-6">
          <DiscordAvatar :user="discordData.discord_user" :status="discordData.discord_status" theme="dark" />
          <DiscordInfo :data="discordData" theme="dark" />
        </div>
      </template>
      <LoadingState v-else theme="dark" />
    </div>
 
    <!-- Light Mode -->
    <div class="group relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500
      bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700
      transform hover:scale-[1.02]
      dark:hidden"
    >
      <template v-if="discordData">
        <div class="flex items-center gap-6">
          <DiscordAvatar :user="discordData.discord_user" :status="discordData.discord_status" theme="light" />
          <DiscordInfo :data="discordData" theme="light" />
        </div>
      </template>
      <LoadingState v-else theme="light" />
    </div>
  </div>
 </template>
 
 <script setup>
 import SectionTitle from '../common/SectionTitle.vue'
 import DiscordAvatar from '../discord/DiscordAvatar.vue'
 import DiscordInfo from '../discord/DiscordInfo.vue'
 import LoadingState from '../discord/LoadingState.vue'
 const { discordData, statusColor, getAvatarUrl, getStatusText, getActivityIcon } = useDiscordStats()
 
 provide('discord', {
  statusColor,
  getAvatarUrl,
  getStatusText,
  getActivityIcon
 })
 </script>