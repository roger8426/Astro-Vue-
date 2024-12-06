import { defineStore } from 'pinia'

export const useMetaStore = defineStore('meta', () => {
    interface metaType {
        title: string,
        description: string
    }

    const updateMetaData = ({ title = "", description = "" }: metaType) => {
        document.title = title;

        const metaDescription = document.querySelector("meta[name='description']");

        if (metaDescription) {
            metaDescription.setAttribute("content", description);
            return
        }
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);

    }

    return {
        updateMetaData
    }
})