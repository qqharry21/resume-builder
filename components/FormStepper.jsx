/** @format */

import { Form, Formik } from 'formik';
import React, { Children, useState } from 'react';

const FormStepper = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    github: '',
    facebook: '',
    twitter: '',
    linkedin: '',
    instagram: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
        setIsSubmitting(false);
      } else {
        setIsError(true);
        setErrorMessage(data.message);
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(error.message);
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step === 1) {
    }
  };

  return (
    <Formik {...props}>
      <Form autoComplete='off'>{currentChild}</Form>
    </Formik>
  );
};

export default FormStepper;
