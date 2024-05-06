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
      <h2>Services</h2>
      <div class="services">
        <div v-for="(service, index) in services" :key="index" class="service">
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
          <!-- Weiterleitungsbutton -->
          <router-link :to="service.link" class="service-link">Weiterlesen</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";
import { RouterLink } from "vue-router";

const services = [
  {
    name: "Service 1",
    description: "Beschreibung des Service 1.",
    link: "/service1-details", // Hier den Link zur Detailseite des Service 1 einfügen
  },
  {
    name: "Service 2",
    description: "Beschreibung des Service 2.",
    link: "/service2-details", // Hier den Link zur Detailseite des Service 2 einfügen
  },
  // Weitere Services hier einfügen
];
</script>

<style scoped>
/* Deine CSS-Stile für Header, Main, Footer und Services */
.services {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
}

.service {
  border: 1px solid #ccc;
  padding: 10px;
}

.service-link {
  display: block;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  color: blue;
}
</style>
