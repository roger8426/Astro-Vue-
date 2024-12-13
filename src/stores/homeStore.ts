import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getHomeMeta, getIndexContent } from '@/apis/home'

export const useHomeStore = defineStore('home', () => {
    interface metaType {
        title: string,
        description: string
    }

    const homeMeta: metaType = reactive({
        title: "",
        description: ""
    })

    const updateHomeMeta = async () => {
        const { data } = await getHomeMeta()
        const meta: metaType = data.data[0]

        homeMeta.title = meta.title
        homeMeta.description = meta.description
    }

    const getIndexPageData = async () => {
        const { data } = await getIndexContent()
        return data.data
    }

    return {
        homeMeta,
        updateHomeMeta,
        getIndexPageData
    }
})