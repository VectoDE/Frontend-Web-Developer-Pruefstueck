<template>
    <div>
        <!-- Header -->
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <div class="wrapper">
                <h1>Register</h1>
            </div>
        </header>

        <!-- Hauptinhalt -->
        <main>
            <form @submit.prevent="register">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="formData.username" required />
                </div>
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="formData.email" required />
                </div>
                <div class="form-group">
                    <label for="password">Passwort:</label>
                    <input type="password" id="password" v-model="formData.password" required />
                </div>
                <button type="submit">Register</button>
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

const formData = ref({
    username: '',
    email: '',
    password: ''
})

const register = () => {
    // Hier kannst du die Logik für die Registrierung implementieren
    console.log('Registration submitted:', formData.value)
    // Nach der Registrierung kannst du z.B. zur Startseite navigieren
    router.push('/')
}
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer und das Formular definieren */
</style>