<template>
    <div>
        <h2>Freunde</h2>
        <ul>
            <li v-for="(friend, index) in friends" :key="index">
                {{ friend.name }} - {{ friend.email }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für Freunde
const friends = ref([
    { name: 'Lisa Beispiel', email: 'lisa@example.com' },
    { name: 'Peter Muster', email: 'peter@example.com' },
    { name: 'Sarah Test', email: 'sarah@example.com' }
]);
</script>

<style scoped>
/* Hier den CSS-Stil für die Freundesliste definieren */
</style>