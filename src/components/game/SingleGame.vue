<template>
  <div>{{ title }}</div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>