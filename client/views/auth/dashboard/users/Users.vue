<template>
    <div>
        <h2>Benutzerliste</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
                <button @click="editUser(user)">Bearbeiten</button>
                <button @click="deleteUser(user.id)">Löschen</button>
            </li>
        </ul>

        <h2>Benutzer hinzufügen</h2>
        <form @submit.prevent="addUser">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="newUser.name" required />

            <label for="email">Email:</label>
            <input type="email" id="email" v-model="newUser.email" required />

            <button type="submit">Hinzufügen</button>
        </form>

        <!-- Modal für die Benutzerbearbeitung -->
        <div v-if="editModalOpen">
            <h2>Benutzer bearbeiten</h2>
            <form @submit.prevent="updateUser">
                <label for="editName">Name:</label>
                <input type="text" id="editName" v-model="editedUser.name" required />

                <label for="editEmail">Email:</label>
                <input type="email" id="editEmail" v-model="editedUser.email" required />

                <button type="submit">Aktualisieren</button>
                <button @click="cancelEdit">Abbrechen</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Beispiel-Daten für Benutzer
const users = ref([
    { id: 1, name: 'Benutzer 1', email: 'benutzer1@example.com' },
    { id: 2, name: 'Benutzer 2', email: 'benutzer2@example.com' },
    { id: 3, name: 'Benutzer 3', email: 'benutzer3@example.com' },
    // Weitere Benutzer hinzufügen...
]);

// Neuer Benutzer
const newUser = ref({
    name: '',
    email: '',
});

// Bearbeiteter Benutzer
const editedUser = ref({
    id: null,
    name: '',
    email: '',
});

// Modal für die Bearbeitung öffnen/schließen
const editModalOpen = ref(false);

// Benutzer hinzufügen
const addUser = () => {
    users.value.push({ ...newUser.value, id: users.value.length + 1 });
    newUser.value.name = '';
    newUser.value.email = '';
};

// Benutzer bearbeiten
const editUser = (user) => {
    editedUser.value.id = user.id;
    editedUser.value.name = user.name;
    editedUser.value.email = user.email;
    editModalOpen.value = true;
};

// Benutzer aktualisieren
const updateUser = () => {
    const index = users.value.findIndex(user => user.id === editedUser.value.id);
    if (index !== -1) {
        users.value[index].name = editedUser.value.name;
        users.value[index].email = editedUser.value.email;
        cancelEdit();
    }
};

// Bearbeitung abbrechen
const cancelEdit = () => {
    editedUser.value.id = null;
    editedUser.value.name = '';
    editedUser.value.email = '';
    editModalOpen.value = false;
};

// Benutzer löschen
const deleteUser = (userId) => {
    const index = users.value.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.value.splice(index, 1);
    }
};
</script>

<style scoped>
/* Hier den CSS-Stil für die Benutzerliste definieren */
ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
</style>