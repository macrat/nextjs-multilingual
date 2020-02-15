import {NextPageContext} from 'next';
import {AppProps} from 'next/app';

import {Locale, LocaleProvider} from '../lib/i18n';


function App({Component, pageProps}: AppProps<{locale?: Locale}>) {
    return (
        <LocaleProvider locale={pageProps?.locale}>
            <Component {...pageProps} />
        </LocaleProvider>
    );
}


App.getInitialProps = ({query}: NextPageContext) => ({
    locale: query?.locale as Locale,
});


export default App;
