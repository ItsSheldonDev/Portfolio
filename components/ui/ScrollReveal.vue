<template>
    <div 
      ref="elementRef"
      :class="[
        'transition-all duration-1000',
        {
          'opacity-0': !isVisible,
          'translate-y-8': !isVisible && direction === 'up',
          'translate-y-0 opacity-100': isVisible,
          '-translate-y-8': !isVisible && direction === 'down',
          'translate-x-8': !isVisible && direction === 'left',
          '-translate-x-8': !isVisible && direction === 'right',
          'scale-95': !isVisible && direction === 'scale'
        }
      ]"
      :style="{
        transitionDelay: `${delay}ms`
      }"
    >
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  
  interface Props {
    direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
    delay?: number
    threshold?: number
  }
  
  const props = withDefaults(defineProps<Props>(), {
    direction: 'up',
    delay: 0,
    threshold: 0.2
  })
  
  const elementRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  
  let observer: IntersectionObserver
  
  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: props.threshold,
        rootMargin: '50px'
      }
    )
  
    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })
  
  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
  </script>