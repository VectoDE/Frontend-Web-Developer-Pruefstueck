<template>
    <div>
        <!-- Header -->
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <div class="wrapper">
                <h1>Login</h1>
            </div>
        </header>

        <!-- Hauptinhalt -->
        <main>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="formData.email" required />
                </div>
                <div class="form-group">
                    <label for="password">Passwort:</label>
                    <input type="password" id="password" v-model="formData.password" required />
                </div>
                <button type="submit">Login</button>
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
    email: '',
    password: ''
})

const login = () => {
    // Hier kannst du die Logik für die Anmeldung implementieren
    console.log('Login submitted:', formData.value)
    // Nach der Anmeldung kannst du z.B. zur Startseite navigieren
    router.push('/')
}
</script>

<style scoped>
/* Hier den CSS-Stil für Header, Main, Footer und das Formular definieren */
</style>