<template>
    <div class="login-page">
        <!-- Header -->
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <div class="wrapper">
                <h1>Login</h1>
            </div>
        </header>

        <!-- Hauptinhalt -->
        <main>
            <form @submit.prevent="login" class="login-form">
                <div class="form-group">
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="formData.email" required />
                </div>
                <div class="form-group">
                    <label for="password">Passwort:</label>
                    <input type="password" id="password" v-model="formData.password" required />
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="remember_button" id="remember_button" value="checkedValue">
                        Remember me
                        <router-link to="/register">Don't have an account?</router-link>
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </main>
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
header h1 {
    text-align: center;
    color: white;
    padding-bottom: 1rem;
}

.login-page {
    display: flex;
    flex-direction: column;
    min-height: 60vh;
}

.login-form {
    margin: auto auto 4rem auto;
    padding: 2rem;
    max-width: 500px;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(206, 204, 204, 0.1);
}

.form-group {
    margin-bottom: 1rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
}

input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

.logo {
    margin: 2rem auto 0 auto;
    display: block;
    transform: rotateY(0deg);
    transition: .9s /* Die Drehung soll 0,5 Sekunden dauern */;
    transform-style: preserve-3d;
}

.logo:hover {
    transform: rotateZ(360deg);
    transition: .9s /* Die Drehung soll 0,5 Sekunden dauern */;
    transform-style: preserve-3d;
}

.form-check {
    margin-bottom: 1rem;
}

.form-check-input {
    margin-right: 0.3rem;
}

.form-check label {
    color: white;
}

.form-check label a {
    display: flex;
    justify-content: end;
    text-decoration: none;
    color: aqua;
    cursor: pointer;
    margin-top: -1.4rem;
    color: aqua;
    margin-left: 17rem;
}

.form-check label a:hover {
    color: green;
}
</style>