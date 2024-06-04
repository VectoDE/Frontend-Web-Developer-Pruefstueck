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
            const response = await axios.post('/api/login', credentials);
            const user = response.data.user;

            commit('setUser', user);

            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error('Login fehlgeschlagen:', error);
        }
    },
    async checkLoggedIn({ commit }) {
        try {
            const response = await axios.get('/api/user');
            const user = response.data.user;

            commit('setUser', user);

            localStorage.setItem('user', JSON.stringify(user));
        } catch (error) {
            console.error('Überprüfen des eingeloggten Benutzers fehlgeschlagen:', error);
        }
    },
    logout({ commit }) {
        localStorage.removeItem('user');

        commit('setUser', null);
    }
};

export default {
    state,
    mutations,
    actions
};
