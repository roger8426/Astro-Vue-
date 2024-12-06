import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getHomeData } from '@/apis/home'

export const useHomeStore = defineStore('home', () => {
    interface metaType {
        title: string,
        description: string
    }

    let homeMeta: metaType = reactive({
        title: "",
        description: ""
    })

    const updateHomeMeta = async () => {
        const { data } = await getHomeData()
        
        homeMeta.title = data.data.title
        homeMeta.description = data.data.description
    }

    return {
        homeMeta,
        updateHomeMeta
    }
})