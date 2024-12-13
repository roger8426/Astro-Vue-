import { defineStore } from 'pinia'
import { ref } from "vue"
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage"

export const useLanguageStore = defineStore("language", () => {
    const currentLanguage = ref(getLocalStorage("ME_PAY_LANGUAGE") || 'zh')

    const switchLanguage = (lang: string) => {
        currentLanguage.value = lang
        setCurrentLanguage()
    }

    const setCurrentLanguage = () => {
        setLocalStorage("ME_PAY_LANGUAGE", currentLanguage.value)
    }

    return {
        currentLanguage,
        switchLanguage,
        setCurrentLanguage
    }
})