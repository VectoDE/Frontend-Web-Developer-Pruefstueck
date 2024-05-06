import axios from 'axios';

export async function logout() {
    try {
        // API-Aufruf zum Ausloggen
        await axios.post('/api/logout'); // Annahme: API-Endpunkt für den Logout

        // Erfolgreich ausgeloggt, entferne Benutzer aus dem lokalen Speicher
        localStorage.removeItem('user');
    } catch (error) {
        console.error('Logout fehlgeschlagen:', error);
    }
}
