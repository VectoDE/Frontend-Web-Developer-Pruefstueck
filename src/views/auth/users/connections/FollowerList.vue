<template>
    <div>
        <h2>Follower</h2>
        <ul>
            <li v-for="(follower, index) in followers" :key="index">
                {{ follower.name }} - {{ follower.email }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für Follower
const followers = ref([
    { name: 'Max Mustermann', email: 'max@example.com' },
    { name: 'Maria Musterfrau', email: 'maria@example.com' },
    { name: 'John Doe', email: 'john@example.com' }
]);
</script>

<style scoped>
/* Hier den CSS-Stil für die Follower-Liste definieren */
</style>