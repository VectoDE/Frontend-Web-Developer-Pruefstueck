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
            <h2>Services</h2>
            <div class="services">
                <div class="service">
                    <h3>Service 1</h3>
                    <p>Beschreibung des Service 1.</p>
                </div>
                <div class="service">
                    <h3>Service 2</h3>
                    <p>Beschreibung des Service 2.</p>
                </div>
                <!-- Weitere Services hier einfügen -->
            </div>
        </main>

        <!-- Footer -->
        <footer>
            <p>&copy; 2024</p>
        </footer>
    </div>
</template>

<script setup>
import '@/assets/main.css'
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer definieren */
</style>