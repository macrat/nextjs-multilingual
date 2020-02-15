import Head from 'next/head';
import {useEffect} from 'react';
import {useRouter} from 'next/router';

import {getInitialLocale} from '../lib/i18n';


function Index() {
    const router = useRouter();

    useEffect(() => {
        router.replace('/[lang]', `/${getInitialLocale()}`);
    });

    return (
        <Head>
            <meta name="robots" content="noindex, nofollow" key="robots" />
        </Head>
    );
}


export default Index;
