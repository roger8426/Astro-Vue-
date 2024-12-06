<template>
  <div>
    <h1>about Vue + Astro</h1>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { pinia } from "@/stores/store";
import { useAboutStore } from "@/stores/aboutStore";

const aboutStore = useAboutStore(pinia);

onMounted(async () => {
  await aboutStore.updateAboutMeta();

  const { title, description } = aboutStore.aboutMeta;
  document.title = title;
  const metaDescription = document.querySelector("meta[name='description']");
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  } else {
    const newMeta = document.createElement("meta");
    newMeta.name = "description";
    newMeta.content = description;
    document.head.appendChild(newMeta);
  }
});
</script>