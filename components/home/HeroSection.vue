<template>
  <div class="min-h-[75vh] flex items-center justify-center px-4 py-8">
    <div class="max-w-4xl w-full text-center">
      <!-- Badge -->
      <div class="mb-6 md:mb-8 inline-block px-4 md:px-6 py-2 rounded-full border backdrop-blur-sm
        dark:border-white/10 border-gray-700 dark:bg-white/5 bg-[#171420]
        animate-slide-down opacity-0"
      >
        <span class="text-xs md:text-sm font-medium tracking-wider text-gray-400">
          DÉVELOPPEUR FULLSTACK
        </span>
      </div>
      
      <!-- Titre -->
      <h1 class="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-4 md:mb-6">
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 animate-slide-up opacity-0">
          <span class="dark:text-white text-black">Développeur</span>
          <span class="typewriter bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
            {{ currentWord }}
          </span>
        </div>
        <span class="dark:text-white text-black mt-2 md:mt-4 block animate-fade-in opacity-0 delay-300">&amp; créatif</span>
      </h1>
      
      <!-- Description -->
      <p class="mt-4 md:mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto animate-fade-in opacity-0 delay-500 px-4">
        Développeur Fullstack passionné par la création d'applications web innovantes et performantes
      </p>
 
      <!-- Buttons -->
      <div class="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center animate-slide-up opacity-0 delay-700 px-4">
        <UButton 
          to="/projects" 
          size="lg"
          variant="solid"
          class="group bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 w-full sm:w-auto"
        >
          Voir mes projets
          <template #trailing>
            <Icon 
              name="heroicons:arrow-right" 
              class="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110"
            />
          </template>
        </UButton>
        
        <UButton
          to="https://cloudyshell.fr/contact"
          variant="ghost"
          size="lg"
          color="primary"
          class="hover:scale-105 transition-transform duration-300 w-full sm:w-auto"
        >
          Me contacter
        </UButton>
      </div>
    </div>
  </div>
 </template>
 
<script setup lang="ts">
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
 
 @keyframes slide-down {
  0% {
    transform: translateY(-2rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
 }
 
 @keyframes slide-up {
  0% {
    transform: translateY(2rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
 }
 
 @keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.95);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
 }
 
 .animate-slide-down {
  animation: slide-down 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
 }
 
 .animate-slide-up {
  animation: slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
 }
 
 .animate-fade-in {
  animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
 }
 
 .delay-300 {
  animation-delay: 300ms;
 }
 
 .delay-500 {
  animation-delay: 500ms;
 }
 
 .delay-700 {
  animation-delay: 700ms;
 }
 
 @keyframes blink {
  50% {
    border-color: transparent;
  }
 }
 </style>