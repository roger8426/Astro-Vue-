<template>
  <div v-if="sectionData && sectionData.length">
    <div v-for="section in sectionData" :key="section.sectionTitle">
      <div class="flex justify-between">
        <p
          class="text-xl font-bold text-lime-600 border-s-4 ps-3 border-emerald-500 mb-4"
        >
          {{ t(section.sectionTitle) }}
        </p>
        <a
          href="#"
          v-if="section.sectionTitle === 'LATEST_POST'"
          class="text-green-600 text-base font-bold"
          >看全部</a
        >
      </div>
      <div
        class="flex gap-4 mb-12"
        :class="{ 'flex-wrap': section.sectionTitle === 'DEPOSIT_NOW' }"
      >
        <template v-if="section.sectionTitle === 'HOT_GAMES'">
          <a
            v-for="product in section.productList"
            :key="product.productTitle"
            href="#"
            class="flex-auto bg-cover rounded-lg block h-48"
            :style="{ 'background-image': `url(${product.imgUrl})` }"
            @click="goToSelectGame(product)"
          >
            <div
              class="h-full w-full flex items-center justify-center bg-black/20 text-white font-bold rounded-lg"
            >
              {{ product.productTitle }}
            </div>
          </a>
        </template>
        <template v-if="section.sectionTitle === 'DEPOSIT_NOW'">
          <a
            v-for="product in section.productList"
            :key="product.productTitle"
            :href="`/game/${product.productId}`"
            class="block w-32"
          >
            <div class="relative w-full">
              <img
                :src="product.imgUrl"
                :alt="product.productTitle"
                class="rounded-lg"
              />
              <span
                class="absolute top-0 end-0 bg-green-500 px-2 rounded-tr-lg rounded-bl-lg"
                >{{ product.sales }} 折</span
              >
              <p class="text-center mt-2">
                {{
                  `${product.productTitle}${
                    product.isManual ? " (人工儲值)" : ""
                  }`
                }}
              </p>
            </div>
          </a>
        </template>
        <template v-if="section.sectionTitle === 'LATEST_POSTS'">
          <a
            v-for="post in section.postsList"
            :key="post.postTitle"
            href="#"
            class="flex-auto block w-32"
          >
            <img
              :src="post.imgUrl"
              :alt="post.postTitle"
              class="rounded-lg mb-2"
            />
            <p>{{ post.postTitle }}</p>
            <p class="text-xs text-slate-400 mt-1">{{ post.date }}</p>
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { pinia } from "@/stores/store";
import { useHomeStore } from "@/stores/homeStore";
import { useLanguageStore } from "@/stores/language";
import { getTranslation } from "@/locales/index";

import updateMeta from "@/utils/meta";

const homeStore = useHomeStore(pinia);
const i18n = useLanguageStore(pinia);
const sectionData = ref([]);

const t = (key) => getTranslation(i18n.currentLanguage, key);

await homeStore.updateHomeMeta();
updateMeta(homeStore.homeMeta);

onMounted(async () => {
  sectionData.value = await homeStore.getIndexPageData();
});
</script>