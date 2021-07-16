import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import store from 'stores/store';

import SEO from '../next-seo.config.js';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default appWithTranslation(MyApp);
