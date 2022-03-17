/** @format */
import { Box, Button, Center, Divider, Flex, Heading, Stack } from '@chakra-ui/react';
import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
const AddForm = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];
  console.log(currentChild);
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
        {/* Form Title */}
        <Box p={4} w='100%' align='center'>
          <Heading size='lg'>{currentChild.props.title}</Heading>
        </Box>
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
                    <Button leftIcon={<ArrowBackIcon />} onClick={() => setStep(s => s - 1)}>
                      Back
                    </Button>
                  )}
                  <Button rightIcon={<ArrowForwardIcon />} type='submit'>
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
