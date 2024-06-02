<template>
  <div>
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Impressum</h1>
        <p>Das Impressum von Example Company nach dem §5.</p>
      </div>
    </header>

    <main>
      <h2>Impressum</h2>
      <p>
        Hier könnte das Impressum Ihrer Firma stehen. Bitte füllen Sie die erforderlichen
        Informationen gemäß den gesetzlichen Bestimmungen aus. Das Impressum muss Angaben
        zur verantwortlichen Person oder Firma, Kontaktdaten und weitere rechtlich
        vorgeschriebene Informationen enthalten.
      </p>
      <p>
        Für weitere Informationen und spezifische Anforderungen an das Impressum wenden
        Sie sich bitte an Ihren Rechtsbeistand oder Berater.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";
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
</style>
