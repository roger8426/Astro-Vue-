import { createI18n } from 'vue-i18n'
import zh from './languages/zh.json'
import en from './languages/en.json'

const i18n = createI18n({
    legacy: false,
    locale: 'zh',
    messages: {
        "en-US": en,
        "zh-TW": zh
    }
})

export { i18n }