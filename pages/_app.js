import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

import Layout from '@/components/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}