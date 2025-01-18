<template>
  <main class="flex flex-col md:flex-row justify-around my-2 fade-in">
    <figure class="w-full md:w-3/12 relative overflow-hidden">
      <img
        class="p-1 block mx-auto rounded-full max-h-48"
        src="https://i.imgur.com/rG1qTgL.jpeg"
        alt="Alexander Manriquez"
      />
    </figure>
    <article class="w-full md:w-7/12 flex flex-col justify-center fade-in">
      <h1 class="p-2 font-bold text-xl"><i class="fa-solid fa-hand text-orange-200"></i> ¡Hola y bienvenido a mi portafolio!</h1>
      <p class="p-2 hover:font-bold">
        Soy Alexander Manriquez, un apasionado desarrollador Front End enfocado en crear
        experiencias web dinámicas, fluidas y modernas. Mi objetivo es construir interfaces que no
        solo luzcan increíbles, sino que también sean accesibles para todos. Con un sólido dominio
        de tecnologías como HTML, CSS, JavaScript, Vue.js, Bootstrap y Tailwind CSS, me especializo
        en transformar ideas en soluciones interactivas y responsivas.
      </p>
    </article>
  </main>
  <article class="w-full md:w-2/3 m-auto py-5 fade-in">
    <ul class="w-full md:w-1/2 m-auto text-center">
      <li class="py-1 hover:font-bold">Estoy comprometido con el desarrollo de páginas web que:</li>
      <li class="py-1 hover:text-zinc-400 hover:font-bold"><i class="fa-solid fa-mobile text-zinc-400"></i> Se adapten perfectamente a cualquier dispositivo.</li>
      <li class="py-1 hover:text-cyan-500 hover:font-bold"><i class="fa-solid fa-globe text-cyan-500"></i> Sean accesibles y fáciles de usar para todos.</li>
      <li class="py-1 hover:text-amber-900 hover:font-bold"><i class="fa-solid fa-paint-roller text-amber-900"></i> Reflejen un diseño limpio, moderno y profesional.</li>
    </ul>
    <div class="text-center my-4">
      <a href="/projects" class="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300">Ver Proyectos</a>
    </div>
  </article>
</template>

<script>
export default {
  mounted() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 300}ms`;
      el.classList.add('visible');
    });
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  opacity: 0;
}

.visible {
  animation: fadeIn 1s forwards;
}

.hover\:text-zinc-400:hover {
  color: #a1a1aa;
}

.hover\:text-cyan-500:hover {
  color: #06b6d4;
}

.hover\:text-amber-900:hover {
  color: #78350f;
}

.hover\:bg-blue-700:hover {
  background-color: #1d4ed8;
}

.hover\:font-bold:hover {
  font-weight: 700;
}
</style>
