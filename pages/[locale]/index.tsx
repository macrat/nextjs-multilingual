import {Props} from 'react';

import {useTranslation, Key} from '../../lib/i18n';
import LocaleSelector from '../../components/LocaleSelector';


function LocalIndex(props: Props<any>) {
    const {t} = useTranslation();

    return (
        <main>
            <h1>{t(Key.Title)}</h1>
            <LocaleSelector />
            <article>
                {t(Key.Content)}
            </article>
        </main>
    );
}


export default LocalIndex;
