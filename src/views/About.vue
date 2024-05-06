<template>
  <div>
    <!-- Header -->
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Unternehmen</h1>
        <p>Hier könnten wir eine kurze Zusammenfassung unseres Unternehmens haben.</p>
      </div>
    </header>

    <!-- Hauptinhalt -->
    <main>
      <h2>Über Uns</h2>
      <p>
        <img src="" alt="Bild 1" class="image-left" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor bibendum
        nisi, eu porta elit vehicula sed. Duis sed libero non justo fermentum vestibulum.
      </p>
      <p>
        Sed sodales lacinia magna, vel suscipit quam posuere sit amet. Vivamus pulvinar
        aliquam arcu sed laoreet. Nullam sollicitudin convallis justo, eget varius metus
        auctor in. Aenean vehicula consequat magna eget fermentum.
      </p>
      <p>
        <img src="" alt="Bild 2" class="image-right" />
        Nam vel turpis sem. Integer volutpat lorem eu odio fermentum, eget condimentum
        felis tristique. Quisque vel nisl in neque facilisis vestibulum. Curabitur commodo
        metus at aliquam fermentum.
      </p>
      <p>
        Sed sodales lacinia magna, vel suscipit quam posuere sit amet. Vivamus pulvinar
        aliquam arcu sed laoreet. Nullam sollicitudin convallis justo, eget varius metus
        auctor in. Aenean vehicula consequat magna eget fermentum.
      </p>
      <p>
        <img src="" alt="Bild 1" class="image-left" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor bibendum
        nisi, eu porta elit vehicula sed. Duis sed libero non justo fermentum vestibulum.
      </p>
      <p>
        Sed sodales lacinia magna, vel suscipit quam posuere sit amet. Vivamus pulvinar
        aliquam arcu sed laoreet. Nullam sollicitudin convallis justo, eget varius metus
        auctor in. Aenean vehicula consequat magna eget fermentum.
      </p>
      <p>
        <img src="" alt="Bild 2" class="image-right" />
        Nam vel turpis sem. Integer volutpat lorem eu odio fermentum, eget condimentum
        felis tristique. Quisque vel nisl in neque facilisis vestibulum. Curabitur commodo
        metus at aliquam fermentum.
      </p>
      <p>Mehr über uns erfahren Sie unter <a href="/team">Unser Team</a>.</p>
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
  color: white;
}

main {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}
</style>
