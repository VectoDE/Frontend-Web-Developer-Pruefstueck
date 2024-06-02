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
      <h2>Was ist UI/UX Design?</h2>
      <p>
        UI/UX Design steht für User Interface Design und User Experience Design. Es
        handelt sich um das Designen von Benutzeroberflächen und das Gestalten der
        Nutzererfahrung, um die Zufriedenheit und das Vergnügen des Benutzers beim
        Interagieren mit dem Produkt zu maximieren.
      </p>

      <h2>Der Ablauf des UI/UX Design Prozesses</h2>
      <ol>
        <li>Benutzerforschung und Analyse der Anforderungen</li>
        <li>Erstellung von Wireframes und Prototypen</li>
        <li>UI Design: Entwicklung der visuellen Gestaltungselemente</li>
        <li>UX Design: Gestaltung der Benutzerinteraktion und -erfahrung</li>
        <li>Usability-Tests und Feedback einholen</li>
        <li>Iterative Verbesserungen basierend auf dem Feedback</li>
        <li>Endgültige Umsetzung und Bereitstellung</li>
      </ol>

      <h2>Beispiele für UI/UX Designs</h2>
      <div class="examples">
        <div class="example">
          <img src="" alt="UI/UX Beispiel 1" />
          <p>Beispiel 1: App-Benutzeroberfläche mit intuitivem Design</p>
        </div>
        <div class="example">
          <img src="" alt="UI/UX Beispiel 2" />
          <p>Beispiel 2: Webseite mit benutzerfreundlicher Navigation</p>
        </div>
        <div class="example">
          <img src="" alt="UI/UX Beispiel 3" />
          <p>Beispiel 3: Interaktiver Prototyp für ein Softwareprodukt</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

const pageTitle = "UI/UX Design";
const pageDescription =
  "Hier erfahren Sie mehr über UI/UX Design und sehen einige Beispiele.";
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

main {
  padding: 20px;
}

h2 {
  margin-top: 40px;
}

ol,
ul {
  list-style-type: none;
  padding: 0;
}

ol li {
  margin-bottom: 10px;
}

.examples {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.example {
  text-align: center;
}

.example img {
  max-width: 300px;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
