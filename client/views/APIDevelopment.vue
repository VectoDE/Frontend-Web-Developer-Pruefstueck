<template>
  <div>
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>{{ pageTitle }}</h1>
        <p>{{ pageDescription }}</p>
      </div>
    </header>

    <main>
      <h2>Was ist eine API?</h2>
      <p>
        Eine API (Application Programming Interface) ist eine Schnittstelle, die es
        verschiedenen Anwendungen ermöglicht, miteinander zu kommunizieren und Daten
        auszutauschen.
      </p>

      <h2>Warum API Entwicklung?</h2>
      <p>
        Die Entwicklung von APIs ermöglicht es, Daten und Funktionen einer Anwendung für
        andere Anwendungen zugänglich zu machen. Dies fördert die Interoperabilität
        zwischen verschiedenen Systemen und erleichtert die Integration neuer Funktionen.
      </p>

      <h2>API Entwicklung mit verschiedenen Sprachen</h2>
      <p>APIs können in verschiedenen Programmiersprachen entwickelt werden, darunter:</p>
      <ul>
        <li v-for="language in supportedLanguages" :key="language">{{ language }}</li>
      </ul>

      <h2>Wie funktioniert eine API?</h2>
      <p>
        APIs arbeiten oft nach dem REST (Representational State Transfer) Prinzip, das auf
        HTTP-Protokollen basiert. Durch definierte Endpunkte können Anfragen an die API
        gesendet und Daten im JSON-Format empfangen werden.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

const pageTitle = "API Entwicklung";
const pageDescription =
  "Hier erfahren Sie mehr über die Entwicklung von APIs und deren Funktionsweise.";
const supportedLanguages = ["JavaScript (Node.js)", "Python", "Java", "C#"];
</script>

<style scoped>
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

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff1e;
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

main {
  padding: 20px;
}

h2 {
  margin-top: 40px;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 10px;
}
</style>
