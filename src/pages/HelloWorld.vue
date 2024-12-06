<template>
  <h1>{{ hello }}</h1>
  <div>{{ countStore.count }},{{ countStore.doubleCount }}</div>
  <button
    class="mt-2 px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded"
    @click="countStore.addCount"
  >
    Add Count
  </button>
</template>

<script setup>
import { onMounted } from "vue";
import { pinia } from "@/stores/store";
import { useCountStore } from "@/stores/count";
import { useHomeStore } from "@/stores/homeStore";

const hello = "Hello World";
const countStore = useCountStore(pinia);
const homeStore = useHomeStore(pinia);

onMounted(async () => {
  await homeStore.updateHomeMeta();

  const { title, description } = homeStore.homeMeta;
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