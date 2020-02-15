import {createContext, useContext, useState, useEffect, FC} from 'react';
import {useRouter} from 'next/router';

import {Key, strings} from './strings';
import {Locale, defaultLocale} from './types';


interface ContextProps {
    readonly locale: Locale
    readonly setLocale: (locale: Locale) => void
}


export const LocaleContext = createContext<ContextProps>({
    locale: defaultLocale,
    setLocale: () => null,
});


export const LocaleProvider: FC<{locale?: Locale}> = ({locale, children}) => {
    const [locale_, setLocale] = useState<Locale>(locale || defaultLocale);
    const {query} = useRouter();

    useEffect(() => {
        const l = query.locale as Locale;
        if (l && locale_ !== l) setLocale(l);
    }, [query.locale]);

    return (
        <LocaleContext.Provider value={{locale: locale_, setLocale: setLocale}}>
            {children}
        </LocaleContext.Provider>
    );
}


export function useTranslation() {
    const {locale, setLocale} = useContext<ContextProps>(LocaleContext);

    function t(key: Key): string {
        const s = strings[locale] && strings[locale][key];

        if (!s) console.warn(`translation "${key as string}" for "${locale as string}" is not found`);

        return s || strings[defaultLocale][key] || '';
    }

    return {t, locale, setLocale};
}
