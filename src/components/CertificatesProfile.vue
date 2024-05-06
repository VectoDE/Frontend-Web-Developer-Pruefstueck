<template>
    <div class="certificates-profile">
        <h2>Zertifikate des Benutzers</h2>
        <div v-if="loading">Lade Zertifikate...</div>
        <div v-else class="certificate-container">
            <div v-for="certificate in userCertificates" :key="certificate.id" class="certificate">
                <img :src="certificate.image" alt="Zertifikat">
                <h3>{{ certificate.name }}</h3>
                <!-- Hier kann das Bild des Zertifikats als PDF angezeigt werden -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const userCertificates = ref([]);
const loading = ref(true);

onMounted(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
        const data = await response.json();
        userCertificates.value = data.map(certificate => ({
            id: certificate.id,
            name: certificate.title, // Annahme: Zertifikatname
            image: `https://example.com/certificates/${certificate.id}.pdf`, // Annahme: URL zum PDF-Bild des Zertifikats
            releaseDate: certificate.releaseDate,
            certificateNumber: certificate.number,
        }));
        loading.value = false;
    } catch (error) {
        console.error('Fehler beim Laden der Zertifikate:', error);
    }
});
</script>

<style scoped>
.certificates-profile {
    padding: 20px;
}

.certificate-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Automatische Anpassung der Spaltenbreite */
    gap: 20px; /* Abstand zwischen den Zertifikaten */
}

.certificate {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    text-align: center; /* Zentriert den Inhalt der Box */
}

img {
    max-width: 100%; /* Das Bild wird auf die volle Breite des Containers skaliert */
    max-height: 200px; /* Maximale Höhe des Bildes, um es nicht zu groß werden zu lassen */
    display: block; /* Damit das Bild korrekt zentriert wird */
    margin: 0 auto; /* Zentriert das Bild horizontal */
    object-fit: contain; /* Skalierung des Bildes, um das Seitenverhältnis beizubehalten */
}
</style>
