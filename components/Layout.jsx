/** @format */

import { Container } from '@chakra-ui/react';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW='container.xl'>{children}</Container>
      <ToastContainer hideProgressBar newestOnTop closeOnClick rtl={false} draggable pauseOnHover />
    </>
  );
};

export default Layout;
