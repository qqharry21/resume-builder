/** @format */

import {
  Grid,
  GridItem,
  Heading,
  Button,
  HStack,
  SimpleGrid,
  useMediaQuery,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Field, FieldArray } from 'formik';
import { alert, success } from '../../services/notifyService';
import { fadeInUp, show } from '../../utils/animate';
import { CgPlayListAdd, DeleteIcon, CalendarIcon } from '../icon';
import { InputField, DateInputField, TextAreaInput } from '.';
import { MotionBox, IconButton } from '../motion';
import { motion } from 'framer-motion';
const SkillForm = () => {
  const handleRemove = (index, length, push, remove) => {
    if (length - 1 === 0) {
      alert('At least one skill');
      push(skill);
    } else {
      success(`Remove Skill ${index + 1}`);
    }
    remove(index);
  };
  const handleAdd = push => {
    push(skill);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  };
  const MotionWrapItem = motion(WrapItem);
  return (
    <>
      <FieldArray name='skill'>
        {({ push, remove, form }) => {
          const length = form.values.skill.length;
          return (
            <>
              <Wrap px={2} pt={2} pb={8}>
                {form.values.skill.map((skill, index) => {
                  return (
                    <MotionWrapItem
                      gap={2}
                      key={index}
                      variants={fadeInUp}
                      initial='initial'
                      exit='exit'
                      animate='animate'>
                      <HStack py={4} justify='space-between'>
                        <IconButton
                          variant='ghost'
                          colorScheme={'teal'}
                          aria-label='Remove skill'
                          key='remove'
                          icon={<DeleteIcon size={25} />}
                          onClick={() => {
                            handleRemove(index, length, push, remove);
                          }}
                        />
                        <GridItem colSpan={[4, 2]}>
                          <Field
                            name={`skill[${index}].name`}
                            component={InputField}
                            label={`skill ${index + 1}`}
                            isRequired
                            placeholder='e.c. React, Javascript... '
                          />
                        </GridItem>
                      </HStack>
                      {/* Skill Name */}
                    </MotionWrapItem>
                  );
                })}
              </Wrap>
              <IconButton
                variant='solid'
                colorScheme={'teal'}
                aria-label='Add skill'
                key='add'
                size='md'
                style={{ position: 'fixed', left: '0.5rem', top: '30vh' }}
                icon={<CgPlayListAdd size={22} />}
                onClick={() => {
                  handleAdd(push);
                }}
              />
            </>
          );
        }}
      </FieldArray>
    </>
  );
};

const skill = { name: '' };

export default SkillForm;
