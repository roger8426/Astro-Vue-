import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getAboutData } from '@/apis/about'

export const useAboutStore = defineStore('about', () => {
    interface metaType {
        title: string,
        description: string
    }

    const aboutMeta: metaType = reactive({
        title: "",
        description: ""
    })

    const updateAboutMeta = async () => {
        const { data } = await getAboutData()
        const meta: metaType = data.data[0]

        aboutMeta.title = meta.title
        aboutMeta.description = meta.description
    }

    return {
        aboutMeta,
        updateAboutMeta
    }
})