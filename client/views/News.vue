<template>
  <div>
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="wrapper">
        <h1>Unternehmen</h1>
        <p>Hier könnte eine kurze Zusammenfassung des Unternehmens stehen.</p>
      </div>
    </header>

    <main>
      <h2>News</h2>
      <div class="news">
        <div v-for="(article, index) in articles" :key="index" class="news-item">
          <img :src="article.image" :alt="article.title" class="news-image" />
          <div class="news-content">
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <div class="meta-info">
              <span>Veröffentlicht am: {{ article.publishedDate }}</span>
              <span>Thema: {{ article.topic }}</span>
              <span>Verfasser: {{ article.publisher }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import "@/assets/main.css";

const articles = [
  {
    title: "News 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Integer euismod porttitor mauris ac eleifend.",
    publishedDate: "01.01.2024",
    topic: "Allgemein",
    publisher: "Autor 1",
    image: "@/assets/news1.jpg",
  },
  {
    title: "News 2",
    description:
      "Phasellus condimentum eu lorem vel vestibulum. Nulla consectetur ipsum sed nisi lacinia fringilla.",
    publishedDate: "02.01.2024",
    topic: "Technologie",
    publisher: "Autor 2",
    image: "@/assets/news2.jpg",
  },
];
</script>

<style scoped>
.news {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
}

.news-item {
  border: 1px solid #ccc;
  padding: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.news-content h3 {
  margin-top: 0;
}

.meta-info {
  margin-top: 10px;
  font-style: italic;
  font-size: 0.8em;
}
</style>
