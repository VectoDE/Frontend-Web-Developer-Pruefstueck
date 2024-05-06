<template>
  <div>
    <!-- Header -->
    <header class="header">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Kontakt</h1>
        <p>Kontaktiere uns um mehr zu Erfahren.</p>
      </div>
    </header>

    <!-- Hauptinhalt -->
    <main>
      <h2 style="display: none;">Kontakt</h2>
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.username" required />
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
  </div>
</template>

<script setup>
import "@/assets/main.css";
import { ref } from "vue";

// Initialisiere die Daten für das Kontaktformular
const formData = ref({
  username: "",
  email: "",
  message: "",
});

// Methode zum Absenden des Formulars
const submitForm = () => {
  // Hier kannst du die Logik zum Absenden des Formulars implementieren, z.B. eine API-Anfrage
  console.log("Form submitted:", formData.value);
  // Nach dem Absenden kannst du das Formular zurücksetzen
  formData.value.username = "";
  formData.value.email = "";
  formData.value.message = "";
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
}

header img:hover {
  opacity: 0.8;
  transform: rotateZ(360deg);
  transition: transform 2s ease-in-out;
  transform-style: preserve-3d;
}

header .wrapper {
  margin-top: 1rem;
  font-size: 22px;
  color: transparent;
  background-image: linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8a2be2);
  background-size: 600% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: rainbow 8s linear infinite;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff1e;
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

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
