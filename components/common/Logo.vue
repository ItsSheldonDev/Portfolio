<template>
    <div 
      class="relative group" 
      :style="{ width: `${width}px`, height: `${height}px` }"
    >
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 282.9 133.32"
        class="transition-all duration-300 group-hover:scale-105"
      >
        <defs>
          <linearGradient
            id="gradient1"
            x1="115.8633"
            y1="68.0429"
            x2="223.3503"
            y2="68.0429"
            gradientUnits="userSpaceOnUse"
            class="transition-all duration-300"
          >
            <stop offset="0" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#7C3AED' : '#553E91'" />
            <stop offset="0.1782" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#7C3AED' : '#553E91'" />
            <stop offset="0.5138" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#3B82F6' : '#3E6AB2'" />
            <stop offset="0.6834" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#3B82F6' : '#3E6AB2'" />
          </linearGradient>
          <linearGradient
            id="gradient2"
            x1="10.1071"
            y1="68.0827"
            x2="103.121"
            y2="68.0827"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5053" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#7C3AED' : '#553E91'" />
            <stop offset="1" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#7C3AED' : '#553E91'" />
          </linearGradient>
          <linearGradient
            id="gradient3"
            x1="239.1076"
            y1="107.497"
            x2="272.1784"
            y2="107.497"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#3B82F6' : '#3E6AB2'" />
            <stop offset="1" class="transition-all duration-300" :stop-color="colorMode.value === 'dark' ? '#3B82F6' : '#3E6AB2'" />
          </linearGradient>
        </defs>
        <g>
          <path
            fill="url(#gradient1)"
            d="M115.94,68.23c0-17.04,0.08-34.08-0.07-51.13c-0.03-3.16,0.64-4.36,4.08-4.29c10.96,0.22,21.94,0.21,32.9,0c3.39-0.07,4.17,1.04,4.1,4.25c-0.2,10.2-0.01,20.4-0.12,30.6c-0.03,2.43,0.7,3.25,3.17,3.19c6.48-0.15,12.96-0.14,19.44-0.01c2.34,0.05,2.96-0.81,2.94-3.03c-0.09-10.45,0.05-20.9-0.11-31.35c-0.04-2.79,0.77-3.66,3.56-3.62c11.34,0.13,22.68,0.11,34.02,0.01c2.51-0.02,3.49,0.62,3.49,3.33c-0.08,34.58-0.08,69.16,0,103.74c0.01,2.68-0.89,3.33-3.43,3.3c-11.34-0.12-22.68-0.18-34.02,0.03c-3.16,0.06-3.65-1.1-3.62-3.85c0.14-10.2-0.03-20.4,0.11-30.6c0.04-2.71-0.64-3.76-3.53-3.67c-6.23,0.19-12.46,0.16-18.69,0.01c-2.67-0.07-3.38,0.91-3.35,3.47c0.12,10.2-0.11,20.4,0.14,30.6c0.08,3.43-1.03,4.1-4.21,4.05c-10.96-0.19-21.94-0.18-32.9,0c-3.06,0.05-4.02-0.72-3.99-3.9C116.02,102.32,115.94,85.27,115.94,68.23z"
            class="transition-all duration-300"
          />
          <path
            fill="url(#gradient2)"
            d="M59.85,125.52 c-17.82-0.28-31.89-3.64-44.16-12.81c-7-5.23-6.97-5.25-2.39-12.39c3.16-4.92,6.36-9.82,9.37-14.83c1.15-1.91,1.95-1.91,3.68-0.63 c7.19,5.29,15.23,8.37,24.27,8.44c1.26,0.01,2.46-0.13,3.64-0.65c1.61-0.72,2.74-1.89,2.97-3.58c0.25-1.87-1.1-3-2.61-3.71 c-3.04-1.42-6.12-2.79-9.24-4.02c-6.28-2.47-12.44-5.15-17.81-9.32c-16.8-13.03-17.24-36.89-0.77-50.38 C38,12.49,51.11,9.65,65.32,10.9c11.83,1.05,22.54,4.95,31.93,12.31c5.29,4.14,5.29,4.14,1.77,9.7c-3.32,5.26-6.74,10.46-9.92,15.8 c-1.29,2.16-2.2,2.3-4.27,0.82c-5.11-3.65-10.61-6.51-17.17-6.52c-3.01-0.01-6.14,0.15-6.93,3.62c-0.84,3.66,2.6,4.41,4.97,5.46 c6.59,2.94,13.5,5.13,19.76,8.82c14.74,8.67,20.92,22.97,16.02,38.29c-3.53,11.06-11.71,17.94-22.13,22.33 C72.24,124.52,64.77,125.72,59.85,125.52z"
            class="transition-all duration-300"
          />
          <path
            fill="url(#gradient3)"
            d="M255.63,123.18c-4.6,0-9.2-0.09-13.8,0.04 c-2.16,0.06-2.75-0.74-2.72-2.8c0.09-8.68,0.08-17.37,0.01-26.05c-0.02-1.9,0.58-2.63,2.55-2.61c9.32,0.08,18.64,0.08,27.96,0.01 c1.99-0.02,2.55,0.75,2.53,2.63c-0.07,8.68-0.09,17.37,0.01,26.05c0.02,2.1-0.64,2.82-2.75,2.76 C264.83,123.1,260.23,123.18,255.63,123.18z"
            class="transition-all duration-300"
          />
        </g>
      </svg>
  
      <!-- Effet de surbrillance au hover -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 blur-2xl -z-10"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  const colorMode = useColorMode()
  
  defineProps({
    width: {
      type: [Number, String],
      default: 120
    },
    height: {
      type: [Number, String],
      default: 56
    }
  })
  </script>