<template>
  <div id="vue-layout">
    <ul class="flex">
      <li class="mx-1 text-amber-500"><a href="/">Index</a></li>
      <li class="mx-1 text-emerald-500"><a href="/about">About</a></li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
import "@/assets/styles/tailwind.css";
</script>
