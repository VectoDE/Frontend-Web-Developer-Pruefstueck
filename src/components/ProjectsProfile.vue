<template>
    <div class="projects-profile">
        <h2>Projekte des Benutzers</h2>
        <div v-if="loading">Lade Projekte...</div>
        <div v-else>
            <div class="project-row" v-for="(row, index) in projectRows" :key="index">
                <div v-for="project in row" :key="project.id" class="project">
                    <div class="project-header">
                        <img :src="project.image" alt="Project Image" class="project-image">
                        <div class="project-info">
                            <h3>{{ project.title }}</h3>
                            <p>{{ project.languages }}</p>
                            <p>Veröffentlichung: {{ project.date }}</p>
                            <p>{{ project.description }}</p>
                            <a :href="project.livePreview" target="_blank">Live Preview</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const userProjects = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const data = await response.json();
        userProjects.value = data.map(project => ({
            id: project.id,
            title: project.title,
            languages: 'JavaScript, HTML, CSS', // Beispiel für Programmiersprachen oder Tools
            date: new Date().toLocaleDateString(), // Aktuelles Datum als Platzhalter
            description: project.body, // Verwenden Sie die Beschreibung aus den Daten
            image: 'https://via.placeholder.com/150x150', // Beispiel-URL für Bild des Projekts
            livePreview: 'https://example.com', // Beispiel-URL für Live-Vorschau
        }));
        loading.value = false;
    } catch (error) {
        console.error('Fehler beim Laden der Projekte:', error);
    }
});

const projectRows = computed(() => {
    const rows = [];
    for (let i = 0; i < userProjects.value.length; i += 4) {
        rows.push(userProjects.value.slice(i, i + 4));
    }
    return rows;
});
</script>

<style scoped>
.projects-profile {
    padding: 20px;
}

.project-row {
    display: flex;
    flex-wrap: wrap;
    margin: -10px; /* Negative Marge, um die Projekte auszugleichen */
}

.project {
    flex: 1;
    margin: 10px; /* Platz um jedes Projekt */
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.project-header {
    display: flex;
}

.project-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
}

.project-info {
    flex: 1;
}

.project-info a {
    display: block;
    margin-top: 10px;
}
</style>
