<template>
    <div class="container mx-auto p-4">
        <p class="text-xl font-bold mb-4 text-center fade-in">Conoce algunos proyectos que he desarrollado</p>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li v-for="project in projects" :key="project.id" class="border rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 fade-in">
                <a :href="project.url" class="block" target="_blank">
                    <img :src="project.image" :alt="project.name" class="w-full h-48 md:h-64 object-cover hover:opacity-75 transition-opacity duration-500">
                </a>
                <p class="p-4 md:p-6 text-center">{{ project.name }}</p>
            </li>
        </ul>
        <p class="text-center mt-10 p-4 fade-in">Si deseas ver todos mis proyectos, visita mi <a href="https://github.com/AlexanderManriquez/" target="_blank" class="underline"><b>Github.</b></a></p>
    </div>
</template>

<script>
import image1 from '../assets/quien-es-ese-pokemon.png';
import image2 from '../assets/desafio-cachipun.jpg';
import image3 from '../assets/viajes-chile.jpg';

export default {
    data() {
        return {
            projects: [
                { id: 1, name: '¿Quién es ese Pokémon?', url: 'https://quien-es-ese-pokemon-cyan.vercel.app/', image: image1 },
                { id: 2, name: 'Desafío Cachipun', url: 'https://alexandermanriquez.github.io/desafio-cachipun/', image: image2 },
                { id: 3, name: 'Viajes Chile', url: 'https://alexandermanriquez.github.io/prueba-actualizacion-viajes-chile/', image: image3 }
            ]
        };
    },
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

.hover\:scale-105:hover {
    transform: scale(1.05);
}

.hover\:opacity-75:hover {
    opacity: 0.75;
}
</style>