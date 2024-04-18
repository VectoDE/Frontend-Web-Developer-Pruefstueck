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
            <h2>Contact</h2>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="formData.name" required />
                </div>
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="formData.email" required />
                </div>
                <div class="form-group">
                    <label for="message">Nachricht:</label>
                    <textarea id="message" v-model="formData.message" required></textarea>
                </div>
                <button type="submit">Absenden</button>
            </form>
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
import { ref } from 'vue'

// Initialisiere die Daten für das Kontaktformular
const formData = ref({
    name: '',
    email: '',
    message: ''
})

// Methode zum Absenden des Formulars
const submitForm = () => {
    // Hier kannst du die Logik zum Absenden des Formulars implementieren, z.B. eine API-Anfrage
    console.log('Form submitted:', formData.value)
    // Nach dem Absenden kannst du das Formular zurücksetzen
    formData.value.name = ''
    formData.value.email = ''
    formData.value.message = ''
}
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer und das Formular definieren */
.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>