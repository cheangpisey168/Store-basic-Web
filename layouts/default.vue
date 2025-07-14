<template>
  <div>
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold text-blue-600">
          Logo
        </NuxtLink>
        
        <ul class="hidden md:flex space-x-6">
         <li> <NuxtLink to="/" class="text-gray-700 hover:text-blue-600 font-medium">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="text-gray-700 hover:text-blue-600 font-medium">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="text-gray-700 hover:text-blue-600 font-medium btn">Products</NuxtLink></li>
        </ul>
      </div>
    </header>

    <!-- Page Content -->
    <main class="container mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const toggle = ref(false)
</script>
