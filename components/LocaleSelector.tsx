import {useCallback, ChangeEvent} from 'react';
import {useRouter} from 'next/router';

import {useTranslation, Locale} from '../lib/i18n';


export default function LocaleSelector() {
    const {locale, setLocale} = useTranslation();

    const router = useRouter();
    const handler = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
        const regex = new RegExp(`^/(${Locale.toList().join('|')})`);

        router.push(router.pathname, router.asPath.replace(regex, `/${e.target.value}`));
    }, [router]);

    return (
        <select value={locale} onChange={handler}>
            {Locale.toList().map(x => (
                <option value={x as string} key={x as string}>{Locale.toString(x)}</option>
            ))}
        </select>
    );
}
