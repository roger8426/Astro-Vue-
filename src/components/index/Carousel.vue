<template>
  <n-carousel
    effect="card"
    prev-slide-style="transform: translateX(-150%) translateZ(-800px);"
    next-slide-style="transform: translateX(50%) translateZ(-800px);"
    style="height: 40vh"
    :show-dots="false"
    autoplay
  >
    <n-carousel-item
      :style="{ width: '90%' }"
      v-for="img in images"
      :key="img.src"
    >
      <a href="#"><img class="carousel-img" :src="img.src" /></a>
    </n-carousel-item>
  </n-carousel>
</template>

<script setup>
import { NCarousel, NCarouselItem } from "naive-ui";
import { ref } from "vue";

const images = ref([
  {
    src: "https://fakeimg.pl/1200x400/?text=SLIDE-1",
  },
  {
    src: "https://fakeimg.pl/1200x400/?text=SLIDE-2",
  },
  {
    src: "https://fakeimg.pl/1200x400/?text=SLIDE-3",
  },
  {
    src: "https://fakeimg.pl/1200x400/?text=SLIDE-4",
  },
]);
</script>
  
<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>