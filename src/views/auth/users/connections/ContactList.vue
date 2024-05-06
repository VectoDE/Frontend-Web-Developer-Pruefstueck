<template>
    <div>
        <h2>Geschlossene Kontakte</h2>
        <ul>
            <li v-for="(contact, index) in closedContacts" :key="index">
                {{ contact.name }} - {{ contact.email }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für geschlossene Kontakte
const closedContacts = ref([
    { name: 'Max Mustermann', email: 'max@example.com' },
    { name: 'Maria Musterfrau', email: 'maria@example.com' },
    { name: 'John Doe', email: 'john@example.com' }
]);
</script>

<style scoped>
/* Hier den CSS-Stil für die Kontaktliste definieren */
</style>