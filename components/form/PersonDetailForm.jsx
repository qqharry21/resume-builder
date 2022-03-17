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
  SimpleGrid,
} from '@chakra-ui/react';
import { Field } from 'formik';
import React, { useState } from 'react';
import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiLinkedinLine,
  RiTwitterLine,
  RiGithubLine,
  RiPhoneLine,
} from 'react-icons/ri';
import { MdOutlineEmail, MdWebAsset } from 'react-icons/md';
import { personalSchema } from '../../utils/validate';
import { Form } from '.';
const PersonDetailForm = () => {
  return (
    <Form validationSchema={personalSchema}>
      <SimpleGrid columns={[1, 2]} spacingX='40px' spacingY='20px'>
        {/* First Name */}
        <Field name='firstName'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.firstName && form.touched.firstName} isRequired>
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
        {/* Email */}
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
                  children={<Icon as={MdOutlineEmail} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.email}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* Phone */}
        <Field name='phone'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.phone && form.touched.phone} isRequired>
              <FormLabel htmlFor='phone'>Phone</FormLabel>
              <InputGroup>
                <Input
                  {...field}
                  type='tel'
                  id='phone'
                  isRequired={true}
                  placeholder='XXXX-XXX-XXX'
                  autoComplete='off'
                />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={RiPhoneLine} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* Website */}
        <Field name='website'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.website && form.touched.website}>
              <FormLabel htmlFor='website'>Website</FormLabel>
              <InputGroup>
                <Input {...field} id='website' placeholder='Website' autoComplete='off' />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={MdWebAsset} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.website}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* Github */}
        <Field name='github'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.github && form.touched.github}>
              <FormLabel htmlFor='github'>Github</FormLabel>
              <InputGroup>
                <Input {...field} id='github' placeholder='Github' autoComplete='off' />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={RiGithubLine} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.github}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* LinkedIn */}
        <Field name='linkedin'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.linkedin && form.touched.linkedin}>
              <FormLabel htmlFor='linkedin'>LinkedIn</FormLabel>
              <InputGroup>
                <Input {...field} id='linkedin' placeholder='LinkedIn' autoComplete='off' />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={RiLinkedinLine} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.linkedin}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* Twitter */}
        <Field name='twitter'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.twitter && form.touched.twitter}>
              <FormLabel htmlFor='twitter'>Twitter</FormLabel>
              <InputGroup>
                <Input {...field} id='twitter' placeholder='Twitter' autoComplete='off' />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={RiTwitterLine} w={5} h={5} />}
                />
              </InputGroup>
              <FormErrorMessage>{form.errors.twitter}</FormErrorMessage>
            </FormControl>
          )}
        </Field>
        {/* Facebook */}
        <Field name='facebook'>
          {({ field, form }) => (
            <FormControl isInvalid={form.errors.facebook && form.touched.facebook}>
              <FormLabel htmlFor='facebook'>Facebook</FormLabel>
              <InputGroup>
                <Input {...field} id='facebook' placeholder='Facebook' autoComplete='off' />
                <InputRightElement
                  pointerEvents='none'
                  children={<Icon as={RiFacebookBoxLine} w={5} h={5} />}
                />
              </InputGroup>
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
                <Input {...field} id='instagram' placeholder='Instagram' autoComplete='off' />
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
  );
};

export default PersonDetailForm;
