/** @format */

/* eslint-disable react/no-children-prop */
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { personalSchema } from '../utils/validate';
import { RiInstagramLine } from 'react-icons/ri';

const PersonDetail = () => {
  return (
    <Box p={6}>
      <Flex justify='center' align='center' direction='column'>
        <Box p={4} w='100%' align='center'>
          <Heading size='lg'>Personal Details</Heading>
        </Box>
        <Box p={8} w='90%' bg='gray.900' borderRadius='5px'>
          <Formik
            validationSchema={personalSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phone: '',
              website: '',
              github: '',
              linkedIn: '',
              twitter: '',
              facebook: '',
              instagram: '',
            }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}>
            <Form>
              <SimpleGrid columns={[1, 2]} spacingX='40px' spacingY='20px'>
                {/* First Name */}
                <Field name='firstName'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.firstName && form.touched.firstName}
                      isRequired>
                      <FormLabel htmlFor='first-name'>First Name</FormLabel>
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
                {/* Last Name */}
                <Field name='lastName'>
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.lastName && form.touched.lastName}
                      isRequired>
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
                {/* Email */}
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} isRequired>
                      <FormLabel htmlFor='email'>Email</FormLabel>
                      <Input
                        {...field}
                        id='email'
                        placeholder='Email'
                        isRequired={true}
                        autoComplete='off'
                      />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Phone */}
                <Field name='phone'>
                  {({ field, form }) => {
                    console.log(form);
                    return (
                      <FormControl isInvalid={form.errors.phone && form.touched.phone} isRequired>
                        <FormLabel htmlFor='phone'>Phone</FormLabel>
                        <Input
                          {...field}
                          type='tel'
                          id='phone'
                          isRequired={true}
                          placeholder='XXXX-XXX-XXX'
                          autoComplete='off'
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                      </FormControl>
                    );
                  }}
                </Field>
                {/* Website */}
                <Field name='website'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.website && form.touched.website}>
                      <FormLabel htmlFor='website'>Website</FormLabel>
                      <Input {...field} id='website' placeholder='Website' autoComplete='off' />
                      <FormErrorMessage>{form.errors.website}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Github */}
                <Field name='github'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.github && form.touched.github}>
                      <FormLabel htmlFor='github'>Github</FormLabel>
                      <Input {...field} id='github' placeholder='Github' autoComplete='off' />
                      <FormErrorMessage>{form.errors.github}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* LinkedIn */}
                <Field name='linkedin'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.linkedin && form.touched.linkedin}>
                      <FormLabel htmlFor='linkedin'>LinkedIn</FormLabel>
                      <Input {...field} id='linkedin' placeholder='LinkedIn' autoComplete='off' />
                      <FormErrorMessage>{form.errors.linkedin}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Twitter */}
                <Field name='twitter'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.twitter && form.touched.twitter}>
                      <FormLabel htmlFor='twitter'>Twitter</FormLabel>
                      <Input {...field} id='twitter' placeholder='Twitter' autoComplete='off' />
                      <FormErrorMessage>{form.errors.twitter}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Facebook */}
                <Field name='facebook'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.facebook && form.touched.facebook}>
                      <FormLabel htmlFor='facebook'>Facebook</FormLabel>
                      <Input {...field} id='facebook' placeholder='Facebook' autoComplete='off' />
                      <FormErrorMessage>{form.errors.facebook}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* Instagram */}
                <Field name='instagram'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.instagram && form.touched.instagram}>
                      <FormLabel htmlFor='instagram'>Instagram</FormLabel>
                      <InputGroup>
                        <Input
                          {...field}
                          id='instagram'
                          placeholder='Instagram'
                          autoComplete='off'
                        />
                        <InputRightElement
                          pointerEvents='none'
                          children={<Icon as={RiInstagramLine} w={5} h={5} />}
                        />
                      </InputGroup>
                      <FormErrorMessage>{form.errors.instagram}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </SimpleGrid>
            </Form>
          </Formik>
        </Box>
        <Box p={8}>
          <Button rightIcon={<ArrowForwardIcon />}>Next</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default PersonDetail;
