/** @format */
import { Box, Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '../icon';
import { fadeInLeft, fadeInRight } from '../../utils/animate';
import { Button, MotionBox } from '../motion';

const AddForm = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const handleSubmit = async (values, helpers) => {
    if (isLastStep()) {
      await props.onSubmit(values, helpers);
    } else {
      setStep(s => s + 1);
    }
  };
  return (
    <Box p={6}>
      <Flex justify='center' align='center' direction='column'>
        {/* Form Label */}
        <MotionBox
          p={4}
          w='100%'
          align='center'
          key={currentChild.props.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <Heading size='lg'>{currentChild.props.label}</Heading>
        </MotionBox>
        <Divider />
        {/* Form */}
        <Box px={{ lg: 8, md: 0 }} py={4} w={{ lg: '90%', md: '100%' }} borderRadius='5px'>
          <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={handleSubmit}>
            <Form autoComplete='off'>
              {currentChild}
              {/* Step Button */}
              <Center>
                <Stack p={8} direction={['column', 'row']} spacing='15px'>
                  {step !== 0 && (
                    <Button
                      leftIcon={<ArrowBackIcon />}
                      onClick={() => setStep(s => s - 1)}
                      variants={fadeInLeft}>
                      Back
                    </Button>
                  )}
                  <Button rightIcon={<ArrowForwardIcon />} type='submit' variants={fadeInRight}>
                    {isLastStep() ? 'Submit' : 'Next'}
                  </Button>
                </Stack>
              </Center>
            </Form>
          </Formik>
        </Box>
      </Flex>
    </Box>
  );
};

export default AddForm;
