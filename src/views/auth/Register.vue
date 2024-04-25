<template>
    <div class="register-page">
        <!-- Header -->
        <header>
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
            <div class="wrapper">
                <h1>Register</h1>
            </div>
        </header>

        <!-- Hauptinhalt -->
        <main>
            <form @submit.prevent="register" class="register-form">
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
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" name="checklegal_button" id="checklegal_button"
                            value="checkedValue">
                        Accept the <a href="">Privacy Policy</a> and <a href="">Terms of Use</a>.
                    </label>
                </div>
                <button type="submit">Register</button>
                <router-link to="/login" class="form-haveacc">Already have an account?</router-link>
            </form>
        </main>
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
header h1 {
    text-align: center;
    color: white;
    padding-bottom: 1rem;
}

.register-page {
    display: flex;
    flex-direction: column;
    min-height: 60vh;
}

.register-form {
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

input[id="username"],
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
    transition: .9s
        /* Die Drehung soll 0,5 Sekunden dauern */
    ;
    transform-style: preserve-3d;
}

.logo:hover {
    transform: rotateZ(360deg);
    transition: .9s
        /* Die Drehung soll 0,5 Sekunden dauern */
    ;
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

.form-check a {
    text-decoration: none;
    color: aqua;
    cursor: pointer;
}

.form-check a:hover {
    color: green;
}

.form-haveacc {
    display: flex;
    justify-content: end;
    margin-top: -1.5rem;
    color: aqua;
    text-decoration: none;
    margin-left: 16rem;
}

.form-haveacc:hover {
    color: green;
}
</style>