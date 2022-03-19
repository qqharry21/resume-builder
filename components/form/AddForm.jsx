/** @format */
import { Box, Button, Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight } from '../../utils/animate';
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
  const MotionBox = motion(Box);
  const MotionBtn = motion(Button);
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
        <Box px={8} py={4} w='90%' borderRadius='5px'>
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
                    <MotionBtn
                      leftIcon={<ArrowBackIcon />}
                      onClick={() => setStep(s => s - 1)}
                      variants={fadeInLeft}
                      initial='initial'
                      exit='exit'
                      animate='animate'>
                      Back
                    </MotionBtn>
                  )}
                  <MotionBtn
                    rightIcon={<ArrowForwardIcon />}
                    type='submit'
                    variants={fadeInRight}
                    initial='initial'
                    exit='exit'
                    animate='animate'>
                    {isLastStep() ? 'Submit' : 'Next'}
                  </MotionBtn>
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
