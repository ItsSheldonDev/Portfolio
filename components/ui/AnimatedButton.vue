<template>
    <button
      class="group relative overflow-hidden rounded-lg px-4 py-2 transition-all duration-300"
      :class="[
        variant === 'primary' ? 
          'bg-gradient-to-r from-blue-500 to-violet-600 text-white hover:from-blue-600 hover:to-violet-700' : 
          'bg-white/5 hover:bg-white/10 dark:text-white',
        size === 'lg' ? 'text-lg px-6 py-3' : 'text-base',
        className
      ]"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="relative z-10 flex items-center justify-center gap-2">
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix"></slot>
      </div>
  
      <!-- Ripple effect -->
      <div 
        v-for="ripple in ripples" 
        :key="ripple.id"
        class="absolute bg-white/20 rounded-full pointer-events-none animate-ripple"
        :style="{
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          top: `${ripple.y}px`,
          left: `${ripple.x}px`
        }"
      ></div>
  
      <!-- Gradient border -->
      <div 
        class="absolute inset-0 rounded-lg transition-opacity duration-300"
        :class="[
          variant === 'primary' ? 
            'opacity-0' : 
            'bg-gradient-to-r from-blue-500/50 to-violet-600/50 opacity-0 group-hover:opacity-100'
        ]"
      ></div>
    </button>
  </template>
  
  <script setup lang="ts">
  interface Ripple {
    id: number;
    x: number;
    y: number;
    size: number;
  }
  
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md'
    },
    className: {
      type: String,
      default: ''
    }
  })
  
  const ripples = ref<Ripple[]>([])
  let rippleCount = 0
  
  function onMouseEnter(e: MouseEvent) {
    const target = e.currentTarget as HTMLElement
    const rect = target.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
  
    ripples.value.push({
      id: rippleCount++,
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size
    })
  }
  
  function onMouseLeave() {
    ripples.value = []
  }
  </script>
  
  <style scoped>
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  .animate-ripple {
    animation: ripple 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }
  </style>