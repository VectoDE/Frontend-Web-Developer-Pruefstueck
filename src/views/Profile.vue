<template>
    <div class="profile-page">
        <div class="profile">
            <!-- Profil-Cover und -Info -->
            <div class="profile-cover">
                <img :src="backgroundImage" alt="Profile Cover" class="cover-image" />
            </div>
            <div class="profile-info">
                <div class="profile-header">
                    <img :src="user.avatar" alt="Profile Picture" class="profile-picture" />
                    <div class="user-details">
                        <h2>{{ user.name }}</h2>
                        <p class="headline">Headline des Benutzers</p>
                        <p class="location">Stadt, Land</p>
                    </div>
                </div>
                <nav class="profile-nav">
                    <ul>
                        <li @click="selectedTab = 'posts'">Beiträge</li>
                        <li @click="selectedTab = 'projects'">Projekte</li>
                        <li @click="selectedTab = 'certificates'">Zertifikate</li>
                    </ul>
                </nav>
            </div>
            <!-- Dynamischer Inhalt basierend auf ausgewähltem Tab -->
            <div class="profile-content">
                <component :is="selectedTabComponent"></component>
            </div>
            <div class="friends-section">
                <h2>Freunde</h2>
                <!-- Hier können Freunde des Benutzers angezeigt werden -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PostsProfile from '@/components/PostsProfile.vue'; // Annahme: Komponente für Beiträge
import ProjectsProfile from '@/components/ProjectsProfile.vue'; // Annahme: Komponente für Projekte
import CertificatesProfile from '@/components/CertificatesProfile.vue'; // Annahme: Komponente für Zertifikate

const user = ref({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
});
const backgroundImage = ref('https://via.placeholder.com/1500x500');

// Verwaltung des ausgewählten Tabs
const selectedTab = ref('posts'); // Standardtab: Beiträge
const selectedTabComponent = ref('PostsProfile');

// Dynamische Zuweisung der Komponente basierend auf ausgewähltem Tab
const updateSelectedTab = (tab) => {
    selectedTab.value = tab;
    if (tab === 'posts') selectedTabComponent.value = 'PostsProfile';
    else if (tab === 'projects') selectedTabComponent.value = 'ProjectsProfile';
    else if (tab === 'certificates') selectedTabComponent.value = 'CertificatesProfile';
};
</script>

<style scoped>
.profile-page {
    display: flex;
    justify-content: center;
}

.profile {
    width: 100%;
    max-width: 100%;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 0;
}

.profile-cover {
    height: 250px;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}

.cover-image {
    width: 100%;
    height: auto;
}

.profile-info {
    padding: 30px;
}

.profile-info h2 {
    color: black;
}

.profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.profile-picture {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 30px;
}

.user-details {
    flex: 1;
}

.user-details h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.headline {
    font-size: 18px;
    color: #666;
    margin-bottom: 5px;
}

.location {
    font-size: 16px;
    color: #999;
}

.profile-nav {
    background-color: #f4f4f4;
    padding: 20px 0;
}

.profile-nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

.profile-nav li {
    margin: 0 20px;
    color: black;
    font-size: 16px;
    cursor: pointer;
}

.profile-nav a {
    text-decoration: none;
    color: #333;
    font-size: 18px;
}

.profile-content {
    padding: 30px;
}

.friends-section {
    padding: 30px;
}

.friends-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
}
</style>