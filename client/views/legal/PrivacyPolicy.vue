<template>
  <div>
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Privacy Policy</h1>
        <p>Die Datenschutzrichtlinien des Example Name Unternehmens.</p>
      </div>
    </header>

    <main>
      <h2>Privacy Policy</h2>
      <p>
        Hier könnte die Datenschutzrichtlinie Ihres Unternehmens stehen. Bitte stellen Sie
        sicher, dass die Datenschutzrichtlinie den gesetzlichen Anforderungen entspricht
        und die Erfassung, Verarbeitung und Nutzung personenbezogener Daten transparent
        darstellt.
      </p>
      <p>
        Datenschutzrichtlinien sollten Informationen darüber enthalten, wie
        personenbezogene Daten gesammelt, verwendet, geschützt und weitergegeben werden,
        sowie die Rechte der Benutzer in Bezug auf ihre Daten.
      </p>
      <p>
        Es wird empfohlen, die Datenschutzrichtlinie regelmäßig zu aktualisieren und
        sicherzustellen, dass sie leicht zugänglich und verständlich ist.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";
import { RouterLink } from "vue-router";
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
