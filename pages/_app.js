/** @format */

import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { AnimateSharedLayout } from 'framer-motion';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimateSharedLayout type='crossfade'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
