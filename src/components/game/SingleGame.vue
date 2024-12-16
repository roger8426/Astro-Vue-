<template>
  <div v-if="gameData">
    <div>{{ gameData?.title }}</div>
    <div>{{ gameData?.engTitle }}</div>
    <div>{{ `價格： ${gameData?.price}` }}</div>
  </div>
</template>

<script setup>
import { getGameData } from "@/apis/game";
import { ref, onMounted } from "vue";

defineProps({
  productId: {
    type: String,
    required: true,
  },
});

const gameData = ref(null);

onMounted(async () => {
  gameData.value = await getGameData();
  gameData.value = gameData.value.data[0];
});
</script>