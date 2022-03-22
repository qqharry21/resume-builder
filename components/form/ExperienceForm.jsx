/** @format */

import {
  Grid,
  GridItem,
  Heading,
  Button,
  HStack,
  SimpleGrid,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Field, FieldArray } from 'formik';
import { alert, success } from '../../services/notifyService';
import { fadeInUp, show } from '../../utils/animate';
import { CgPlayListAdd, DeleteIcon, CalendarIcon } from '../icon';
import { InputField, DateInputField, TextAreaInput } from '.';
import { MotionBox, IconButton } from '../motion';
const ExperienceForm = () => {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleRemove = (index, length, push, remove) => {
    if (length - 1 === 0) {
      alert('At least one experience');
      push(experience);
    } else {
      success(`Remove Experience ${index + 1}`);
    }
    remove(index);
  };
  const handleAdd = push => {
    push(experience);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  };

  return (
    <>
      <FieldArray name='experience'>
        {({ push, remove, form }) => {
          const length = form.values.experience.length;
          return (
            <SimpleGrid spacing={6}>
              {form.values.experience.map((experience, index) => {
                return (
                  <MotionBox
                    key={index}
                    px={[4, 10]}
                    pt={2}
                    pb={8}
                    boxShadow='md'
                    rounded='md'
                    variants={fadeInUp}
                    initial='initial'
                    exit='exit'
                    animate='animate'>
                    <HStack py={4} justify='space-between'>
                      <Heading size='md'>Experience {index + 1}</Heading>
                      {isMobile ? (
                        <IconButton
                          variant='ghost'
                          colorScheme={'teal'}
                          aria-label='Remove experience'
                          key='remove'
                          icon={<DeleteIcon size={25} />}
                          onClick={() => {
                            handleRemove(index, length, push, remove);
                          }}
                        />
                      ) : (
                        <Button
                          type='button'
                          colorScheme='teal'
                          aria-label='Remove experience'
                          p={[2, 4]}
                          leftIcon={<DeleteIcon />}
                          onClick={() => {
                            handleRemove(index, length, push, remove);
                          }}>
                          Remove
                        </Button>
                      )}
                    </HStack>
                    <Grid templateColumns='repeat(4,1fr)' gap={4}>
                      {/* Company Name */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`experience[${index}].company`}
                          component={InputField}
                          label='company'
                          isRequired
                          placeholder='Company Name'
                        />
                      </GridItem>
                      {/* Role */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`experience[${index}].role`}
                          component={InputField}
                          label='role'
                          isRequired
                          placeholder='Position'
                        />
                      </GridItem>
                      {/* Start Date */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`experience[${index}].startDate`}
                          label='start date'
                          isRequired
                          data={startDate}
                          setData={setStartDate}
                          maxDate={endDate}
                          component={DateInputField}
                          icon={CalendarIcon}
                        />
                      </GridItem>
                      {/* End Date */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`experience[${index}].endDate`}
                          label='end date'
                          isRequired
                          data={endDate}
                          setData={setEndDate}
                          maxDate={new Date()}
                          minDate={startDate}
                          component={DateInputField}
                          icon={CalendarIcon}
                        />
                      </GridItem>
                      {/* Description */}
                      <GridItem colSpan={4}>
                        <Field
                          name={`experience[${index}].description`}
                          component={TextAreaInput}
                          label='description'
                          placeholder='Experience Description'
                        />
                      </GridItem>
                    </Grid>
                  </MotionBox>
                );
              })}
              <IconButton
                variant='solid'
                colorScheme={'teal'}
                aria-label='Add experience'
                key='add'
                size='md'
                variants={show}
                style={{ position: 'fixed', left: '0.5rem', top: '30vh' }}
                icon={<CgPlayListAdd size={22} />}
                onClick={() => {
                  handleAdd(push);
                }}
              />
            </SimpleGrid>
          );
        }}
      </FieldArray>
    </>
  );
};

const experience = { company: '', role: '', startDate: '', endDate: '', description: '' };

export default ExperienceForm;
