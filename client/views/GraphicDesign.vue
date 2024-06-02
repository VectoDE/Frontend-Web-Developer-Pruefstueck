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
      <h2>Was ist Graphic Design?</h2>
      <p>
        Graphic Design ist die visuelle Gestaltung von Inhalten, um Informationen effektiv
        zu kommunizieren. Es umfasst die Verwendung von Typografie, Bildern, Farben und
        Layouts, um ansprechende und wirkungsvolle Designs zu erstellen.
      </p>

      <h2>Die Erstellung von Graphic Designs</h2>
      <p>
        Die Erstellung von Graphic Designs erfolgt in der Regel in mehreren Schritten:
      </p>
      <ol>
        <li>Sammlung von Anforderungen und Zielsetzungen</li>
        <li>Entwurf von Konzepten und Skizzen</li>
        <li>
          Digitale Umsetzung mit Grafikdesign-Software wie Adobe Illustrator oder Adobe
          Photoshop
        </li>
        <li>Überarbeitung und Anpassung basierend auf Feedback</li>
        <li>Endgültige Fertigstellung und Bereitstellung</li>
      </ol>

      <h2>Beispiele für Graphic Designs</h2>
      <div class="examples">
        <div class="example">
          <img src="" alt="Beispiel 1" />
          <p>Beispiel 1: Logo-Design für ein Unternehmen</p>
        </div>
        <div class="example">
          <img src="" alt="Beispiel 2" />
          <p>Beispiel 2: Poster-Design für eine Veranstaltung</p>
        </div>
        <div class="example">
          <img src="" alt="Beispiel 3" />
          <p>Beispiel 3: Werbebanner für eine Produktkampagne</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

const pageTitle = "Graphic Design";
const pageDescription =
  "Hier erfahren Sie mehr über die Erstellung von Graphic Designs und sehen einige Beispiele.";
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
