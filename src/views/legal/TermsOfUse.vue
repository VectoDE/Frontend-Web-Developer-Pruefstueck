<template>
  <div>
    <!-- Header -->
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Terms of Use</h1>
        <p>Die Nutzungsbedingungen des Example Company Unternehmens.</p>
      </div>
    </header>

    <!-- Hauptinhalt -->
    <main>
      <h2>Terms of Use</h2>
      <p>
        Hier könnten die Nutzungsbedingungen Ihres Unternehmens stehen. Bitte stellen Sie
        sicher, dass die Nutzungsbedingungen klar und verständlich sind und die
        rechtlichen Aspekte der Nutzung Ihrer Dienste abdecken.
      </p>
      <p>
        Nutzungsbedingungen sollten Informationen darüber enthalten, wie Benutzer Ihre
        Dienste nutzen können, ihre Pflichten und Einschränkungen in Bezug auf die
        Nutzung, geistiges Eigentum, Haftungsausschlüsse, Streitbeilegung usw.
      </p>
      <p>
        Es wird empfohlen, die Nutzungsbedingungen regelmäßig zu überprüfen und
        sicherzustellen, dass sie den aktuellen rechtlichen Anforderungen entsprechen.
      </p>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";
import { RouterLink } from "vue-router";
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer definieren */
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

.header img:hover {
  opacity: 0.8;
  transform: rotateZ(360deg);
  transition: transform 2s ease-in-out;
  transform-style: preserve-3d;
}

.header .wrapper {
  margin-top: 1rem;
  font-size: 22px;
  color: transparent;
  background-image: linear-gradient(
    45deg,
    #ff0000,
    #ff7f00,
    #ffff00,
    #00ff00,
    #0000ff,
    #4b0082,
    #8a2be2
  );
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
