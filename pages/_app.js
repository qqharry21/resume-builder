/** @format */

import { ChakraProvider } from '@chakra-ui/react';
import { AnimateSharedLayout } from 'framer-motion';
import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import dynamic from 'next/dynamic';

const DynamicLayout = dynamic(() => import('../components/Layout'), { ssr: false });
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AnimateSharedLayout type='crossfade'>
        <DynamicLayout>
          <Component {...pageProps} />
        </DynamicLayout>
      </AnimateSharedLayout>
    </ChakraProvider>
  );
}

export default MyApp;
