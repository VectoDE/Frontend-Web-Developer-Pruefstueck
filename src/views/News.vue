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
            <h2>News</h2>
            <div class="news">
                <div class="news-item">
                    <h3>News 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer euismod
                        porttitor mauris ac eleifend.</p>
                    <span>Veröffentlicht am: 01.01.2024</span>
                    <span>Verfasser: Autor 1</span>
                </div>
                <div class="news-item">
                    <h3>News 2</h3>
                    <p>Phasellus condimentum eu lorem vel vestibulum. Nulla consectetur ipsum sed nisi lacinia
                        fringilla.</p>
                    <span>Veröffentlicht am: 02.01.2024</span>
                    <span>Verfasser: Autor 2</span>
                </div>
                <!-- Weitere News hier einfügen -->
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