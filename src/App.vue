<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="app">
    <NavBar />
    <RouterView />
    <div class="bubbles">
      <div
        class="bubble"
        v-for="n in 10"
        :key="n"
        :style="{
        left: `${Math.random() * 100}%`, 
          width: `${Math.random() * 10 + 40}px`, 
          height: `${Math.random() * 10 + 40}px`, 
          animationDuration: `${Math.random() * 20 + 10}s`
        }"
      ></div>
    </div>
    <Footer />
  </div>
</template>

<style>
body {
  background: linear-gradient(270deg, #d9edbf, #2c7865a1, #d9edbf);
  background-size: 600% 600%;
  animation: gradientAnimation 16s ease infinite;
  color: #2c7865;
  font-family: 'Baskervville', serif;
  font-weight: 500;
  font-style: normal;

}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bubbles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Para que las burbujas estén detrás del contenido */
}

.bubble {
  position: absolute;
  bottom: -100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: bubbleAnimation infinite;
  opacity: 0.6;
}

@keyframes bubbleAnimation {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.6;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1000px) scale(1.5);
    opacity: 0;
  }
}

</style>
