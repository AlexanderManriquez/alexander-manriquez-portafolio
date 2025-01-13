<template>
  <div class="container mx-auto p-4">
    <h1 class="text-center text-2xl font-semibold">Acerca de Mi</h1>
    <section class="about">
      <p class="mt-4 px-6 fade-in">
        Después de más de 10 años en ventas y servicio al cliente, decidí reinventar mi carrera profesional siguiendo una pasión latente: el desarrollo web. Mi experiencia previa me ha enseñado la importancia de entender y satisfacer las necesidades de los usuarios, algo que considero esencial en el diseño y desarrollo de interfaces que sean funcionales y accesibles. Esta transición no fue casual; fue el resultado de una curiosidad constante por la tecnología y una profunda dedicación a aprender habilidades que transforman ideas en soluciones digitales.
      </p>
      <p class="mt-4 px-6 fade-in">
        Durante mi formación como desarrollador front-end, he perfeccionado habilidades en HTML, CSS, JavaScript, entre otros. Mis proyectos reflejan no solo mi capacidad técnica, sino también un enfoque orientado al usuario que adquirí durante mi experiencia previa. Me he enfocado en crear aplicaciones intuitivas, con especial atención a los detalles visuales y la experiencia de usuario, para garantizar que las soluciones que desarrollo sean tan prácticas como atractivas.
      </p>
      <p class="mt-4 px-6 fade-in">
        Estoy entusiasmado por la oportunidad de unir mi pasado profesional con mi presente en desarrollo web. Mis habilidades en comunicación, resolución de problemas y trabajo en equipo me permiten integrarme fácilmente en cualquier entorno laboral. Estoy listo para aportar valor a cualquier equipo, aprendiendo y creciendo junto a profesionales con los que comparta la visión de crear experiencias digitales memorables.
      </p>
    </section>

    <section class="skills flex justify-center mt-8 fade-in">
        <ul class="p-6">
        <li>&nbsp;</li>
        <li class="font-semibold">Mis Habilidades</li>
      </ul>
      <ul class="p-6">
        <li><i class="fa-brands fa-html5 text-orange-500"></i> HTML 5</li>
        <li><i class="fa-brands fa-css text-blue-700"></i> CSS 3</li>
        <li><i class="fa-brands fa-js text-yellow-400"></i> JavaScript</li>
      </ul>
      <ul class="p-6">
        <li><i class="fa-brands fa-git text-rose-950"></i> Git</li>
        <li><i class="fa-solid fa-wind text-sky-400"></i> Tailwind</li>
        <li><i class="fa-brands fa-sass text-fuchsia-300"></i> Sass</li>
      </ul>
      <ul class="p-6">
        <li><i class="fa-brands fa-github text-black"></i> Github</li>
        <li><i class="fa-brands fa-bootstrap text-indigo-600"></i> Bootstrap</li>
        <li><i class="fa-brands fa-vuejs text-emerald-400"></i>   Vue.js</li>
      </ul>
    </section>

    <section class="contact-me mt-4 fade-in">
      <p class="text-center">
        Si estás buscando un desarrollador Front End comprometido, creativo y apasionado, ¡no dudes
        en contactarme!
      </p>
      <div class="block mx-auto mt-4 p-4 font-bold w-1/4 bg-slate-800 rounded-xl hover:bg-slate-700 transition duration-300">
        <a href="mailto:alexander.manriquez.s@gmail.com" class="block text-center text-white"> Envíame un mensaje</a>
      </div>     
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 500}ms`;
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

.hover\:bg-slate-700:hover {
  background-color: #374151;
}
</style>
