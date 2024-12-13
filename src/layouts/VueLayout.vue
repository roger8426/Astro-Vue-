<template>
  <n-layout-header
    class="bg-gray-100 border-b flex items-center gap-3 h-16 px-4"
  >
    <img src="https://fakeimg.pl/400x200/?text=Logo" class="h-full" />
    <n-menu
      :options="menuOptions"
      :value="selectedMenu"
      @update:value="handleMenuClick"
      mode="horizontal"
    />
    <n-dropdown
      :show="showDropdown && dropdownOptions.length > 0"
      :options="dropdownOptions"
      trigger="click"
      @select="handleSelect"
      class="w-full"
      :style="{ width: dropdownWidth + 'px' }"
    >
      <n-input
        ref="inputRef"
        type="text"
        size="large"
        placeholder="搜尋"
        v-model:value="keyword"
        :style="{ width: '30%' }"
        @update:value="handleSearch"
        @focus="getHotGame"
        @blur="onBlur"
      />
    </n-dropdown>
    <n-button @click="i18n.switchLanguage(targetLanguage())">{{
      i18n.currentLanguage === "zh" ? "EN" : "中"
    }}</n-button>
    <n-button>登入</n-button>
  </n-layout-header>
  <div class="2xl:container mx-auto px-6">
    <slot />
  </div>
  <Footer></Footer>
</template>

<script setup>
import "@/assets/styles/tailwind.css";
import Footer from "@/components/Footer.vue";
import { NMenu, NLayoutHeader, NInput, NButton, NDropdown } from "naive-ui";
import { ref, onMounted } from "vue";
import { pinia } from "@/stores/store";
import { useLayoutStore } from "@/stores/layout";
import { useLanguageStore } from "@/stores/language";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage";

const layoutStore = useLayoutStore(pinia);
const i18n = useLanguageStore(pinia);

// 主選單
const selectedMenu = ref("home");
const menuOptions = ref([
  { label: "首頁", key: "index", href: "/" },
  { label: "儲值", key: "deposit", href: "/deposit" },
  { label: "關於我們", key: "about", href: "/about" },
]);

const handleMenuClick = (key) => {
  const selectedOption = menuOptions.value.find((item) => item.key === key);
  if (selectedOption?.href) {
    window.location.href = selectedOption.href;
  }
};

// 搜尋框
const keyword = ref("");
const showDropdown = ref(false);
const dropdownOptions = ref([]);
const dropdownWidth = ref(0);
const inputRef = ref(null);

const getHotGame = async () => {
  showDropdown.value = true;
  await layoutStore.getHotGamesList();
  dropdownOptions.value = layoutStore.hotGameList.map((game) => ({
    label: game.title,
    key: game.id,
  }));
};

const handleSelect = (key) => {
  const selectedItem = dropdownOptions.value.find((item) => item.key == key);
  if (selectedItem) {
    keyword.value = selectedItem.label;
  }
  showDropdown.value = false;
};

const onBlur = () => {
  setTimeout(() => {
    showDropdown.value = false;
  }, 100);
};

const targetLanguage = () => {
  const lang = getLocalStorage("ME_PAY_LANGUAGE") || "zh";
  return lang === "zh" ? "en" : "zh";
};

onMounted(() => {
  if (inputRef.value) {
    dropdownWidth.value = inputRef.value.$el.offsetWidth;
  }
  i18n.setCurrentLanguage();
});

window.addEventListener("resize", () => {
  if (inputRef.value) {
    dropdownWidth.value = inputRef.value.$el.offsetWidth;
  }
});

const handleSearch = () => {
  dropdownOptions.value = layoutStore.hotGameList.filter((game) =>
    game.title.toLowerCase().includes(keyword.value.toLowerCase())
  );
};
</script>
