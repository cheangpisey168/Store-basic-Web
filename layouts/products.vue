<template>
    <div>
        <header class="bg-white shadow-md">
            <nav class="container mx-auto px-4 py-4 flex items-center justify-between"> 
                <div> <NuxtLink to="/">Logo</NuxtLink></div>
            </nav>
        </header>
    </div>

    <main class="container mx-auto px-4 py-8">
        <slot />
    </main>

    
    <footer class="bg-gray-100 mt-10">
      <div class="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 class="text-xl font-bold text-blue-600">Logo</h3>
          <p class="text-gray-600 mt-2">Your trusted brand for quality products.</p>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul class="space-y-1">
            <li><NuxtLink to="/" class="text-gray-600 hover:text-blue-600">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="text-gray-600 hover:text-blue-600">About</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-gray-600 hover:text-blue-600">Products</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold text-gray-800 mb-2">Connect</h4>
          <p class="text-gray-600">Email: support@example.com</p>
          <div class="flex justify-center md:justify-start gap-4 mt-3">
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-blue-600">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>