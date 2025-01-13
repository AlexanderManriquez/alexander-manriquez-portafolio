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
  background-color: #D9EDBF;
  color: #2C7865;
  font-family: "Baskervville", serif;
  font-weight: 500;
  font-style: normal;
}

</style>
