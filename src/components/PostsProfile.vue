<template>
    <div class="profile-content">
        <h2 v-if="selectedTab === 'posts'">Beiträge</h2>
        <div v-else>
            <div v-if="loading">Lade Beiträge...</div>
            <div v-else>
                <div v-for="post in userPosts" :key="post.id" class="post">
                    <h3>{{ post.title }}</h3>
                    <p>{{ post.body }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const selectedTab = ref('');
const userPosts = ref([]);
const loading = ref(true);

// Beispiel: Laden von Beiträgen des Benutzers
onMounted(() => {
    // Hier API-Aufruf oder Datenbankabfrage zum Laden der Beiträge des Benutzers
    // Beispiel: Annahme, dass userPosts von einer API geladen werden
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
        .then(response => response.json())
        .then(data => {
            userPosts.value = data;
            loading.value = false;
        })
        .catch(error => console.error('Error fetching posts:', error));
});
</script>

<style scoped>
.post {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}
</style>