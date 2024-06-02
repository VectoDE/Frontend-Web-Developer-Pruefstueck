<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Unternehmen</h1>
        <p>Hier könnte eine kurze Zusammenfassung des Unternehmens stehen.</p>
      </div>
    </header>

    <main>
      <h2>Unsere Projekte</h2>
      <div class="projects-container">
        <div v-for="(project, index) in projects" :key="index" class="project">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <div class="project-details">
            <h3>{{ project.title }}</h3>
            <p>Veröffentlichungsdatum: {{ project.date }}</p>
            <p>Thema: {{ project.topic }}</p>
            <!-- Optionaler Weiterleitungslink -->
            <a v-if="project.link" :href="project.link" class="project-link"
              >Weiterlesen</a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "Projekt 1",
    image: "/assets/project1.jpg",
    date: "01.01.2024",
    topic: "Webentwicklung",
    link: "/projekt1-details",
  },
  {
    title: "Projekt 2",
    image: "/assets/project2.jpg",
    date: "15.02.2024",
    topic: "App-Entwicklung",
    link: "/projekt2-details",
  },
]);
</script>

<style scoped>
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.project {
  border: 1px solid #ccc;
  padding: 10px;
}

.project-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.project-details {
  text-align: center;
}

.project-link {
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: blue;
}
</style>
