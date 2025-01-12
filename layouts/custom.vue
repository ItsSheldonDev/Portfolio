<!-- layouts/custom.vue -->
<template>
    <div>
      <ClientOnly>
        <slot />
      </ClientOnly>
    </div>
  </template>