<template>
  <div class="min-h-[75vh] flex items-center justify-center px-4 py-8">
    <div class="max-w-4xl w-full text-center">
      <!-- Badge -->
      <ScrollReveal direction="down">
        <div class="mb-6 md:mb-8 inline-block px-4 md:px-6 py-2 rounded-full border backdrop-blur-sm
          dark:border-white/10 border-gray-700 dark:bg-white/5 bg-[#171420]"
        >
          <span class="text-xs md:text-sm font-medium tracking-wider text-gray-400">
            DÉVELOPPEUR FULLSTACK
          </span>
        </div>
      </ScrollReveal>
      
      <!-- Titre -->
      <h1 class="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4 md:mb-6">
        <ScrollReveal direction="up" :delay="200">
          <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span class="dark:text-white text-black">Développeur</span>
            <span class="typewriter bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              {{ currentWord }}
            </span>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" :delay="400">
          <span class="dark:text-white text-black mt-2 md:mt-4 block">&amp; créatif</span>
        </ScrollReveal>
      </h1>
      
      <!-- Description -->
      <ScrollReveal direction="up" :delay="600">
        <p class="mt-4 md:mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto px-4">
          Développeur Fullstack passionné par la création d'applications web innovantes et performantes
        </p>
      </ScrollReveal>
 
      <!-- Buttons -->
      <ScrollReveal direction="up" :delay="800">
        <div class="mt-8 md:mt-12 flex flex-row gap-4 justify-center">
          <NuxtLink to="/projects">
            <AnimatedButton 
              variant="primary"
              size="lg"
              class="group"
            >
              <span class="flex items-center gap-2">
                Voir mes projets
                <UIcon 
                  name="i-heroicons-arrow-right" 
                  class="w-5 h-5 transition-all duration-300 group-hover:translate-x-1"
                />
              </span>
            </AnimatedButton>
          </NuxtLink>
          
          <a href="https://cloudyshell.fr/contact" target="_blank" rel="noopener noreferrer">
            <AnimatedButton
              variant="ghost"
              size="lg"
            >
              Me contacter
            </AnimatedButton>
          </a>
        </div>
      </ScrollReveal>
    </div>
  </div>
 </template>
 
 <script setup lang="ts">
 import AnimatedButton from '~/components/ui/AnimatedButton.vue'
 import ScrollReveal from '~/components/ui/ScrollReveal.vue'
 
 const currentWord = ref('')
 let wordIndex = 0
 let charIndex = 0
 
 const words = [
  'passionné',
  'innovant',  
  'polyvalent',
  'méticuleux'
 ]
 
 onMounted(() => {
  typeWord()
 })
 
 function typeWord() {
  const word = words[wordIndex]
  if (charIndex < word.length) {
    currentWord.value = word.slice(0, charIndex + 1)
    charIndex++
    setTimeout(typeWord, 100)
  } else {
    setTimeout(eraseWord, 2000)
  }
 }
 
 function eraseWord() {
  if (charIndex > 0) {
    currentWord.value = words[wordIndex].slice(0, charIndex - 1)
    charIndex--
    setTimeout(eraseWord, 50)
  } else {
    wordIndex = (wordIndex + 1) % words.length
    setTimeout(typeWord, 500)
  }
 }
 </script>
 
 <style scoped>
 .typewriter {
  display: inline-block;
  min-width: 8ch;
  text-align: left;
  border-right: 2px solid currentColor;
  animation: blink 1s step-end infinite;
 }
 
 @keyframes blink {
  50% {
    border-color: transparent;
  }
 }
 </style>