import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { getDepositData } from '@/apis/deposit'

export const useDepositStore = defineStore('deposit', () => {
    interface metaType {
        title: string,
        description: string
    }

    const depositMeta: metaType = reactive({
        title: "",
        description: ""
    })

    const updateDepositMeta = async () => {
        const { data } = await getDepositData()
        const meta: metaType = data.data[0]

        depositMeta.title = meta.title
        depositMeta.description = meta.description
    }

    return {
        depositMeta,
        updateDepositMeta
    }
})