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

<style>
body {
  background: linear-gradient(270deg, #D9EDBF, #2c7865a1, #D9EDBF);
  background-size: 600% 600%;
  animation: gradientAnimation 16s ease infinite;
  color: #2C7865;
  font-family: "Baskervville", serif;
  font-weight: 500;
  font-style: normal;
}

@keyframes gradientAnimation {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
