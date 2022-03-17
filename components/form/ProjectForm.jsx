/** @format */

/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Grid,
  GridItem,
  Box,
  Heading,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdWebAsset } from 'react-icons/md';
import { Field, FieldArray } from 'formik';
const ProjectForm = () => {
  const [currentId, setCurrentId] = useState(1);

  // use FieldArray to handle multiple form fields

  return (
    <>
      <Box pb={4} align='center'>
        <Heading size='md'>Project {currentId}</Heading>
      </Box>
      <Grid templateColumns='repeat(4,1fr)' gap={4}>
        {/* First Name */}
        <GridItem colSpan={2}>
          <Field name='firstName'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.firstName && form.touched.firstName} isRequired>
                <FormLabel htmlFor='first-name'>Project Name</FormLabel>
                <Input
                  {...field}
                  id='first-name'
                  placeholder='First Name'
                  isRequired={true}
                  autoComplete='off'
                />
                <FormErrorMessage>{form.errors.firstName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </GridItem>
        {/* Last Name */}{' '}
        <GridItem colSpan={2}>
          <Field name='lastName'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.lastName && form.touched.lastName} isRequired>
                <FormLabel htmlFor='last-name'>Last Name</FormLabel>
                <Input
                  {...field}
                  id='last-name'
                  placeholder='Last Name'
                  isRequired={true}
                  autoComplete='off'
                />
                <FormErrorMessage>{form.errors.lastName}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </GridItem>
        {/* Email */}{' '}
        <GridItem colSpan={4}>
          <Field name='email'>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <InputGroup>
                  <Input
                    {...field}
                    id='email'
                    placeholder='Email'
                    isRequired={true}
                    autoComplete='off'
                  />
                  <InputRightElement
                    pointerEvents='none'
                    children={<Icon as={MdWebAsset} w={5} h={5} />}
                  />
                </InputGroup>
                <FormErrorMessage>{form.errors.email}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
        </GridItem>
      </Grid>
    </>
  );
};

export default ProjectForm;
