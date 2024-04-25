<template>
  <div>
    <!-- Header -->
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Unternehmen</h1>
        <p>Hier könnte eine kurze Zusammenfassung des Unternehmens stehen.</p>
      </div>
    </header>

    <!-- Hauptinhalt -->
    <main>
      <!-- Über uns -->
      <section class="highlighted-section">
        <h2>Über uns</h2>
        <p>Hier könnte eine ausführliche Einführung über Ihr Unternehmen stehen, einschließlich seiner Mission, Vision
          und Werte.</p>
      </section>

      <!-- Projekte -->
      <section class="projects-main">
        <h2>Projekte</h2>
        <div class="projects">
          <div class="project-container">
            <div class="project" v-for="(project, index) in projects" :key="index">
              <img :src="project.image" :alt="'Projekt ' + (index + 1)" />
              <div class="project-info">
                <h3>{{ project.name }}</h3>
                <p>{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Rezensionen -->
      <section>
        <h2>Rezensionen</h2>
        <div class="reviews">
          <div class="review">
            <h3>Bewertung 1</h3>
            <p>Kurzer Auszug aus der Bewertung 1.</p>
          </div>
          <div class="review">
            <h3>Bewertung 2</h3>
            <p>Kurzer Auszug aus der Bewertung 2.</p>
          </div>
          <!-- Weitere Bewertungen hier einfügen -->
        </div>
      </section>

      <!-- Last Posts -->
      <section>
        <h2>Letzte Beiträge</h2>
        <div class="posts">
          <div class="post">
            <img src="" alt="Beitrag 1" />
            <div class="post-info">
              <h3>Titel des Beitrags 1</h3>
              <p>Kurzer Text oder Beschreibung des Beitrags 1.</p>
              <div class="metadata">
                <span>Veröffentlichungsdatum: 01.01.2024</span>
                <span>Ersteller: Autor des Beitrags 1</span>
                <!-- Weitere Metadaten hier einfügen -->
              </div>
            </div>
          </div>
          <div class="post">
            <img src="" alt="Beitrag 2" />
            <div class="post-info">
              <h3>Titel des Beitrags 2</h3>
              <p>Kurzer Text oder Beschreibung des Beitrags 2.</p>
              <div class="metadata">
                <span>Veröffentlichungsdatum: 02.01.2024</span>
                <span>Ersteller: Autor des Beitrags 2</span>
                <!-- Weitere Metadaten hier einfügen -->
              </div>
            </div>
          </div>
          <!-- Weitere Beiträge hier einfügen -->
        </div>
      </section>

      <!-- Partner -->
      <section>
        <h2>Partner</h2>
        <div class="partners">
          <div class="partner">
            <img src="" alt="Partner 1" />
          </div>
          <div class="partner">
            <img src="" alt="Partner 2" />
          </div>
          <!-- Weitere Partner hier einfügen -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import '@/assets/main.css'
import { ref } from 'vue';

// Annahme: Du hast eine Liste von Projekten
const projects = ref([
  { id: 1, name: 'Projekt 1', description: 'Beschreibung des Projekts 1.', image: '' },
  { id: 2, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  { id: 3, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  { id: 4, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  { id: 5, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  { id: 6, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  { id: 7, name: 'Projekt 2', description: 'Beschreibung des Projekts 2.', image: '' },
  // Weitere Projekte hier einfügen
]);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.main {
  width: 100%;
  /* Anpassen nach Bedarf */
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

header img {
  transform: rotateY(0deg);
  transition: transform 2s ease-in-out;
  transform-style: preserve-3d;
}

header img:hover {
  opacity: 0.8;
  transform: rotateZ(360deg);
  transition: transform 2s ease-in-out;
  transform-style: preserve-3d;
}

header .wrapper {
  margin-top: 1rem;
  font-size: 22px;
  color: transparent;
  background-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2);
  background-size: 600% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 8s linear infinite;
}

/* Stil für Über uns */
.highlighted-section {
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: var(--color-primary);
  color: white;
  text-align: center;
  font-size: 22px;
  letter-spacing: 4px;
  background-color: #334;
}

/* Stil für Projekte */
.projects-main {
  background-color: #3334;
  margin: 2rem;
  box-shadow: 0 0 1rem green;
  border-radius: 5rem;
}

.projects-main h2 {
  text-align: center;
  padding: 1rem 0 0 0;
  font-size: 28px;
  color: white;
  margin: 0 0 -1.5rem 0;
  color: transparent;
  background-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2);
  background-size: 600% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 8s linear infinite;
}

.projects {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  font-size: 16px;
  overflow: hidden;
  /* Verhindert, dass Projekte außerhalb des Containers sichtbar sind */
}

.project-container {
  display: flex;
  /* Flexbox verwenden */
  transition: transform 0.5s ease;
  /* Animiertes Sliden */
  margin: 0 5rem 0 5rem; /* Platz links hinzufügen */
  padding: 2rem 0; /* Platz oben und unten hinzufügen */
}

.project {
  width: calc(25% - 20px);
  /* 4 Projekte nebeneinander */
  margin: 10px;
  box-shadow: 0 0 0.5rem rgba(255, 0, 0, 0.377); /* Box-Shadow in Rot mit 5rem Dicke */
}

.project img {
  width: 100%;
  height: auto;
}

.project-info {
  padding: 10px;
}




@keyframes rainbow {
  0% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }

  100% {
    background-position: 0 0;
  }
}
</style>
