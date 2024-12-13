<template>
  <div>
    <h1>這是關於頁面</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { pinia } from "@/stores/store";
import { useAboutStore } from "@/stores/aboutStore";
import updateMeta from "@/utils/meta";

const aboutStore = useAboutStore(pinia);
await aboutStore.updateAboutMeta();
updateMeta(aboutStore.aboutMeta);
</script>