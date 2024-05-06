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
      <h2>Team</h2>
      <!-- Mitarbeiterliste -->
      <div class="team-list">
        <div v-for="(member, index) in teamMembers" :key="index" class="member">
          <img :src="member.image" :alt="member.name" class="member-image" />
          <h3>{{ member.name }}</h3>
          <p>{{ member.position }}</p>
          <!-- Social Media Links -->
          <div class="social-media">
            <a :href="member.socialMedia.linkedin" target="_blank">LinkedIn</a>
            <a :href="member.socialMedia.twitter" target="_blank">Twitter</a>
            <a :href="member.socialMedia.github" target="_blank">GitHub</a>
            <!-- Füge hier weitere Social Media Links hinzu -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

const teamMembers = [
  {
    name: "Max Mustermann",
    position: "CEO",
    image: "@/assets/max_mustermann.jpg", // Beispielbildpfad
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/max-mustermann",
      twitter: "https://twitter.com/maxmustermann",
      github: "https://github.com/maxmustermann",
    },
  },
  {
    name: "Erika Musterfrau",
    position: "Entwickler",
    image: "@/assets/erika_musterfrau.jpg", // Beispielbildpfad
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/erika-musterfrau",
      twitter: "https://twitter.com/erikamusterfrau",
      github: "https://github.com/erikamusterfrau",
    },
  },
  // Füge weitere Mitarbeiter hinzu
];
</script>

<style scoped>
/* Deine CSS-Stile für Header, Main, Footer und Teamliste */
.team-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.member {
  text-align: center;
}

.member-image {
  border-radius: 50%; /* Rundes Bild */
  width: 100px; /* Anpassen der Breite des Bildes */
  height: 100px; /* Anpassen der Höhe des Bildes */
  object-fit: cover; /* Das Bild im Kreis zentriert darstellen */
  margin-bottom: 10px; /* Abstand zum Namen */
}
</style>
