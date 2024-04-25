<template>
    <div class="settings">
        <h2>Einstellungen</h2>
        <div class="personal-info">
            <h3>Persönliche Informationen</h3>
            <div class="input-group">
                <div>
                    <label for="firstName">Vorname:</label>
                    <input type="text" id="firstName" v-model="firstName" />
                </div>
                <div>
                    <label for="lastName">Nachname:</label>
                    <input type="text" id="lastName" v-model="lastName" />
                </div>
            </div>
            <div class="input-group">
                <div>
                    <label for="email">E-Mail:</label>
                    <input type="email" id="email" v-model="email" />
                </div>
                <div>
                    <label for="street">Straße:</label>
                    <input type="text" id="street" v-model="street" />
                </div>
            </div>
            <div class="input-group">
                <div>
                    <label for="houseNumber">Hausnummer:</label>
                    <input type="text" id="houseNumber" v-model="houseNumber" />
                </div>
                <div>
                    <label for="zipCode">Postleitzahl:</label>
                    <input type="text" id="zipCode" v-model="zipCode" />
                </div>
            </div>
            <div class="input-group">
                <div>
                    <label for="state">Bundesland:</label>
                    <input type="text" id="state" v-model="state" />
                </div>
                <div>
                    <label for="country">Land:</label>
                    <input type="text" id="country" v-model="country" />
                </div>
            </div>
            <button class="personal-info-button" @click="savePersonalInfo">Speichern</button>
        </div>
        <div class="privacy-settings">
            <h3>Privatsphäre-Einstellungen</h3>
            <div v-for="(setting, index) in privacySettings" :key="index">
                <input type="checkbox" :id="'privacySetting' + index" v-model="setting.enabled" />
                <label :for="'privacySetting' + index">{{ setting.label }}</label>
            </div>
            <button @click="savePrivacySettings">Speichern</button>
        </div>
        <div class="session-settings">
            <h3>Browser-Sitzungen</h3>
            <p>Hier können Sie Ihre aktiven Browser-Sitzungen verwalten.</p>
            <button @click="showManageSessionModal = true">Session verwalten</button>

            <!-- Modal -->
            <div v-if="showManageSessionModal" class="modal">
                <div class="modal-content">
                    <span class="close" @click="showManageSessionModal = false">&times;</span>
                    <h4>Aktive Sitzungen verwalten</h4>
                    <ul v-if="sessions.length > 0">
                        <li v-for="(session, index) in sessions" :key="index">
                            {{ session.device }} - Letzte Anmeldung: {{ session.lastLogin }}
                            <button @click="logoutSession(index)">Abmelden</button>
                        </li>
                    </ul>
                    <p v-else>Keine aktiven Sitzungen gefunden.</p>
                </div>
            </div>
        </div>
        <div class="delete-account">
            <h3>Konto löschen</h3>
            <p>Wenn Sie Ihr Konto löschen, werden alle Ihre Daten dauerhaft entfernt.</p>
            <p>Das Löschverfahren erfolgt in zwei Schritten:</p>
            <ol>
                <li>
                    Sie bestätigen Ihre Entscheidung, Ihr Konto zu löschen.
                </li>
                <li>
                    Geben Sie Ihren Benutzernamen ein und bestätigen Sie erneut, um fortzufahren.
                </li>
            </ol>
            <button @click="openConfirmationModal">Konto löschen</button>

            <!-- Bestätigungsmodals -->
            <div v-if="confirmingDelete">
                <div class="confirmation-modal">
                    <p>Sind Sie sicher, dass Sie Ihr Konto löschen möchten?</p>
                    <button @click="confirmDelete">Ja</button>
                    <button @click="cancelDelete">Abbrechen</button>
                </div>
                <div class="username-modal" v-if="confirmingUsername">
                    <p>Bitte geben Sie Ihren Benutzernamen ein, um fortzufahren:</p>
                    <input type="text" v-model="enteredUsername" placeholder="Benutzername">
                    <button @click="confirmUsername">Löschen</button>
                    <button @click="cancelUsername">Abbrechen</button>
                </div>
            </div>
        </div>
        <div class="profile-settings">
            <h3>Profil-Einstellungen</h3>
            <div>
                <label for="profileVisibility">Profil-Sichtbarkeit:</label>
                <select id="profileVisibility" v-model="profileVisibility">
                    <option value="public">Öffentlich</option>
                    <option value="private">Privat</option>
                    <option value="friends">Nur für Freunde</option>
                </select>
            </div>
            <div>
                <label for="accountType">Konto-Art:</label>
                <select id="accountType" v-model="accountType">
                    <option value="normal">Normal</option>
                    <option value="creator">Creator</option>
                    <option value="business">Business</option>
                </select>
            </div>
            <div>
                <label for="profilePictureVisibility">Profilbild-Sichtbarkeit:</label>
                <select id="profilePictureVisibility" v-model="profilePictureVisibility">
                    <option value="everyone">Jeder</option>
                    <option value="friends">Nur für Freunde</option>
                    <option value="selected">Für Ausgewählte</option>
                </select>
            </div>
            <div>
                <label for="bannerVisibility">Banner-Sichtbarkeit:</label>
                <select id="bannerVisibility" v-model="bannerVisibility">
                    <option value="everyone">Jeder</option>
                    <option value="friends">Nur für Freunde</option>
                    <option value="selected">Für Ausgewählte</option>
                </select>
            </div>
            <button @click="saveProfileSettings">Einstellungen speichern</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const firstName = ref('');
        const lastName = ref('');
        const email = ref('');
        const street = ref('');
        const houseNumber = ref('');
        const zipCode = ref('');
        const state = ref('');
        const country = ref('');
        const showEmail = ref(false);
        const privacySettings = ref([
            { label: 'Profilbild für Freunde sichtbar machen', enabled: false },
            { label: 'Banner für jeden sichtbar machen', enabled: false },
            { label: 'Status-Updates nur für mich sichtbar machen', enabled: false },
            { label: 'Freundesliste ausblenden', enabled: false },
            { label: 'Letzter Login-Status für Freunde verbergen', enabled: false },
            { label: 'Email-Adresse nicht anzeigen', enabled: false },
            { label: 'Standort nicht anzeigen', enabled: false },
            { label: 'Alter nicht anzeigen', enabled: false },
            { label: 'Telefonnummer nicht anzeigen', enabled: false },
            { label: 'Beiträge für bestimmte Gruppen sichtbar machen', enabled: false },
            { label: 'Beiträge für spezifische Benutzer sichtbar machen', enabled: false },
            { label: 'Beiträge für öffentliche Anzeige sperren', enabled: false },
            { label: 'Aktivitätsstatus ausblenden', enabled: false },
            { label: 'Letzte Aktivität nicht anzeigen', enabled: false },
            { label: 'Beitragskommentare nur für Freunde zulassen', enabled: false },
            { label: 'Freundesliste nur für mich sichtbar machen', enabled: false },
            { label: 'Zuletzt gesehene Beiträge ausblenden', enabled: false },
            { label: 'Profil-Besucher nicht anzeigen', enabled: false },
            { label: 'Kontaktanfragen nur von Freunden zulassen', enabled: false },
            { label: 'Geplante Aktivitäten nicht anzeigen', enabled: false },
            { label: 'Letzte Aktualisierung des Profils ausblenden', enabled: false },
            { label: 'Kontaktinformationen nicht anzeigen', enabled: false },
            { label: 'Anmeldedatum nicht anzeigen', enabled: false },
            { label: 'Konto-Aktivität verbergen', enabled: false },
        ]);
        const sessions = ref([
            { device: 'Chrome auf Windows 10', lastLogin: 'vor 1 Stunde', current: false },
            { device: 'Firefox auf macOS', lastLogin: 'vor 30 Minuten', current: true },
            { device: 'Safari auf iPhone', lastLogin: 'vor 5 Minuten', current: false }
        ]);
        const showManageSessionModal = ref(false);
        const confirmingDelete = ref(false);
        const confirmingUsername = ref(false);
        const enteredUsername = ref('');
        const profileVisibility = ref('public');
        const accountType = ref('normal');
        const profilePictureVisibility = ref('everyone');
        const bannerVisibility = ref('everyone');

        const savePersonalInfo = () => {
            console.log('Persönliche Informationen gespeichert:', {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                street: street.value,
                houseNumber: houseNumber.value,
                zipCode: zipCode.value,
                state: state.value,
                country: country.value,
            });
        };

        const savePrivacySettings = () => {
            const selectedSettings = privacySettings.value.filter(setting => setting.enabled);
            console.log('Ausgewählte Privacy-Einstellungen:', selectedSettings);
            // Hier könnten die Privacy-Einstellungen gespeichert werden
        };

        const logoutSession = (index) => {
            console.log('Abmelden von Session:', sessions.value[index]);
            sessions.value.splice(index, 1);
        };

        const deleteAccount = () => {
            console.log('Konto löschen');
        };

        const openConfirmationModal = () => {
            confirmingDelete.value = true;
        };

        const confirmDelete = () => {
            confirmingUsername.value = true;
        };

        const cancelDelete = () => {
            confirmingDelete.value = false;
        };

        const confirmUsername = () => {
            // Hier würden Sie den tatsächlichen Löschvorgang durchführen
            console.log('Konto gelöscht:', enteredUsername.value);
        };

        const cancelUsername = () => {
            confirmingUsername.value = false;
        };

        const editProfile = () => {
            console.log('Profil bearbeiten');
        };

        const saveProfileSettings = () => {
            console.log('Profil-Einstellungen gespeichert:', {
                profileVisibility: profileVisibility.value,
                accountType: accountType.value,
                profilePictureVisibility: profilePictureVisibility.value,
                bannerVisibility: bannerVisibility.value,
            });
        };

        return {
            firstName,
            lastName,
            email,
            street,
            houseNumber,
            zipCode,
            state,
            country,
            showEmail,
            privacySettings,
            sessions,
            showManageSessionModal,
            confirmingDelete,
            confirmingUsername,
            enteredUsername,
            profileVisibility,
            accountType,
            profilePictureVisibility,
            bannerVisibility,
            saveProfileSettings,
            savePersonalInfo,
            savePrivacySettings,
            logoutSession,
            deleteAccount,
            openConfirmationModal,
            confirmDelete,
            cancelDelete,
            confirmUsername,
            cancelUsername,
            editProfile
        };
    }
};
</script>

<style scoped>
/* Globale Stile */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
}

.settings {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

h3 {
    font-size: 20px;
    margin-bottom: 15px;
}

.input-group {
    display: flex;
    margin-bottom: 20px;
}

.input-group > div {
    flex: 1;
    margin-right: 10px;
}

.input-group > div:last-child {
    margin-right: 0;
}

.input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin: 10px 0 2rem 0;
}

button:hover {
    background-color: #0056b3;
}

/* Privacy Settings */
.privacy-settings div {
    display: inline-block;
    width: 25%;
    margin-bottom: 10px;
}

/* Session Settings */
.session-settings {
    margin-top: 30px;
}

.session-settings p {
    margin-bottom: 10px;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    color: rgb(255, 255, 255);
}

.modal-content {
    background-color: #333;
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba(231, 7, 7, 0.692);
    padding: 3rem 3rem 1rem 3rem;
    position: relative;
    list-style: none;
}

.modal-content h4 {
    margin-top: -2rem;
    padding-bottom: 1rem;
    font-size: 24px;
}

.modal-content ul {
    list-style: none;
}

.modal-content ul li {
    padding: 0 0 1rem 0;
}

.close {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;
    color: rgb(255, 255, 255);
}

.manage-sessions-link {
    position: absolute;
    top: 10px;
    left: 10px;
    cursor: pointer;
    color: black;
}

/* Delete Account */
.delete-account {
    text-align: center;
    margin-top: 50px;
}

.confirmation-modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.username-modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.username-modal input {
    width: 100%;
    margin-bottom: 10px;
}

/* Profile Settings */
.profile-settings {
    display: flex;
    flex-wrap: wrap;
}

.profile-settings > div {
    flex: 0 0 calc(33.333% - 10px);
    margin-right: 20px;
    margin-bottom: 20px;
}

.profile-settings > div:last-child {
    margin-right: 0;
}

</style>
