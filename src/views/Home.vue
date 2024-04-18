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
      <!-- Services -->
      <section>
        <h2>Services</h2>
        <div class="service">
          <h3>Service 1</h3>
          <p>Beschreibung des Service 1.</p>
        </div>
        <div class="service">
          <h3>Service 2</h3>
          <p>Beschreibung des Service 2.</p>
        </div>
        <!-- Weitere Services hier einfügen -->
      </section>

      <!-- Last Posts -->
      <section>
        <h2>Last Posts</h2>
        <div class="posts">
          <div class="post">
            <img src="" alt="Post 1" />
            <div class="post-info">
              <h3>Titel des Posts 1</h3>
              <p>Kurzer Text oder Beschreibung des Posts 1.</p>
              <div class="metadata">
                <span>Veröffentlichungsdatum: 01.01.2024</span>
                <span>Ersteller: Autor des Posts 1</span>
                <span>Thema: Thema des Posts 1</span>
              </div>
            </div>
          </div>
          <div class="post">
            <img src="" alt="Post 2" />
            <div class="post-info">
              <h3>Titel des Posts 2</h3>
              <p>Kurzer Text oder Beschreibung des Posts 2.</p>
              <div class="metadata">
                <span>Veröffentlichungsdatum: 02.01.2024</span>
                <span>Ersteller: Autor des Posts 2</span>
                <span>Thema: Thema des Posts 2</span>
              </div>
            </div>
          </div>
          <!-- Weitere Posts hier einfügen -->
        </div>
      </section>

      <!-- Partner -->
      <section>
        <h2>Partner</h2>
        <div class="partner">
          <div class="partner-item">
            <img src="" alt="Partner 1" />
          </div>
          <div class="partner-item">
            <img src="" alt="Partner 2" />
          </div>
          <!-- Weitere Partner hier einfügen -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import '@/assets/main.css'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer definieren */
</style>