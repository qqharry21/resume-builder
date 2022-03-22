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
import React from 'react';
import { Field, FieldArray } from 'formik';
import { alert, success } from '../../services/notifyService';
import { fadeInUp, show } from '../../utils/animate';
import { CgPlayListAdd, DeleteIcon } from '../icon';
import { InputField, TextAreaInput } from '.';
import { MotionBox, IconButton } from '../motion';
const ProjectForm = () => {
  const [isMobile] = useMediaQuery('(max-width: 30em)');
  const handleRemove = (index, length, push, remove) => {
    if (length - 1 === 0) {
      alert('At least one project');
      push(projectData);
    } else {
      success(`Remove Project ${index + 1}`);
    }
    remove(index);
  };
  const handleAdd = push => {
    push(projectData);
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  };

  return (
    <>
      <FieldArray name='project'>
        {({ push, remove, form }) => {
          const length = form.values.project.length;
          return (
            <SimpleGrid spacing={6}>
              {form.values.project.map((project, index) => {
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
                      <Heading size='md'>Project {index + 1}</Heading>
                      {isMobile ? (
                        <IconButton
                          variant='ghost'
                          colorScheme={'teal'}
                          aria-label='Remove project'
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
                          aria-label='Remove project'
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
                      {/* Project Name */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`project[${index}].name`}
                          component={InputField}
                          label='name'
                          isRequired
                          placeholder='Project Name'
                        />
                      </GridItem>
                      {/* Project Link */}
                      <GridItem colSpan={[4, 2]}>
                        <Field
                          name={`project[${index}].link`}
                          component={InputField}
                          label='link'
                          placeholder='Project Link'
                        />
                      </GridItem>
                      {/* Project Description */}
                      <GridItem colSpan={4}>
                        <Field
                          name={`project[${index}].description`}
                          component={TextAreaInput}
                          label='description'
                          isRequired
                          placeholder='Project Description'
                        />
                      </GridItem>
                    </Grid>
                  </MotionBox>
                );
              })}
              <IconButton
                variant='solid'
                colorScheme={'teal'}
                aria-label='Add project'
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
const projectData = { name: '', description: '', link: '' };
export default ProjectForm;
