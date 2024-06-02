import axios from 'axios';

export async function logout() {
    try {
        await axios.post('/api/logout');

        localStorage.removeItem('user');
    } catch (error) {
        console.error('Logout fehlgeschlagen:', error);
    }
}
