/** @format */
import { Box, Center, Divider, Flex, Heading, Stack, useDisclosure } from '@chakra-ui/react';
import { Form, Formik, useFormik } from 'formik';
import React, { Children, useState } from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '../../icon';
import { ResetAlert, SubmitModal } from '.';
import { Button, MotionBox } from '../motion';
import { warning } from '../../services/notifyService';
import { useRouter } from 'next/router';

const AddForm = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const alert = useDisclosure();
  const modal = useDisclosure();
  const router = useRouter();

  const currentChild = childrenArray[step];
  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  const formik = useFormik({
    initialValues: props.initialValues,
  });

  // custom submit
  const handleSubmit = (values, helpers) => {
    if (modal.isOpen) {
      setTimeout(async () => {
        await props.onSubmit(values, helpers);
        modal.onClose();
        setStep(0);
        helpers.resetForm();
        router.push({
          pathname: '/download',
          query: {
            data: JSON.stringify(values),
          },
        });
      }, 2000);
    } else {
      if (isLastStep()) {
        modal.onOpen();
      } else {
        setStep(s => s + 1);
      }
    }
  };
  return (
    <>
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
          <Box px={{ lg: 6, md: 0 }} py={4} w={{ lg: '90%', md: '100%' }} borderRadius='5px'>
            <Formik
              {...formik}
              validationSchema={currentChild.props.validationSchema}
              onSubmit={handleSubmit}>
              {({ handleReset, dirty, isSubmitting, values, submitForm }) => {
                const toggleReset = () => {
                  handleReset();
                  setStep(0);
                };
                return (
                  <Form autoComplete='off'>
                    {currentChild}
                    {/* Step Button */}
                    <Center>
                      <Stack p={8} direction={['column', 'row']} spacing='15px'>
                        <Button
                          type='button'
                          onClick={() => {
                            alert.onOpen();
                          }}
                          disabled={!dirty || isSubmitting}
                          // variants={show}
                        >
                          Reset
                        </Button>
                        {step !== 0 && (
                          <Button
                            leftIcon={<ArrowBackIcon />}
                            onClick={() => setStep(s => s - 1)}
                            // variants={fadeInLeft}
                          >
                            Back
                          </Button>
                        )}
                        <Button
                          rightIcon={<ArrowForwardIcon />}
                          type='button'
                          onClick={handleSubmit}
                          // variants={fadeInRight}
                        >
                          {isLastStep() ? 'Submit' : 'Next'}
                        </Button>
                      </Stack>
                    </Center>
                    <ResetAlert
                      isOpen={alert.isOpen}
                      onClose={alert.onClose}
                      toggleReset={toggleReset}
                    />
                    <SubmitModal
                      isOpen={modal.isOpen}
                      onClose={modal.onClose}
                      type='add'
                      isSubmitting={isSubmitting}
                      toggleSubmit={submitForm}
                    />
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AddForm;
