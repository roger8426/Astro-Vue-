<template>
  <div class="h-72 bg-cyan-900 flex pt-4">
    <div class="2xl:container mx-auto px-6">
      <div class="text-white">
        <img
          src="https://fakeimg.pl/400x200/?text=Logo"
          alt="Logo"
          class="w-36"
        />
        <p class="text-base font-bold">訂閱獲取最新優惠</p>
        <p>
          首次訂閱可獲得<span class="text-amber-500 mx-1 text-base">95折</span
          >優惠
        </p>
        <div class="flex text-black">
          <input
            type="email"
            v-model="subcribeEmail"
            placeholder="輸入您的電子郵件"
            class="px-4 py-2 border border-gray-300 rounded-l-md"
          />
          <button
            @click="subscribe"
            class="px-4 py-2 bg-amber-500 text-white font-semibold rounded-r-md hover:bg-amber-600 focus:outline-none focus:ring-amber-500"
          >
            訂閱
          </button>
        </div>
        <p v-if="error" class="text-red-500">{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const subcribeEmail = ref("");
const error = ref("");

const subscribe = () => {
  if (!isValidEmail(subcribeEmail.value)) {
    error.value = "請輸入有效的電子郵件地址";
  } else {
    error.value = "";
    console.log(`已成功訂閱：${subcribeEmail.value}`);
    subcribeEmail.value = "";
  }
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
</script>