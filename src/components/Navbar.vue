<template>
    <!-- Nav -->
    <nav class="nav">
        <!-- Logo -->
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

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
                        <RouterLink to="/services">Service 1</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services">Service 2</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services">Service 3</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services">Service 4</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/services">Service 5</RouterLink>
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
                        <RouterLink to="/about">About 1</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About 2</RouterLink>
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
                <RouterLink v-if="!loggedIn" to="/login" class="profile-link" style="margin-right: 1rem; margin-left: -1rem; text-transform: uppercase;">
                    <span>Login</span>
                </RouterLink>
                <RouterLink v-if="!loggedIn" to="/register" class="profile-link" style="text-transform: uppercase;">
                    <span>Register</span>
                </RouterLink>
            <li class="relative">
                <RouterLink v-if="loggedIn" to="/profile" class="profile-link">
                    <img src="" alt="Profilbild" width="30" height="30" class="rounded-full" />
                    <span>{{ userName }}</span>
                </RouterLink>
                <ul class="submenu">
                    <li>
                        <RouterLink to="/settings">Settings</RouterLink>
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
const userName = "";
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
    width: 150px; /* Feste Breite für das Dropdown-Menü */
    margin-left: -1.5rem;
}

/* Stil für die Dropdown-Menüpunkte */
.submenu li {
    margin-top: 5px;
    white-space: nowrap; /* Verhindert das Umbruch von langen Texten */
    padding: 10px; /* Neues Padding für jedes Listenelement */
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
    margin-left: -5rem;
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

