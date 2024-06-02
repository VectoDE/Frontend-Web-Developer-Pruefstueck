<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.value, (to) => {
  document.title = to.meta.title || 'Dein Standardtitel';
});
</script>

<style scoped>

</style>