<template>
  <div class="container mx-auto p-4">
    <h1 class="text-center text-2xl font-semibold">Acerca de Mi</h1>
    <section class="about">
      <p class="mt-4 px-6 fade-in">
        Después de más de 10 años en ventas y servicio al cliente, decidí reinventar mi carrera
        profesional siguiendo una pasión latente: el desarrollo web. Mi experiencia previa me ha
        enseñado la importancia de entender y satisfacer las necesidades de los usuarios, algo que
        considero esencial en el diseño y desarrollo de interfaces que sean funcionales y
        accesibles. Esta transición no fue casual; fue el resultado de una curiosidad constante por
        la tecnología y una profunda dedicación a aprender habilidades que transforman ideas en
        soluciones digitales.
      </p>
      <p class="mt-4 px-6 fade-in">
        Durante mi formación como desarrollador front-end, he perfeccionado habilidades en HTML,
        CSS, JavaScript, entre otros. Mis proyectos reflejan no solo mi capacidad técnica, sino
        también un enfoque orientado al usuario que adquirí durante mi experiencia previa. Me he
        enfocado en crear aplicaciones intuitivas, con especial atención a los detalles visuales y
        la experiencia de usuario, para garantizar que las soluciones que desarrollo sean tan
        prácticas como atractivas.
      </p>
      <p class="mt-4 px-6 fade-in">
        Estoy entusiasmado por la oportunidad de unir mi pasado profesional con mi presente en
        desarrollo web. Mis habilidades en comunicación, resolución de problemas y trabajo en equipo
        me permiten integrarme fácilmente en cualquier entorno laboral. Estoy listo para aportar
        valor a cualquier equipo, aprendiendo y creciendo junto a profesionales con los que comparta
        la visión de crear experiencias digitales memorables.
      </p>
    </section>

    <section class="skills flex flex-col md:flex-row justify-center mt-8 fade-in">
      <ul class="p-6">
        <li>&nbsp;</li>
        <li class="font-semibold">Mis Habilidades</li>
      </ul>
      <ul class="p-6">
        <li><i data-tooltip-target="tooltip-html" data-tooltip-placement="top" class="fa-brands fa-html5 text-orange-500 text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-css" data-tooltip-placement="right" class="fa-brands fa-css text-blue-700 text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-js" data-tooltip-placement="bottom" class="fa-brands fa-js text-yellow-400 text-3xl text-center ml-6"></i></li>
      </ul>
      <ul class="p-6">
        <li><i data-tooltip-target="tooltip-bs" data-tooltip-placement="top" class="fa-brands fa-bootstrap text-indigo-600 text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-sass" data-tooltip-placement="right" class="fa-brands fa-sass text-fuchsia-300 text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-tailwind" data-tooltip-placement="bottom" class="fa-solid fa-wind text-sky-400 text-3xl text-center ml-6"></i></li>     
      </ul>
      <ul class="p-6">
        <li><i data-tooltip-target="tooltip-github" data-tooltip-placement="top" class="fa-brands fa-github text-black text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-git" data-tooltip-placement="right" class="fa-brands fa-git text-rose-950 text-3xl text-center ml-6"></i></li>
        <li><i data-tooltip-target="tooltip-vue"  data-tooltip-placement="bottom" class="fa-brands fa-vuejs text-emerald-400 text-3xl text-center ml-6"></i></li>
      </ul>

      <div id="tooltip-html" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        HTML 5
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-css" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        CSS 3
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-js" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        JavaScript
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-git" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Git
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-tailwind" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        TailwindCSS
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-sass" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Sass
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-github" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        GitHub
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-bs" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        Bootstrap
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>

      <div id="tooltip-vue" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
        VueJS
        <div class="tooltip-arrow" data-popper-arrow></div> 
      </div>
    </section>

    <section class="contact-me mt-4 fade-in">
      <p class="text-center">
        Si estás buscando un desarrollador Front End comprometido, creativo y apasionado, ¡no dudes
        en contactarme!
      </p>
      <div
        class="block mx-auto my-4 p-4 font-bold w-2/3 md:w-1/4 px-6 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700 transition duration-300"
      >
        <a href="mailto:alexander.manriquez.s@gmail.com" class="block text-center text-white"
          >Escríbeme</a
        >
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 300}ms`
      el.classList.add('visible')
    })
  },
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
}

.visible {
  animation: fadeIn 1s forwards;
}
</style>
