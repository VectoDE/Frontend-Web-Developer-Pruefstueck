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
      <h2>Webentwicklung</h2>
      <p>
        Wir bieten maßgeschneiderte Webentwicklungslösungen für Ihr Unternehmen an. Unsere
        erfahrenen Entwickler erstellen moderne, ansprechende und benutzerfreundliche
        Websites, die Ihre Geschäftsziele unterstützen.
      </p>

      <h3>Unsere Webentwicklungsdienstleistungen umfassen:</h3>
      <ul>
        <li>Entwicklung responsiver und benutzerfreundlicher Websites</li>
        <li>
          Frontend-Entwicklung mit modernen Technologien wie HTML5, CSS3 und JavaScript
        </li>
        <li>
          Backend-Entwicklung mit robusten Frameworks wie Node.js, Laravel und Django
        </li>
        <li>
          Integration von Content Management Systemen (CMS) wie WordPress, Drupal und
          Joomla
        </li>
        <li>
          E-Commerce-Entwicklung mit Plattformen wie Shopify, WooCommerce und Magento
        </li>
        <li>Benutzerdefinierte Webanwendungs- und Softwareentwicklung</li>
      </ul>

      <p>
        Kontaktieren Sie uns, um mehr über unsere Webentwicklungsdienstleistungen zu
        erfahren und ein individuelles Angebot zu erhalten.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

// Daten für die Seite
const pageTitle = "Webentwicklung";
const pageDescription =
  "Erfahren Sie mehr über unsere maßgeschneiderten Webentwicklungsdienstleistungen.";
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
