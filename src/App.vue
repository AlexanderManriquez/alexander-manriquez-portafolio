<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <NavBar />

    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
