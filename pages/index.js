/** @format */

import { Meta } from '../components';
import React, { useState } from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Meta title='Home' />

      <Center w='100%' h='90vh'>
        <Heading size='4xl'>Build your own resume!!</Heading>
      </Center>
    </>
  );
}
