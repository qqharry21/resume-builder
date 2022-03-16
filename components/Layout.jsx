/** @format */

import { Container } from '@chakra-ui/react';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW='container.xl'>{children}</Container>
    </>
  );
};

export default Layout;
