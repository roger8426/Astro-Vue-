import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCountStore = defineStore('hello', () => {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    const addCount = () => count.value++

    return {
        count,
        doubleCount,
        addCount
    }
})