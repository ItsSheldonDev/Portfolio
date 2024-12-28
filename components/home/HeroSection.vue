<template>
  <div class="h-[75vh] flex items-center justify-center">
    <div class="max-w-4xl w-full text-center">
      <div class="mb-8 inline-block px-6 py-2 rounded-full border backdrop-blur-sm
        dark:border-white/10 border-gray-700
        dark:bg-white/5 bg-[#171420]">
        <span class="text-sm font-medium tracking-wider text-gray-400">
          DÉVELOPPEUR FULLSTACK
        </span>
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
        <div class="flex items-center justify-center gap-4">
          <span class="text-white">Développeur</span>
          <span class="typewriter bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            {{ currentWord }}
          </span>
        </div>
        <span class="dark:text-white mt-4 block">&amp; créatif</span>
      </h1>
      
      <p class="mt-8 text-lg sm:text-xl text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto">
        Développeur Fullstack passionné par la création d'applications web innovantes et performantes
      </p>

      <div class="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
        <UButton 
          to="/projects" 
          size="lg"
          variant="solid"
          color="primary"
        >
          Voir mes projets
          <template #trailing>
            <Icon name="heroicons:arrow-right" />
          </template>
        </UButton>
        
        <UButton
          to="https://cloudyshell.fr/contact"
          variant="ghost"
          size="lg"
          color="primary"
        >
          Me contacter
        </UButton>
      </div>
    </div>
  </div>
</template>
 
 <script setup>
 const words = [
  'passionné',
  'innovant',
  'polyvalent',
  'méticuleux'
 ]
 
 const currentWord = ref('')
 let wordIndex = 0
 let charIndex = 0
 
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