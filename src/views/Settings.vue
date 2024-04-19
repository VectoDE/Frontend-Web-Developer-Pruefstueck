<template>
    <div class="settings">
        <h2>Einstellungen</h2>
        <div class="personal-info">
            <h3>Persönliche Informationen</h3>
            <div>
                <label for="firstName">Vorname:</label>
                <input type="text" id="firstName" v-model="firstName" />
            </div>
            <div>
                <label for="lastName">Nachname:</label>
                <input type="text" id="lastName" v-model="lastName" />
            </div>
            <div>
                <label for="email">E-Mail:</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <button @click="savePersonalInfo">Speichern</button>
        </div>
        <div class="privacy-settings">
            <h3>Privatsphäre-Einstellungen</h3>
            <div>
                <input type="checkbox" id="showEmail" v-model="showEmail" />
                <label for="showEmail">E-Mail-Adresse anzeigen</label>
            </div>
            <button @click="savePrivacySettings">Speichern</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            showEmail: false,
        };
    },
    methods: {
        savePersonalInfo() {
            // Hier könnten die persönlichen Informationen gespeichert werden
            console.log('Persönliche Informationen gespeichert:', {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
            });
        },
        savePrivacySettings() {
            // Hier könnten die Privatsphäre-Einstellungen gespeichert werden
            console.log('Privatsphäre-Einstellungen gespeichert:', {
                showEmail: this.showEmail,
            });
        },
    },
};
</script>

<style scoped>
/* Hier könnten Sie das Styling für die Einstellungen anpassen */
</style>