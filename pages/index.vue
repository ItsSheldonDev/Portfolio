<template>
  <div class="container mx-auto px-4 py-16 relative">
    <HeroSection />
    <div class="flex items-center justify-center gap-4 mb-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>
 
    <TechStack />
    <div class="flex items-center justify-center gap-4 my-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>
 
    <Statistics />
    <div class="flex items-center justify-center gap-4 my-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>
 
    <DiscordStatus />
    <div class="flex items-center justify-center gap-4 my-32">
      <DecorativeLineDivider direction="left" />
      <DecorativeStarDivider />
      <DecorativeLineDivider />
    </div>
 
    <ProjectsPreview />
  </div>
 </template>
 
 <script setup>
 import HeroSection from '~/components/home/HeroSection.vue'
 import TechStack from '~/components/home/TechStack.vue'
 import Statistics from '~/components/home/Statistics.vue'
 import DiscordStatus from '~/components/home/DiscordStatus.vue'
 import ProjectsPreview from '~/components/home/ProjectsPreview.vue'
 import DecorativeLineDivider from '~/components/decorative/LineDivider.vue'
 import DecorativeStarDivider from '~/components/decorative/StarDivider.vue'
 </script>