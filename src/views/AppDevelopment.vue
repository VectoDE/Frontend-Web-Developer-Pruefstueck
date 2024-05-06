<template>
  <div>
    <!-- Header -->
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </header>

    <!-- Hauptinhalt -->
    <main>
      <h2>App-Entwicklung</h2>
      <p>
        Unsere App-Entwicklungsdienstleistungen umfassen die Gestaltung und Entwicklung
        von maßgeschneiderten mobilen Anwendungen für verschiedene Plattformen,
        einschließlich iOS und Android. Wir bieten kreative Lösungen, die die
        Benutzererfahrung verbessern und Ihre Geschäftsziele unterstützen.
      </p>

      <h3>Unsere Dienstleistungen für die App-Entwicklung umfassen:</h3>
      <ul>
        <li>Entwicklung von nativen mobilen Apps für iOS und Android</li>
        <li>
          Entwicklung von plattformübergreifenden mobilen Apps mit React Native und
          Flutter
        </li>
        <li>
          Benutzeroberflächendesign und -entwicklung für eine intuitive Benutzererfahrung
        </li>
        <li>Integration von Back-End-Services und APIs für die Datenverarbeitung</li>
        <li>Qualitätssicherung und Testen für eine stabile und zuverlässige Leistung</li>
        <li>
          Veröffentlichung und Bereitstellung von Apps in den entsprechenden App Stores
        </li>
      </ul>

      <p>
        Kontaktieren Sie uns, um mehr über unsere App-Entwicklungsdienstleistungen zu
        erfahren und ein individuelles Angebot zu erhalten.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

// Daten für die Seite
const pageTitle = "App-Entwicklung";
const pageDescription =
  "Erfahren Sie mehr über unsere maßgeschneiderten App-Entwicklungsdienstleistungen.";
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer und das Formular definieren */
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
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

main {
  padding: 20px;
}

h2,
h3 {
  margin-top: 40px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>
