<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Unternehmen</h1>
        <p>Hier könnte eine kurze Zusammenfassung des Unternehmens stehen.</p>
      </div>
    </header>
    <h2>Unser Team</h2>
    <div class="team-grid">
      <div v-for="(team, index) in teams" :key="index" class="team">
        <img :src="team.image" :alt="'Bild ' + (index + 1)" class="team-image" />
        <div class="team-details">
          <h3>{{ team.name }}</h3>
          <p>{{ team.slogan }}</p>
          <p>Erfahrung: {{ team.experience }}</p>
          <p>Spezialisierung: {{ team.specialization }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const teams = ref([
  {
    name: "Team 1",
    slogan: "Gemeinsam stark",
    experience: "5 Jahre",
    specialization: "Frontend-Entwicklung",
    image: "team1.jpg", // Pfad zum Bild für Team 1
  },
  {
    name: "Team 2",
    slogan: "Innovation ist unsere Stärke",
    experience: "7 Jahre",
    specialization: "Backend-Entwicklung",
    image: "team2.jpg", // Pfad zum Bild für Team 2
  },
  {
    name: "Team 3",
    slogan: "Kreativität kennt keine Grenzen",
    experience: "3 Jahre",
    specialization: "UI/UX Design",
    image: "team3.jpg", // Pfad zum Bild für Team 3
  },
  {
    name: "Team 3",
    slogan: "Kreativität kennt keine Grenzen",
    experience: "3 Jahre",
    specialization: "UI/UX Design",
    image: "team3.jpg", // Pfad zum Bild für Team 3
  },
  // Weitere Teams hier einfügen
]);
</script>

<style scoped>
.team-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.team {
  width: calc(25% - 10px);
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.team-image {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
}

.team-details {
  text-align: center;
}
</style>
