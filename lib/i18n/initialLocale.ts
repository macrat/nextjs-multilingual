import {Locale, defaultLocale} from './types';


export default function getInitialLocale(): Locale {
    if (typeof navigator !== 'undefined') {
        const [browserSetting] = navigator.language.split('-') as Locale[];
        if (browserSetting) return browserSetting;
    }

    return defaultLocale;
}
