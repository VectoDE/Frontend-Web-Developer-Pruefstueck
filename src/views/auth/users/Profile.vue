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
                <div class="info-block">
                    <div class="profile_lists">
                        <a href="/profile/follower_list" class="follower-info">
                            <span class="label">Follower</span>
                            <span class="count">{{ followerCount }}</span>
                        </a>
                    </div>
                    <div class="profile_lists">
                        <a href="/profile/contact_list" class="contact-info">
                            <span class="label">Contacts</span>
                            <span class="count">{{ contactCount }}</span>
                        </a>
                    </div>
                    <div class="profile-lists">
                        <a href="/profile/friend_list" class="friend-info">
                            <span class="label">Friends</span>
                            <span class="count">{{ friendCount }}</span>
                        </a>
                    </div>
                </div>
                <nav class="profile-nav">
                    <ul>
                        <li :class="{ active: selectedTab === 'posts' }" @click="updateSelectedTab('posts')">Beiträge
                        </li>
                        <li :class="{ active: selectedTab === 'projects' }" @click="updateSelectedTab('projects')">
                            Projekte</li>
                        <li :class="{ active: selectedTab === 'certificates' }"
                            @click="updateSelectedTab('certificates')">Zertifikate</li>
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
import { ref, markRaw } from 'vue';
import PostsProfile from '@/components/PostsProfile.vue'; // Annahme: Komponente für Beiträge
import ProjectsProfile from '@/components/ProjectsProfile.vue'; // Annahme: Komponente für Projekte
import CertificatesProfile from '@/components/CertificatesProfile.vue'; // Annahme: Komponente für Zertifikate

const user = ref({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
});
const backgroundImage = ref('https://via.placeholder.com/1500x500');

const followerCount = '0';
const contactCount = '0';
const friendCount = '0';

// Verwaltung des ausgewählten Tabs
const selectedTab = ref('posts'); // Standardtab: Beiträge
const selectedTabComponent = ref(markRaw(PostsProfile));

// Dynamische Zuweisung der Komponente basierend auf ausgewähltem Tab
const updateSelectedTab = (tab) => {
    selectedTab.value = tab;
    if (tab === 'posts') selectedTabComponent.value = markRaw(PostsProfile);
    else if (tab === 'projects') selectedTabComponent.value = markRaw(ProjectsProfile);
    else if (tab === 'certificates') selectedTabComponent.value = markRaw(CertificatesProfile);
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
    background-color: #333;
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
    color: rgb(255, 255, 255);
}

.profile-header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    padding: 1rem;
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
    color: #a7a7a7;
    margin-bottom: 5px;
}

.location {
    font-size: 16px;
    color: #868686;
}

.info-block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: -12rem;
    margin-bottom: 6.5rem;
    padding: 1rem;
}

.follower-info,
.contact-info,
.friend-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    text-decoration: none;
}

.label {
    font-size: 1rem;
    color: #ffffffc4;
    text-transform: uppercase;
    margin-top: 5px;
    font-weight: 600;
}

.label:hover {
    color: green;
}

.count {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ffffffc4;
}

.count:hover {
    color: green;
}

.profile-nav {
    background-color: #272727;
    padding: 20px 0;
}

.profile-nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

.profile-nav li {
    margin: 0 20px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    cursor: pointer;
}

.profile-nav li:hover {
    color: green;
}

.profile-nav li.active {
    font-weight: bold;
    color: green;
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

@media (max-width: 768px) {
    .profile-header {
        margin-top: 0;
    }

    .info-block {
        margin-top: -2rem;
        margin-bottom: 0;
    }

    .profile-nav {
        padding: 1rem;
    }
}
</style>