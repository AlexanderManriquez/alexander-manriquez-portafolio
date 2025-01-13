<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" :aria-expanded="isOpen.toString()">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex shrink-0 items-center">
            <img
              class="h-8 w-auto"
              src="../assets/logo-am.png"
              alt="Alexander Manriquez Front End Developer"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <RouterLink
                to="/"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300"
                aria-current="page"
                >Inicio</RouterLink
              >
              <RouterLink
                to="/projects"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300"
                >Proyectos</RouterLink
              >
              <RouterLink
                to="/about"
                class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300"
                >Acerca de mi</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <a href="https://www.linkedin.com/in/alexander-manriquez/" target="_blank" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300">
            <i class="fa-brands fa-linkedin text-white"></i>
          </a>
          <a href="https://github.com/AlexanderManriquez" target="_blank" class="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700 hover:text-gray-300">
            <i class="fa-brands fa-github text-white"></i>
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu" :class="{ 'block': isOpen, 'hidden': !isOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink
          to="/"
          class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300"
          aria-current="page"
          >Inicio</RouterLink
        >
        <RouterLink
          to="/projects"
          class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300"
          >Proyectos</RouterLink
        >
        <RouterLink
          to="/about"
          class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-gray-300"
          >Acerca de mi</RouterLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(false);
</script>

<style scoped>
</style>
