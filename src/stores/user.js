import axios from 'axios';

const state = {
    user: null,
    loggedIn: false
};

const mutations = {
    setUser(state, user) {
        state.user = user;
        state.loggedIn = !!user;
    }
};

const actions = {
    async login({ commit }, credentials) {
        try {
            // API-Aufruf zum Einloggen
            const response = await axios.post('/api/login', credentials); // Annahme: API-Endpunkt für den Login
            const user = response.data.user;

            // Benutzerdaten im Store speichern
            commit('setUser', user);

            // Benutzerdaten lokal speichern
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error('Login fehlgeschlagen:', error);
        }
    },
    async checkLoggedIn({ commit }) {
        try {
            // API-Aufruf zum Überprüfen des eingeloggten Benutzers
            const response = await axios.get('/api/user'); // Annahme: API-Endpunkt für den eingeloggten Benutzer
            const user = response.data.user;

            // Benutzerdaten im Store speichern
            commit('setUser', user);

            // Benutzerdaten lokal speichern
            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error('Überprüfen des eingeloggten Benutzers fehlgeschlagen:', error);
        }
    },
    logout({ commit }) {
        // Lokalen Speicher bereinigen
        localStorage.removeItem('user');

        // Benutzerdaten im Store löschen
        commit('setUser', null);

        // Logout-Code für API entfernt, da bereits in der `logout.js`-Datei implementiert
    }
};

export default {
    state,
    mutations,
    actions
};
