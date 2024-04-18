<template>
  <div>
    <!-- Header -->
    <Navbar />

    <!-- Hauptinhalt -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
/* Füge hier allgemeine CSS-Stile hinzu */
</style>