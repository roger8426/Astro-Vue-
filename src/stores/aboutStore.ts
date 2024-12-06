import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getAboutData } from '@/apis/about'

export const useAboutStore = defineStore('about', () => {
    interface metaType {
        title: string,
        description: string
    }

    let aboutMeta: metaType = reactive({
        title: "",
        description: ""
    })

    const updateAboutMeta = async () => {        
        const { data } = await getAboutData()

        aboutMeta.title = data.data.title
        aboutMeta.description = data.data.description
    }

    return {
        aboutMeta,
        updateAboutMeta
    }
})