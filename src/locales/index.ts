import zh from './languages/zh.json';
import en from './languages/en.json';

type Translations = {
    [key: string]: {
        [key: string]: string;
    }
};

type Language = keyof typeof translations;
type TranslationKeys = keyof typeof zh;

const DEFAULT_LANGUAGE: Language = 'zh';

const translations: Translations = {
    zh,
    en
};

export const getTranslation = (lang: Language, key: TranslationKeys): string => {
    const language = translations[lang] ? lang : DEFAULT_LANGUAGE;
    return translations[language]?.[key] || key;
};