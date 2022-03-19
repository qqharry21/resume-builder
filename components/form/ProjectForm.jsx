/** @format */

/* eslint-disable react/no-children-prop */
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Grid,
  GridItem,
  Box,
  Heading,
  Button,
  FormHelperText,
  HStack,
  SimpleGrid,
  IconButton,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Field, FieldArray, getIn } from 'formik';
import { alert, success } from '../../services/notifyService';
import { motion } from 'framer-motion';
import { fadeInRight, fadeInUp } from '../../utils/animate';
import { MdOutlinePlaylistAdd } from 'react-icons/md';

const ProjectForm = () => {
  const MotionBox = motion(Box);
  const MotionBtn = motion(IconButton);
  const handleRemove = (index, length, push, remove) => {
    if (length - 1 === 0) {
      alert('At least one project');
      push({ name: '', description: '', link: '' });
    } else {
      success(`Remove Project ${index + 1}`);
    }
    remove(index);
  };
  const handleAdd = push => {
    push({ name: '', description: '', link: '' });
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  };

  return (
    <>
      <FieldArray name='project'>
        {({ push, remove, form }) => {
          console.log('form', form.values);

          const length = form.values.project.length;
          return (
            <SimpleGrid spacing={6}>
              {form.values.project.map((project, index) => {
                return (
                  <MotionBox
                    key={index}
                    px={10}
                    pt={2}
                    pb={8}
                    boxShadow='md'
                    rounded='md'
                    variants={fadeInUp}
                    initial='initial'
                    exit='exit'
                    animate='animate'>
                    <HStack py={4} justify='space-between'>
                      <Heading size='md'>Project {index + 1}</Heading>
                      <Button
                        type='button'
                        colorScheme='teal'
                        onClick={() => {
                          handleRemove(index, length, push, remove);
                        }}>
                        Remove
                      </Button>
                    </HStack>
                    <Grid templateColumns='repeat(4,1fr)' gap={4}>
                      {/* Project Name */}
                      <GridItem colSpan={2}>
                        <Field
                          name={`project[${index}].name`}
                          component={InputFiled}
                          label='name'
                        />
                      </GridItem>
                      {/* Project Link */}
                      <GridItem colSpan={2}>
                        <Field
                          name={`project[${index}].link`}
                          component={InputFiled}
                          label='link'
                        />
                      </GridItem>
                      {/* Project Description */}
                      <GridItem colSpan={4}>
                        <Field
                          name={`project[${index}].description`}
                          component={InputFiled}
                          label='description'
                        />
                      </GridItem>
                    </Grid>
                  </MotionBox>
                );
              })}
              <MotionBtn
                variant='solid'
                colorScheme={'teal'}
                aria-label='Add project'
                variants={fadeInRight}
                initial='initial'
                exit='exit'
                animate='animate'
                style={{ position: 'fixed', left: '1rem', top: '21vh' }}
                icon={<MdOutlinePlaylistAdd size={22} />}
                onClick={() => {
                  handleAdd(push);
                }}></MotionBtn>
            </SimpleGrid>
          );
        }}
      </FieldArray>
    </>
  );
};

const InputFiled = ({ field, form, label, isRequired }) => {
  const error = getIn(form.errors, field.name);
  const touch = getIn(form.touched, field.name);
  return (
    <FormControl isInvalid={error && touch} isRequired={isRequired}>
      <FormLabel htmlFor={label} style={{ textTransform: 'capitalize' }}>
        {label}
      </FormLabel>
      <Input {...field} id={label} />
      <FormHelperText></FormHelperText>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default ProjectForm;
