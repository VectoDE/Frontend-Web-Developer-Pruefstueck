<template>
    <div class="profile-content">
        <h2 v-if="selectedTab === 'posts'">Beiträge</h2>
        <div v-else>
            <div v-if="loading">Lade Beiträge...</div>
            <div v-else>
                <div v-for="post in userPosts" :key="post.id" class="post">
                    <div class="post-header">
                        <img :src="post.image" alt="Post Image" class="post-image">
                        <div class="post-info">
                            <h3>{{ post.title }}</h3>
                            <p>{{ post.body }}</p>
                            <div class="post-metadata">
                                <p>Veröffentlicht am: {{ post.date }}</p>
                                <p>Von: {{ post.author }}</p>
                                <p>Thema: {{ post.topic }}</p>
                            </div>
                        </div>
                    </div>
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
            userPosts.value = data.map(post => ({
                id: post.id,
                title: post.title,
                body: post.body,
                date: new Date(post.date).toLocaleDateString(),
                author: post.author,
                topic: post.topic,
                // Annahme: URL für Bild des Beitrags
                image: `https://via.placeholder.com/150x150?text=${post.title}`,
            }));
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

.post-header {
    display: flex;
}

.post-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
}

.post-info {
    flex: 1;
}

.post-metadata {
    margin-top: 10px;
    font-size: 0.8em;
    color: #666;
}
</style>
