<template>
  <div class="container mx-auto px-4 py-16 relative">
    <ScrollReveal>
      <HeroSection />
    </ScrollReveal>
 
    <ScrollReveal :delay="200">
      <div class="flex items-center justify-center gap-4 mb-32">
        <DecorativeLineDivider direction="left" />
        <DecorativeStarDivider />
        <DecorativeLineDivider />
      </div>
    </ScrollReveal>
 
    <ScrollReveal direction="up" :delay="300">
      <TechStack />
    </ScrollReveal>
 
    <ScrollReveal :delay="200">
      <div class="flex items-center justify-center gap-4 my-32">
        <DecorativeLineDivider direction="left" />
        <DecorativeStarDivider />
        <DecorativeLineDivider />
      </div>
    </ScrollReveal>
 
    <ScrollReveal direction="up" :delay="300">
      <Statistics />
    </ScrollReveal>
 
    <ScrollReveal :delay="200">
      <div class="flex items-center justify-center gap-4 my-32">
        <DecorativeLineDivider direction="left" />
        <DecorativeStarDivider />
        <DecorativeLineDivider />
      </div>
    </ScrollReveal>
 
    <ScrollReveal direction="scale" :delay="300">
      <DiscordStatus />
    </ScrollReveal>
 
    <ScrollReveal :delay="200">
      <div class="flex items-center justify-center gap-4 my-32">
        <DecorativeLineDivider direction="left" />
        <DecorativeStarDivider />
        <DecorativeLineDivider />
      </div>
    </ScrollReveal>
 
    <ScrollReveal direction="up" :delay="300">
      <ProjectsPreview />
    </ScrollReveal>
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
 import ScrollReveal from '~/components/ui/ScrollReveal.vue'
 </script>  