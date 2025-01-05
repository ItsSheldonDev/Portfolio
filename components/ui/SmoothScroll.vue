<template>
    <div ref="scrollContainer" data-scroll-container class="h-full">
      <div data-scroll-section>
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import LocomotiveScroll from 'locomotive-scroll'
  import 'locomotive-scroll/dist/locomotive-scroll.css'
  
  const scrollContainer = ref<HTMLElement | null>(null)
  let scroll: any = null
  
  onMounted(() => {
    if (scrollContainer.value) {
      scroll = new LocomotiveScroll({
        el: scrollContainer.value,
        smooth: true,
        smoothMobile: true,
        lerp: 0.08,
        reloadOnContextChange: true,
        getDirection: true,
        multiplier: 1,
        touchMultiplier: 2,
        tablet: {
          smooth: true,
          breakpoint: 1024
        }
      })
  
      // Recalcul après un petit délai pour s'assurer que tout est chargé
      setTimeout(() => {
        scroll.update()
      }, 1000)
  
      // Recalcul lors des changements de taille de fenêtre
      window.addEventListener('resize', () => {
        scroll.update()
      })
    }
  })
  
  onBeforeUnmount(() => {
    if (scroll) scroll.destroy()
  })
  </script>
  
  <style>
  html.has-scroll-smooth {
    @apply overflow-hidden;
  }
  
  [data-scroll-container] {
    @apply w-full min-h-screen overflow-hidden;
  }
  
  .c-scrollbar {
    @apply !right-1;
  }
  
  .c-scrollbar_thumb {
    @apply !bg-violet-500/50 !rounded-full;
  }
  
  [data-scroll-section] {
    @apply w-full;
  }
  </style>