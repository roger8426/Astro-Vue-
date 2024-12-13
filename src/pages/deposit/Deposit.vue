<template>
  <div>這是儲值頁</div>
</template>

<script setup>
import { pinia } from "@/stores/store";
import { useDepositStore } from "@/stores/depositStore";
import updateMeta from "@/utils/meta";

const depositStore = useDepositStore(pinia);
await depositStore.updateDepositMeta();
updateMeta(depositStore.depositMeta);
</script>