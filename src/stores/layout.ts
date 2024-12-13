import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getHotGamesData } from '@/apis/layout'

export const useLayoutStore = defineStore('layout', () => {
    interface ListType {
        title: string,
    }

    const hotGameList = reactive<ListType[]>([])

    const getHotGamesList = async () => {
        const { data } = await getHotGamesData()
        hotGameList.splice(0, hotGameList.length, ...data.data);
    }

    return {
        getHotGamesList,
        hotGameList
    }
})