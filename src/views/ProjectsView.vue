<template>
    <div class="container mx-auto p-4">
        <p class="text-xl font-bold mb-4 text-center">Conoce algunos proyectos que he desarrollado</p>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <li v-for="project in projects" :key="project.id" class="border rounded-lg overflow-hidden shadow-lg">
                <a :href="project.url" class="block">
                    <img :src="project.image" :alt="project.name" class="w-full h-48 md:h-64 object-cover">
                </a>
                <p class="p-4 md:p-6 text-center">{{ project.name }}</p>
            </li>
        </ul>
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
    }
};
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>