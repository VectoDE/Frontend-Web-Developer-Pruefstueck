<template>
    <!-- Nav -->
    <nav class="nav">
        <!-- Logo -->
        <a href="/">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
        </a>

        <!-- Menü -->
        <ul class="menu">
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/news">News</RouterLink>
            </li>
            <li class="relative">
                <RouterLink to="/services">Services</RouterLink>
                <ul class="submenu">
                    <li>
                        <RouterLink to="/services/api-development">API Development</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/web-development">Web Development</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/app-development">App Development</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/ui-ux-design">UI/UX Design</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services/graphic-design">Graphic Design</RouterLink>
                    </li>
                </ul>
            </li>
            <li>
                <RouterLink to="/team">Team</RouterLink>
            </li>
            <li class="relative">
                <RouterLink to="/about">About</RouterLink>
                <ul class="submenu">
                    <li>
                        <RouterLink to="/about/projects">Projects</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about/teams">Teams</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About 3</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About 4</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About 5</RouterLink>
                    </li>
                </ul>
            </li>
            <li>
                <RouterLink to="/contact">Contact</RouterLink>
            </li>
        </ul>

        <!-- Profil -->
        <ul class="profile-menu">
                <RouterLink v-if="!isLoggedIn" to="/login" class="profile-link" style="margin-right: 1rem; margin-left: -1rem; text-transform: uppercase;">
                    <span>Login</span>
                </RouterLink>
                <RouterLink v-if="!isLoggedIn" to="/register" class="profile-link" style="text-transform: uppercase;">
                    <span>Register</span>
                </RouterLink>
            <li class="relative" v-if="isLoggedIn">
                <RouterLink to="/profile" class="profile-link">
                    <img src="" alt="Profilbild" width="30" height="30" class="rounded-full" />
                    <span>{{ username }}</span>
                </RouterLink>
                <ul class="submenu">
                    <li>
                        <RouterLink to="/profile/settings">Settings</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/logout">Logout</RouterLink>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
const isLoggedIn = false;
</script>

<style scoped>
/* Stil für die Nav */
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-size: 1rem;
    background-color: #333;
    padding: 0.5rem;
    list-style-type: none;
}

/* Stil für das Logo */
.logo {
    width: 2rem;
    height: auto;
    margin-left: 1rem;
    transform: rotateY(0deg);
    transition: .9s /* Die Drehung soll 0,5 Sekunden dauern */;
    transform-style: preserve-3d;
}

.logo:hover {
    transform: rotateZ(360deg);
    transition: .9s /* Die Drehung soll 0,5 Sekunden dauern */;
    transform-style: preserve-3d;
}

.nav a {
    text-decoration: none;
    /* Entfernt die Unterstreichung */
    color: #fff;
    /* Setzt die Textfarbe auf Weiß */
}

nav a:hover {
    color: #097200;
}

/* Stil für das Hauptmenü */
.menu {
    display: flex;
    list-style: none;
}

/* Stil für Links */
.menu a {
    text-decoration: none;
    /* Entfernt die Unterstreichung */
    color: #fff;
    /* Setzt die Textfarbe auf Weiß */
}

/* Stil für die Dropdown-Menüs */
.submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    border-radius: 4px;
    width: auto;
    margin-left: -2.5rem;
}

/* Stil für die Dropdown-Menüpunkte */
.submenu li {
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    width: 100%;
    margin: 0;
    padding: 0;
}

/* Stil für den Benutzernamen im Dropdown-Menü */
.profile-link span {
    margin-left: 5px;
}

/* Zeige die Dropdown-Menüs beim Hover über die entsprechenden Menüpunkte */
.nav li:hover .submenu {
    display: block;
    list-style-type: none;
    padding: 25px;
    text-align: center;
}

.nav li {
    position: relative;
    padding: 1rem;
    text-transform: uppercase;
}

/* Setze den Abstand zwischen den einzelnen Listenelementen */
.nav li:not(:last-child) {
    margin-right: 20px;
}

/* Stil für das Profilmenü */
.profile-menu {
    display: flex;
    align-items: center;
    position: relative;
    list-style: none;
    margin-right: 2rem;
    margin-left: -9rem;
}

.profile-menu .submenu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    border-radius: 4px;
    width: 150px; /* Feste Breite für das Dropdown-Menü */
    margin-left: 0;
}
</style>

